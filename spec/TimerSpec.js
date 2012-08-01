/**
 * Created by JetBrains RubyMine.
 * User: moriger
 * Date: 4/26/12
 * Time: 5:50 PM
 * To change this template use File | Settings | File Templates.
 */

describe("Timer", function () {
    var timer;
    beforeEach(function () {
        timer = new Timer();
    });

    it("has a minute value of 0", function () {
        expect(timer.minute).toBeDefined();
        expect(timer.minute).toBe(0);

    });

    it("has a second value of 0", function () {
        expect(timer.second).toBeDefined();
        expect(timer.second).toBe(0);
    });

    describe("#currentTime", function(){
      it("is defined",function(){
         expect(timer.currentTime).toBeDefined();
      });

      it("is in thformat 00:00", function () {
         expect(timer.currentTime().match(/[\d]{2,2}:[\d]{2,2}/)).toBeTruthy();
      });

      it("returns the current time",function(){
          timer.minute = 3;
          timer.second = 4;
        expect(timer.currentTime()).toBe("03:04");
      });
    });


    describe("pad", function () {
        it("returns 22 when given 22", function () {
            expect(timer.pad('22', 2)).toBe('22');
        });
    });


    describe("#start", function(){
      it("sets the window interval", function(){
        spyOn(window,'setInterval');
        timer.start();
        expect(window.setInterval).toHaveBeenCalled();
      }) ;

      it("sets the countDown function for every second", function(){
        spyOn(window,'setInterval');
        timer.start();
        expect(window.setInterval).toHaveBeenCalledWithValueAsNthParameter("this.countDown",0);
        expect(window.setInterval).toHaveBeenCalledWithValueAsNthParameter(1000,1);
      });
    });


});