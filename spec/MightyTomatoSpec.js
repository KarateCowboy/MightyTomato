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

    describe("Tomato Splash Button", function () {


    });

});
