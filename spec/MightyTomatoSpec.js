describe("MightyTomato", function (){
  var tomato;
  var components;
  beforeEach(function (){
    tomato = new MightyTomato();
    components = tomato.getComponents();
  });

  it("exists", function (){
    expect(tomato).toNotBe(null);
  });

  describe("MainButton", function(){
     it("exists, and is of kind 'MainButton'", function(){
        expect(tomato.$.MainButton).toBeDefined();
        expect(tomato.$.MainButton.kind).toBe('MainButton');
     });

      it("calls mainButtonPress when tapped",function(){
        expect(tomato.$.MainButton.ontap).toBe('mainButtonPress');
      });

      describe("#mainButtonPress",function(){
        it("hides the MainButton",function(){
           tomato.mainButtonPress();
            expect(tomato.$.MainButton.showing).toBeFalsy();
        });

        it("sets the timer to 25:00",function(){
            tomato.mainButtonPress();
           expect(tomato.$.timer.minute).toBe(25);
            expect(tomato.$.timer.second).toBe(0);
        });
        it("starts the timer", function(){
            spyOn(tomato.$.timer,'start');
            tomato.mainButtonPress();
            expect(tomato.$.timer.start).toHaveBeenCalled();
        });

        it("shows the TimerButton",function(){
           tomato.mainButtonPress();
          expect(tomato.$.TimerButton.showing).toBe(true);
        });

        it("sets the content of the TimerButton to the timer's current time", function(){
           tomato.mainButtonPress();
          expect(tomato.$.TimerButton.getContent()).toBe(tomato.$.timer.currentTime());
        });
      });
  });

  describe("TimerButton",function(){
     it("exists and is an onyx.Button", function(){
       expect(tomato.$.TimerButton).toBeDefined();
       expect(tomato.$.TimerButton.kind).toBe(onyx.Button);
     });
     it("is hidden by default",function(){
        expect(tomato.$.TimerButton.showing).toBeFalsy();
     });
     it("calls timerButtonPress ontap",function(){
        expect(tomato.$.TimerButton.ontap).toBe('timerButtonPress');
     });

     describe("#timerButtonPress",function(){
       it("shows the CancelConfirmation popup", function(){
         spyOn(tomato.$.CancelConfirmation,'show');
         tomato.timerButtonPress();
         expect(tomato.$.CancelConfirmation.show).toHaveBeenCalled();
       });
     });

  });

  describe("CancelConfirmation", function(){
     it("exists and is a Popup", function(){
        expect(tomato.$.CancelConfirmation).toBeDefined();
        expect(tomato.$.CancelConfirmation.kind).toBe(onyx.Popup);
     });


  });

  //TODO write tests for handlers



});
