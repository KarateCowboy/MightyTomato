describe("TimerButton", function () {
    var timerButton;
    beforeEach(function () {
        timerButton = new TimerButton();
    });

    it("is a custom button", function () {
      expect(timerButton.kind).toBe(enyo.CustomButton);
    });



    describe("displayValue",function(){
      it("is set to 25:00 to begin with", function(){
           expect(timerButton.getDisplayValue()).toBe("25:00");

      })  ;

        it("displays the displayValue as the button text",function(){
            timerButton.setDisplayValue("foo");
             expect(timerButton.caption).toBe("foo");
        });

    });
});