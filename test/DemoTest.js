"use strict";

var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })

    it('should return the index when present', function(){
      assert.equal(1, [4,5,6].indexOf(5));
    })
  })
})