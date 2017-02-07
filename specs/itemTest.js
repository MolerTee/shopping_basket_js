var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

describe ('item', function(){

  it('should have price', function(){
    assert.equal (1.99, item.getPrice());
  });


});