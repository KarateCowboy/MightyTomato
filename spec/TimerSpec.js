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
        expect(window.setInterval).toHaveBeenCalledWith("this.countDown",1000);
      });
    });
    
    describe("#countDown", function(){
       it("decrements seconds", function(){
           timer.second = 10;
           timer.countDown();
           expect(timer.second).toBe(9);
       });
       it("decrements the minute when the second turns zero", function(){
           timer.second = 1;
           timer.minute = 2;
           timer.countDown();
           expect(timer.minute).toBe(1);
       });
       it("resetts the seconds to fifty-nine after hitting zero", function(){
         timer.second = 0;
         timer.minute = 4;
         timer.countDown();
         expect(timer.second).toBe(59);
       
       });
       it("bubbles up an event every second", function(){
         spyOn(timer,"bubbleUp");
         timer.countDown();
         expect(timer.bubbleUp).toHaveBeenCalledWith("doCountDown");     
       });
       
       it("calls the finish function when counted down", function(){
         spyOn(timer,'finishCounting');
         timer.minute = 0;
         timer.second = 1;
         timer.countDown();
         expect(timer.finishCounting).toHaveBeenCalled();
       });
    });
    
    describe("#finishCounting",function(){
      it("clears the interval", function(){
        spyOn(window,'clearInterval');
        timer.minute = 0;
        timer.second = 1;
        timer.countDown();
        expect(window.clearInterval).toHaveBeenCalledWith(timer.interval);
      });
      it("bubbles up an event", function(){
        spyOn(timer,'bubbleUp');
        timer.finishCounting();
        expect(timer.bubbleUp).toHaveBeenCalledWith('doFinish');      
      });
    });

});