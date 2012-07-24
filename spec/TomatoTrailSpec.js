/**
 *
 * Created with JetBrains RubyMine.
 * User: moriger
 * Date: 7/23/12
 * Time: 8:00 PM
 * To change this template use File | Settings | File Templates.
 */

describe("TomatoTrail", function (){
  var trail;
  beforeEach(function (){
    trail = new TomatoTrail();
  });

  it("exists", function (){
    expect(trail).toBeDefined();
  });

  it("can hold up to ten tomatoes", function (){
    expect(trail.maxTomatoes).toBeDefined();
    expect(trail.maxTomatoes).toBe(10);
  });

  describe("#addTomato", function (){

  });

});
