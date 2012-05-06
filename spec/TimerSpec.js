/**
 * Created by JetBrains RubyMine.
 * User: moriger
 * Date: 4/26/12
 * Time: 5:50 PM
 * To change this template use File | Settings | File Templates.
 */

describe("Timer", function () {
    var timer;
    beforeEach(function () {
        timer = new Timer();
    });
    it("is a component", function () {
        expect(timer.kind).toBe(enyo.Component);

    });

    it("has text of 25:00 to start", function () {
        expect(timer.content).toBe("25:00");
    });

    it("has a minute value", function () {
        expect(timer.minute).toBe(25);
    });

    it("has a second value of 0", function () {
        expect(timer.second).toBe(0);
    });
    describe("startTime", function () {
        it("exists", function () {
            expect(timer.getStartTime()).toNotBe(null);
            console.log("Time is " + timer.getStartTime());
        });

        it("is in the format MM/DD/YYYY 00:00:00", function () {
            expect(timer.getStartTime().match(/[\d]{2,2}\/[\d]{2,2}\/[\d]{4,4}[\s]+[\d]{1,2}:[\d]{1,2}:[\d]{1,2}/)).toBeTruthy();
        });

    });

    describe("pad", function () {
        it("returns 22 when given 22", function () {
            expect(timer.pad('22', 2)).toBe('22');
        });
    });


});