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
    afterEach(function(){
      tomato.handleFinish();
    });

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

        it("shows the TimerButton",function(){
           tomato.mainButtonPress();
          expect(tomato.$.TimerButton.showing).toBe(true);
        });

        it("sets the content of the TimerButton to the timer's current time", function(){
           tomato.mainButtonPress();
          expect(tomato.$.TimerButton.getContent()).toBe(tomato.$.timer.currentTime());
        });

        it("sets the interval",function(){
           spyOn(window,'setInterval');
           tomato.mainButtonPress();
          expect(window.setInterval).toHaveBeenCalled();
        });
      });
  });

  describe("PreferencesButton",function(){
     it("exists and is a button",function(){
        expect(tomato.$.PreferencesButton).toBeDefined();
        expect(tomato.$.PreferencesButton.kind).toBe(onyx.Button);
     });
     it("says 'Preferences'",function(){
        expect(tomato.$.PreferencesButton.getContent()).toBe("Preferences");
     });
    it("calls showPreferencesModal ontap",function(){
       expect(tomato.$.PreferencesButton.ontap).toBe("showPreferencesModal");
    });

    describe("#showPreferencesModal",function(){
      it("exists",function(){
        expect(tomato.showPreferencesModal).toBeDefined();
      });
      it("calls 'show' on the PreferencesPopup",function(){
         spyOn(tomato.$.PreferencesPopup,'show');
         tomato.showPreferencesModal();
         expect(tomato.$.PreferencesPopup.show).toHaveBeenCalled();
      });
    });
  });

  describe("PreferencesPopup",function(){
     it("exists and is of type PreferencesModal",function(){
        expect(tomato.$.PreferencesPopup).toBeDefined();
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
         spyOn(tomato.$.CancelPopup,'show');
         tomato.timerButtonPress();
         expect(tomato.$.CancelPopup.show).toHaveBeenCalled();
       });
     });

  });

  //TODO write tests for handlers
  describe("handler methods",function(){
     describe("handleCountDown",function(){
        it("updates the TimerButton's content with the currentTime from the timer",function(){
           tomato.$.timer.minute = 22;
           tomato.$.timer.second = 18;
           tomato.handleCountDown();
          expect(tomato.$.TimerButton.getContent()).toBe("22:18");
        });
     });
    describe("handleFinish", function(){
       it("stops the timer",function(){
         spyOn(window,'clearInterval');
         tomato.handleFinish();
         expect(window.clearInterval).toHaveBeenCalled();
       });
       it("plays a completion sound",function(){
         spyOn(tomato.finishSound,'play');
         tomato.handleFinish();
         expect(tomato.finishSound.play).toHaveBeenCalled();
       });
    });

    describe("handleAffirmCancel",function(){
       it('clears the interval',function(){
         spyOn(window,'clearInterval');
         tomato.handleAffirmCancel();
         expect(window.clearInterval).toHaveBeenCalled();
       });
       it("hides the TimerButton",function(){
         spyOn(tomato.$.TimerButton,'hide');
         tomato.handleAffirmCancel();
         expect(tomato.$.TimerButton.hide).toHaveBeenCalled();
       });
      it("shows the MainButton",function(){
        spyOn(tomato.$.MainButton,'show');
        tomato.handleAffirmCancel();
        expect(tomato.$.MainButton.show).toHaveBeenCalled();
      });

    });
  });
  describe("constructor", function(){
    it("assigns the finishSound",function(){
      expect(tomato.finishSound).toBeDefined();
    });
  });



});
