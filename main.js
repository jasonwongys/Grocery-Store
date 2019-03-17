const metro = require('feed-me')
 
var beers = metro.getAllResults({ category: 'beverages/beer-cider', filter: 'IPA' })
  .then(beers => console.log(beers));


 console.log(beers);