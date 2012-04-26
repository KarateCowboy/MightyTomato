/**
 * Created by JetBrains RubyMine.
 * User: moriger
 * Date: 4/26/12
 * Time: 5:14 PM
 * To change this template use File | Settings | File Templates.
 */

describe("MainButton", function () {
    var mainButton;
    beforeEach(function () {
        mainButton = new MainButton();
    });

    it("shows the tomato image", function () {
        var first_component = mainButton.getComponents()[0];
        expect(first_component.kind).toBe(enyo.Image);
        expect(first_component.src).toBe("images/tomato.png");
        expect(first_component.name).toBe("tomatoIcon");
    });

    it("has a counter label", function () {
        var last_component = mainButton.getComponents()[1];
        //expect(last_component.kind).toBe(enyo.Component);


    });
});
