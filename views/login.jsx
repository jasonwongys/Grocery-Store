var React = require("react");
var DefaultLayout = require('./defaultlayout');

class Login extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
                    <link rel="stylesheet" href="/css/login.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
                </head>
                <body>
                
	           <div class="login">
                
                <h1 class="headermsg"> Welcome to Jason's Grocery</h1>

                <form action="/" method="POST">

                    <div class="form-group">
                        <label for="exampleInputEmail1">User Name</label>
    	                <input name="username" placeholder="Username"/> <br/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
    	                <input name="password" type="password" placeholder="Password"/><br/>
    	                <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                     <a href="/users/new">New here? Sign Up here </a>

                </form>    
                </div>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
                </body>
            </html>
        );

    }
}

module.exports = Login;
