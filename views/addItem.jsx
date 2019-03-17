var React = require("react");
var DefaultLayout = require('./defaultlayout');

class AddItem extends React.Component {
  render() {
    let items = this.props.items[0];
    console.log(items);
    return (
      
      <DefaultLayout>
      <h2>Adding Item to Cart</h2>
        <div class="d-flex justify-content-center">
              <img src= {items.photo} />
              <form method="POST" action="/items/">
                  <h3> Item ID: {items.id} </h3>
                  <input type="hidden" name = "id" value={items.id} />
                  <h3> Item Name: {items.name} </h3> 
                  <input type="hidden" name = "name" value={items.name} />
                  <h3> Item Price: {items.price} </h3> <br/>
                  <input type="hidden" name = "price" value={items.price} />
                   Item Qty: <input name = "quantity" value="" placeholder="Enter quantity" /> <br/>
                   <input type = "submit" className="btn btn-primary" />
                   
              </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = AddItem;