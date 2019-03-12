var React = require("react");
var DefaultLayout = require('./defaultlayout');

class ViewItems extends React.Component {
  render() {
    let items = this.props.items.map( (items, index) => {
        return (
              <div>
                    <div className="card d-inline">
                      <img src={items.photo}/>
                        <div clasName="card-body">
                          <h5 className="card-title">{items.name}</h5>
                          <p className="card-text">${items.price} </p>
                          <a href={"/items/" + items.id} class="btn btn-primary">Add Item</a>
                        </div>
                      </div>                           
              </div>
    
            );
    });
        return (
         <DefaultLayout>
            <div> 
              <h2> List of Items Homepage</h2>
              
                    <div class="container">
                    <div class="d-inline">
                 {items}
                    </div>
                             
                           </div>
            
          </div>
          </DefaultLayout>
        
    );
  }
}

module.exports = ViewItems;
