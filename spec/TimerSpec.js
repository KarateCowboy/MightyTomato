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




});