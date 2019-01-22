var React = require("react");
//var Default = require("././default");

class Newuser extends React.Component {
  render() {
    return (
     
          <form className="user-form" method="POST" action="/users/new">
            <div className="user-attribute">
              name<input name="name" type="text" />
            </div>
            <div className="user-attribute">
              password:<input name="password" type="text" />
            </div>
            <input name="submit" type="submit" />
          </form>
  

      );
  }
}
module.exports = Newuser;