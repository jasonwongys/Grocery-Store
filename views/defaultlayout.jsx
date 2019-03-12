var React = require('react');


class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
        <title>Grocery Shop</title>
        </head>
        <header>
          <h1> Jason Grocery Shop</h1>
            <nav>
                <ul className="nav justify-content-center bg-dark">
                  <li className="nav-item">
                    <a className="nav-link text-info" href="/items">View Items</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-info" href="/cart">View Cart</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-info" href="/user/logout">Log out</a>
                  </li>
                </ul>
            </nav>
        </header>

        <body className="container-fluid">
            {this.props.children}         
        </body>
        <footer>
          <h4> Created by Jason Wong @ <a href="https://profiles.generalassemb.ly/profiles/jasonwongys">GA Profile</a> </h4>
        </footer>
      </html>
    );
  }
}
module.exports = DefaultLayout;
