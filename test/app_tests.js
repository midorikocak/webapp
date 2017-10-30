QUnit.test( "a basic test example", function( assert ) {
  var value = sayHello();
  assert.equal( value, "hello", "We expect value to be hello" );
});