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

    it("shows the MainButton on startup", function () {
        var exists = false;
        var showing = false;

        var children = tomato.getComponents();
        for (var i in children) {
            if (children[i].kind == "MainButton") {
                exists = true;
                if (children[i].getShowing() == true) {
                    showing = true;
                }
            }
        }
        expect(exists).toBeTruthy();
        expect(showing).toBeTruthy();
    });

    describe("timerButton instance properties", function () {
        var timerButton;

        beforeEach(function () {
            var children = tomato.getComponents();
            for (var i in children) {
                if (children[i].kind == "TimerButton") {
                    timerButton = children[i];
                }
            }
        });

        it("hides the timerButton upon creation", function () {
            expect(timerButton.getShowing()).toBeFalsy();
        });

        it("has CSS class 'centered'", function () {
            expect(timerButton.className.match(/timer-button/)).toBeTruthy();
        });

    });


    describe("when the main button is pressed", function () {
        var mainButton;
        var timerButton;
        beforeEach(function () {
            var children = tomato.getComponents();
            for (var i in children) {
                if (children[i].kind == "MainButton") {
                    mainButton = children[i];
                }
                if (children[i].kind == "TimerButton") {
                    timerButton = children[i];
                }
            }
        });

        it("is set up to call a function", function () {
            expect(mainButton.onclick == "mainButtonPress").toBeTruthy();

        });

        describe("mainButtonPress", function () {
            it("hides the mainButton", function () {
                tomato.mainButtonPress();
                expect(mainButton.getShowing()).toBeFalsy();
            });
            it("shows the timer button", function () {
                tomato.mainButtonPress();
                expect(timerButton.getShowing()).toBeTruthy();
            });
            it("invokes the timer start", function () {


            });

        });
    });
});
