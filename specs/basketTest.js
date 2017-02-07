var assert = require('assert');
var basket = require('../basket');
var item = require('../item');
var item2 = require('../item2');

describe ('basket', function(){

  it('should be able to add item', function(){
    basket.emptyBasket();
    basket.addItem(item);
    assert.equal(1, basket.items.length);
  });


  it('should total price of items', function(){
    basket.emptyBasket();
    basket.addItem(item);
    assert.equal(1.99, basket.getTotal());
  });

  it('should remove item', function(){
    basket.emptyBasket();
    basket.addItem(item);
    basket.addItem(item2);
    basket.removeItem(item);
    assert.equal(25.00, basket.getTotal());
  });

  it('should apply 5% discount', function(){
    basket.emptyBasket();
    basket.addItem(item);
    basket.getDiscount(true);
    assert.equal(1.89, basket.total);
  });


  it('should apply 10% discount', function(){
    basket.emptyBasket();
    basket.addItem(item);
    basket.addItem(item2);
    basket.getDiscount(false);
    assert.equal(24.29, basket.total);
  });


  it('should apply 15% discount', function(){
    basket.emptyBasket();
    basket.addItem(item);
    basket.addItem(item2);
    basket.getDiscount(true);
    assert.equal(22.94, basket.total);
  });

});

