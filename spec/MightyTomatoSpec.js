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
           expect(tomato.timer.minute).toBe(25);
            expect(tomato.timer.second).toBe(0);
        });
        it("starts the timer", function(){
            spyOn(tomato.timer,'start');
            tomato.mainButtonPress();
            expect(tomato.timer.start).toHaveBeenCalled();
        });
      });
  });

    describe("#handlers",function(){
      describe("onCountDown",function(){
        alert(tomato.handlers);
      });
    });




});
