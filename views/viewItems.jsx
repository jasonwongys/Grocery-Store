var React = require("react");
var DefaultLayout = require('./defaultlayout');

class ViewItems extends React.Component {
  render() {
    const card = {
       width: '250px',
       display: 'inline-block'
   }
   const cardCon = {
       textAlign: 'center'
   }

    let items = this.props.items.map( (items, index) => {
        return (
                      <div class="card" style={card}>
                          <img src={items.photo} className="card-img-top"/>
                          <div class="card-body">
                          <h5 className="card-title">{items.name}</h5>
                            <p class="card-text">${items.price}</p>
                          </div>
                          <a href={"/items/" + items.id} className="btn btn-primary">Add Item</a>
                        </div>
            );
    });
        return (
         <DefaultLayout>
            <div>
              <h2> List of Items Homepage</h2>
                 <div style={cardCon}>{items}</div>
            </div>
          </DefaultLayout>
    );
  }
}

module.exports = ViewItems;