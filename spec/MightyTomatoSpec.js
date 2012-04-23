describe("MightyTomato", function () {
    var tomato;
    var components;
    beforeEach(function () {
        tomato = new MightyTomato();
        components = tomato.getComponents();
    });

    it("exists", function () {
        expect(tomato).toNotBe(null);
    });

    describe("Tomato Splash Button", function () {
        it("has an image", function () {
            expect(tomato.getComponents().length).toBeGreaterThan(0);
            var found = false;
            for(var i in components){
              if(components[i].name == "tomatoPic"){
                found = true;
              }
            }
            expect(found).toBeTruthy();
        });

      it("hides 25:00 by default", function(){
        var shown = true;
        for(var i in components){
          if(components[i].name.match(/counterText/)){
            if(components[i].getShowing() == false)
              shown = false;
          }
        }
        expect(shown).toBe(false);
      });
   
        it("calls mainButtonPress when pressed", function() {
          var found = false;
          for(var i in components){
            if(components[i].name.match(/mainButton/) && components[i].onclick == "mainButtonPress"){
              found = true;
            }
          }
          expect(found).toBeTruthy();
        });
    });

    describe("#mainButtonPress", function(){
      it("hides the tomato image", function() {
        tomato.mainButtonPress();
        for(var i in components){
          if(components[i].name.match(/tomatoPic/)){
            expect(components[i].showing).toBe(false);
          }
        }
      });

      
      it("shows 25:00", function(){
        tomato.mainButtonPress();
        var set = false;
        for(var i in components){
          if(components[i].name.match(/counterText/)){
            if(components[i].getShowing() == true)
              set = true 
          }
        }
        expect(set).toBeTruthy();
      });

      it("sets timerDecrement to be called every one second interval", function(){
        tomato.mainButtonPress();
        for(var i in components){
          if(components[i].name.match(/counterText/)){
            
          }
        }

 
      });
    });

});
