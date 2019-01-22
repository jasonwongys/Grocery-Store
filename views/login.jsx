var React = require("react");

class Login extends React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
                </head>
                <body>
	
                <h1>Grocery Store Login Page</h1>

                <form action="/" method="POST">
                <div class="form-group">
                <label for="exampleInputEmail1">User Name</label>
	                <input name="username" placeholder="Username"/> <br/>
                </div>

                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
	                <input name="password" type="password" placeholder="Password"/><br/>
                </div>

	                <button type="submit" class="btn btn-primary">Submit</button>
	               
                </form>

                <a href="/users/new"> New User </a>
                </body>
            </html>
            
        );

    }
}

module.exports = Login;
