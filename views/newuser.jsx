var React = require("react");
//var Default = require("././default");

class Newuser extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/css/login.css"/>
        </head>
            <body>
            <h2> Create a new account </h2>
                  
              <form className="user-form" method="POST" action="/users/new">
              <div class="form-group">
                  <div className="user-attribute input-group mb-3">
                    name<input name="name" type="text" placeholder="Enter your user name here" />
                  </div>
                  <p></p>
                  <div className="user-attribute">
                    password:<input name="password" type="text" />
                  </div>
              </div>
                <input name="submit" type="submit" className="btn btn-primary" />
              </form>
              <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
            </body>
      </html>

      );
  }
  
}
module.exports = Newuser;