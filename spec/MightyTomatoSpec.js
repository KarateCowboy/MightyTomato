describe("MightyTomato", function () {
    var tomato;
    beforeEach(function () {
        tomato = new MightyTomato();
    });

    it("exists", function () {
        expect(tomato).toNotBe(null);
    });

    describe("Tomato Splash Button", function () {
        it("exists", function () {
            expect(tomato.getComponents().length).toBeGreaterThan(0);
        });
    });

    it("displays a tomato button", function () {
        var names = tomato.getComponents();
        var found = false;
        var com;
        for ( com in names) {
            alert(typeof names[com]);
            if (com.getName() == "startButton") {
                found = true;
            }
        }
        expect(found).toBeTruthy();
    });
});
