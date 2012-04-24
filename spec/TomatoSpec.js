describe("Tomato", function () {
    var tomato;
    beforeEach(function () {
        tomato = new Tomato();
    });

    it("exists", function () {
        expect(tomato).toNotBe(null);
    });

    it("is 25 minutes long", function () {
        expect(tomato.getLength()).toBe(25);
    });

    it("has a minute counter", function () {
        expect(tomato.getMinute()).toBe(25);
    });

    it("has a second counter", function () {
        expect(tomato.getSecond()).toBe(0);
    });

    describe("startTime", function () {
        it("exists", function () {
            expect(tomato.getStartTime()).toNotBe(null);
        });

        it("is in the format MM/DD/YYYY 00:00:00", function () {
            expect(tomato.getStartTime().match(/[\d]{1,2}\/[\d]{2,2}\/[\d]{4,4}[\s]+[\d]{1,2}:[\d]{1,2}:[\d]{1,2}/)).toBeTruthy();
        });

    });
});
