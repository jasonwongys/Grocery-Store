var React = require('react');

var DefaultLayout = require('./defaultlayout');
class EditCartItems extends React.Component {

  render() {

    let cartItem = this.props.cart[0];
    //console.log("Result: " + cartItem);

    return (   
    <DefaultLayout>
      <div>
        <h1>Edit Items in Cart</h1>
        <form method="POST" action={"/cart/"+cartItem.items_id+"?_method=PUT"}>
            <h3> Item ID: {cartItem.items_id} </h3>
            <input type="hidden" name = "id" value={cartItem.items_id} />

            <h3> Item Name: {cartItem.name}</h3>

            <h3> Item price: {cartItem.price} </h3>
            
            Item Qty
            <input name = "quantity" value={cartItem.quantity}/> <br />
            <input type = "submit" value="Save Changes"/>
        </form>

        <form method="POST" action={"/cart/" + cartItem.items_id + "?_method=DELETE"}>

            <input type="submit" value="Delete Item"/>
        </form>

      </div>
     </DefaultLayout>
    );
  }
}
module.exports = EditCartItems; 