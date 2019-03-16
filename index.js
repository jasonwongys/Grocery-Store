console.log("starting up!!");
var PORT = process.env.PORT || 3000;

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const url = require('url');



// Initialise postgres client

if ( process.env.DATABASE_URL ){
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

} else {

    var configs = {
      user: 'postgres',
      host: '127.0.0.1',
      database: 'martdb',
      port: 5432,
      password: '1234'
    };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


// Init express app
const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

/**
* Login Stuff */

//Get the login form for user 
app.get('/', (request, response) => {
  response.render("login");
}).listen();


app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


app.post('/', (request, response) => {

    let text = "SELECT * FROM usersInfo WHERE username='"+request.body.username+"'";
    pool.query(text, (err, result) => {
        //console.log( result.rows );

        // if the user doesnt exist
        if ( result.rows.length === 0 ) {
            console.log("user doesnt exist");
            response.send('User not found');
        }
        else {
            console.log("user exists!!!!!!");

            const user = result.rows[0];
            let password = user.password;

            if ( password == request.body.password ) {
                //password is correct
                console.log('PASSWORD CORRECT TOO');
                response.cookie('loggedin', 'true');
                response.redirect('/items');
            }
            else {
                // password is incorrect
                console.log('PASSWORD not correct');
                response.send('Password incorrect')
            }

        }

    })
});

// Log out of user
app.get('/user/logout', (request, response) => {

  response.clearCookie('loggedin');
  response.redirect('/')
})

//Get user form to create new user 
app.get('/users/new', (req, res) => {
  res.render("newuser");
})

//create a new user
app.post('/users/new', (request, response) => {

    const queryString = 'INSERT INTO usersInfo (username, password) VALUES ($1, $2)';
    const values = [
        request.body.name,
        request.body.password

    ];

    // execute query
    pool.query(queryString, values, (error, queryResult) => {
        //response.redirect('/');
        response.redirect('/');
        response.render("newuser", {user: queryResult.rows});
        
    });
});


// Get form for entering new item to cart 
app.get('/items/new',(req,res) => {
    res.render('addItem')
});

//View the index for all items
app.get('/items', (req, res) => {

    let queryText = `SELECT * FROM items`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log("Result: ", queryResult.rows);
            //console.log(queryResult.rows);
             res.render('viewItems', {items: queryResult.rows});
         };
    });
});

//View an item page 
app.get('/items/:id', (req, res) => {

    let id = req.params.id;
    const queryText = `SELECT * FROM items WHERE id = '${id}'`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Result", queryResult.rows);
            res.render("addItem", {items: queryResult.rows});
        };

 //response.render('home');
    });
});


app.post('/items', (request, response) => {
  let id = request.params.id;
  let queryText = 'INSERT INTO cart (items_id,name, price,quantity) VALUES ($1,$2,$3, $4)';

  const values = [request.body.id, request.body.name, request.body.price,request.body.quantity];

  pool.query(queryText, values, (err, queryResult) => {
            if (err) {
                console.log('Error', err);
                console.log(queryText);
            } else {
              console.log("result", queryResult.rows);
              response.redirect("/items");
            }
    });
});

//View the index for all items
app.get('/cart', (req, res) => {

    const queryText = `SELECT * FROM cart`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log('Error: ', error);
        } else {
            console.log("Result: ", queryResult.rows);
            //console.log(queryResult.rows);
             res.render('viewCart', {cart: queryResult.rows});
         };
    });
});

// Get the item to be updated or deleted
app.get('/cart/:id/edit', (req, res) => {

    let id = req.params.id;
    const queryText = `SELECT * FROM cart WHERE cart.items_id = '${id}'`;

   pool.query(queryText,(err, queryResult) => {
        if (err) {
            console.log("Error", err);
        } else {
            //console.log("result", queryResult.rows);
            res.render("editCartItems", {cart: queryResult.rows});
        };

 //response.render('home');
    });
});

// Update the item quantity in the cart 
app.put('/cart/:id', (req, res) => {
  let id = req.params.id;
  let quantity = req.body.quantity;
  //let queryText = `UPDATE cart SET quantity = '${req.body.quantity}' WHERE cart.items_id = '${id}'`;
  let queryText = `UPDATE cart SET quantity=$1 WHERE items_id=$2 RETURNING *`;
  const values = [req.body.quantity,req.params.id,];

  pool.query(queryText, values, (err, queryResult) => {
    if(err) {
      console.log("Error: ", err);
    } else {
        console.log("Result: ", queryResult.rows);
        res.redirect("/cart");
    }

  });
});

// Get the Item ID to delete item from cart 
/*app.get('/cart/:id/delete', (req,res) => {
    let id = req.params.id;
    let queryText = 'SELECT * FROM cart WHERE cart.item_id = ${id}';

    pool.query( queryText, (err, queryResult) => {
      res.render("editCartItems", {cart: queryResult.rows});
    });
});*/


//Delete the item from the cart 
app.delete('/cart/:id', (req, res) => {
  let id = req.params.id;
  let queryText = `DELETE from cart WHERE cart.items_id  = '${id}'`;
  //let queryText = 'DELETE from cart WHERE cart.items_id = '
  //const values = [req.params.id, req.body.items_id, req.body.name, req.body.price];
  //console.log("Values: ", values);

  pool.query(queryText, (err, queryResult) => {
    if(err) {
      console.log("Error: ", err);
      console.log("Delete object: ", queryResult);
    } else {
      res.redirect("/cart");
    }
    
  });
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(process.env.PORT || 3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
