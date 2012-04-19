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
});
