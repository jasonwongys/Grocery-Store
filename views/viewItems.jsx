var React = require("react");
var DefaultLayout = require('./defaultlayout');

class ViewItems extends React.Component {
  render() {
    let items = this.props.items.map( (items, index) => {
        return (
                <div className="row">                
                  <div className="col-sm-4">
                    <span className="card">

                      <img src={items.photo} class="card-img-top" alt="items" />
                        <div clasName="card-body">
                          <h5 class="card-title">{items.name}</h5>
                          <p class="card-text">${items.price} </p>
                          <a href={"/items/" + items.id} class="btn btn-primary">Add Item</a>
                        </div>
                    </span>
                  </div>
                </div>
            );
    });
        return (
         <DefaultLayout>
            <div>
             
              
              <h2> List of Items Homepage</h2>
              
              <div>
                {items}
              </div>
            

              
          </div>
          </DefaultLayout>
        
    );
  }
}

module.exports = ViewItems;
