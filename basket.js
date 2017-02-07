var item = require('./item');
var item2 = require('./item2');

var basket = {
  items: [],
  total: 0,
  loyalty: true,

  printItems: function(){
    return this.items;
  },

  addItem: function(item){
    this.items.push(item);
  },

  getItems: function(){
    
    for (var item of basket.items){
      return item;
    };
  },

  emptyBasket: function(){
    basket.total = 0;
    basket.items = [];
  },

  removeItem: function(item){
    var pos = basket.items.indexOf(item);
    basket.items.splice(pos, 1);
  },

  getTotal: function(){
    for (var item of basket.items){
      basket.total += item.price;
    }
    return basket.total;
  },

  setLoyaltyTrue: function(){
    basket.loyalty = true;
  },

  setLoyaltyfalse: function(){
    basket.loyalty = false;
  },

  getDiscount: function(loyalty){
    var basketTotal = basket.getTotal();
    var discountOverTwenty = (basket.total * 0.9);
    var discountOverTwentyLoyal = (basket.total * 0.85);
    var discountLoyal = (basket.total * 0.95);
    if (basketTotal >= 20 && loyalty === false){
      basket.total = discountOverTwenty.toFixed(2);
    }else if (basketTotal >= 20 && loyalty === true){
      basket.total = discountOverTwentyLoyal.toFixed(2);
    }else if (basketTotal < 20 && loyalty === true){
      basket.total = discountLoyal.toFixed(2);
    };
  },

  
  
  
};


module.exports = basket;