var React = require("react");
var DefaultLayout = require('./defaultlayout');

class ViewCart extends React.Component {
  render() {
    let cart = this.props.cart.map( (cart) => {
        return (

              <div>
                <tbody>
                      <td class="text-justify">{cart.items_id}</td>
                      <td class="text-justify">{cart.name}</td>
                      <td class="text-justify">{cart.price}</td>
                      <td class="text-justify">{cart.quantity}</td>
                      <td class="text-justify"><a href={"/cart/" + cart.items_id+"/edit"}>Edit</a></td>
                </tbody>
            </div>
            );

    });
    return (

          <DefaultLayout>
            <div>
              <h2> My Cart Homepage</h2>
              <table className="table table-hover">
              <thead>
                  <tr>
                    <th scope="col">Item ID</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                  </tr>
              </thead>
                <tbody>
                <tr>
                    {cart}
                </tr>
                  </tbody>
              </table>
              
            </div>
            </DefaultLayout>
    );
  }
}

module.exports = ViewCart;