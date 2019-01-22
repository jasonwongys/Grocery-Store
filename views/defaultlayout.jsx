var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/>
        <title>Grocery Shop</title>
        </head>
        <header>

        </header>
        <body className="container-fluid">
        <h1> Grocery Shop</h1>
        <nav>
            <ul className="nav justify-content-center bg-light">
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
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {this.props.children}
                </div>
              </div>
            </div>
        <footer className="sticky-bottom">

        </footer>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout;
