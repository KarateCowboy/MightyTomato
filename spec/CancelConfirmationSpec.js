describe("CancelConfirmation", function (){
  var cancelPopup;
  beforeEach(function (){
    cancelPopup = new CancelConfirmation();
  });

  it("exists and is a Popup", function (){
    expect(cancelPopup).toBeDefined();
  });
  it("is hidden by default", function (){
    expect(cancelPopup.showing).toBe(false);
  });
  it("uses a scrim when shown", function (){
    expect(cancelPopup.scrim).toBe(true);
  });
  it("can be autodismissed", function (){
    expect(cancelPopup.autoDismiss).toBe(true);
  });
  it("has a title 'Cancel Pomodoro?", function (){
    expect(cancelPopup.content).toBe("Cancel Pomodoro?");
  });

  describe("YesCancel button", function (){
    it("exists and is kind 'onyx.Button", function (){
      expect(cancelPopup.$.YesCancel).toBeDefined();
      expect(cancelPopup.$.YesCancel.kind).toBe(onyx.Button);
    });
    it("has the text 'Yes, cancel!", function(){
       expect(cancelPopup.$.YesCancel.getContent()).toBe("Yes, cancel!");
    });
    it("calls affirmCancel ontap",function(){
       expect(cancelPopup.$.YesCancel.ontap).toBe("handleAffirmCancel");
    });
  });

  describe("#handleAffirmCancel",function(){
    it("bubbles up a doAffirmCancel",function(){
      spyOn(cancelPopup,'bubbleUp');
      cancelPopup.handleAffirmCancel();
      expect(cancelPopup.bubbleUp).toHaveBeenCalledWith("doAffirmCancel");
    });
    it("hides the modal",function(){
       spyOn(cancelPopup,'hide');
       cancelPopup.handleAffirmCancel();
      expect(cancelPopup.hide).toHaveBeenCalled();
    });
  });

  describe("keepWorking", function(){
     it("exists and is an onyx button",function(){
        expect(cancelPopup.$.KeepWorking).toBeDefined();
        expect(cancelPopup.$.KeepWorking.kind).toBe(onyx.Button);
     });
     it("says 'No, keep working", function(){
        expect(cancelPopup.$.KeepWorking.getContent()).toBe("No, keep working");
     });
     it("hides the modal when pressed",function(){
        expect(cancelPopup.$.KeepWorking.ontap).toBe("handleKeepWorking");
     });
  });
  describe("#handleKeepWorking",function(){
     it("hides the CancelConfirmation",function(){
        spyOn(cancelPopup,'hide');
        cancelPopup.handleKeepWorking();
        expect(cancelPopup.hide).toHaveBeenCalled();
     });
  });

});