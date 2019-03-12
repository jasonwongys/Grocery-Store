var React = require('react');


class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <title>Grocery Shop</title>
        </head>
        <header>
          <h1> Grocery Shop</h1>
            <nav>
                <ul className="nav justify-content-center bg-success">
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
            <div className="container">
                {this.props.children}         
              </div>
            
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout;
