describe("PreferencesModal", function () {
    var modal;
    beforeEach(function () {
        modal = new PreferencesModal();
    });
    it("exists and is a Popup", function () {
        expect(modal).toBeDefined();
    });
    it("is hidden by default", function () {
        expect(modal.showing).toBe(false);
    });
    it("uses a scrim when shown", function () {
        expect(modal.scrim).toBe(true);
    });
    it("can be autodismissed", function () {
        expect(modal.autoDismiss).toBe(true);
    });
    it("has the title 'Preferences'", function () {
        expect(modal.getContent()).toBe("Preferences");
    });
    describe("alarm sound group", function () {
        it("has short alarm and long alarm buttons", function () {
            expect(modal.$.shortAlarm).toBeDefined();
            expect(modal.$.longAlarm).toBeDefined();
            expect(modal.$.shortAlarm.getContent()).toBe("Short Ding");
            expect(modal.$.longAlarm.getContent()).toBe("Victory Fanfare");
        });
        it("has a no alarm setting button", function () {
            expect(modal.$.noAlarm).toBeDefined();
            expect(modal.$.noAlarm.getContent()).toBe("None");
        });
    });

    describe("timer length group", function () {
        it("is a group", function () {
            expect(modal.$.timerLengthGroup).toBeDefined();
        });
        it("has a list button for the timer length", function () {
            expect(modal.$.timerLength).toBeDefined();
        });

    });

    describe("#savePreferences", function () {
        it("exists", function () {
            expect(modal.savePreferences).toBeDefined();
        });
        it("saves the name of the active alarm setting", function () {
            modal.savePreferences();
            expect(localStorage['alarm']).toBe("shortAlarm");
        });
        it("saves the length of the timed period", function () {
            console.log(modal.$);
            modal.$.timerLength.selected = modal.$.timerLength.$.blah22;
            modal.savePreferences();
            expect(localStorage['timerLength']).toBe('22');
        });
    });

});
