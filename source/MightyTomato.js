
enyo.kind({
    name:"MightyTomato",
    kind:enyo.VFlexBox,
    seconds:3,
    minutes:0,
    timerInterval:null,
    classes:"onyx",
    components:[
        {kind:onyx.Toolbar, name:"PageHeader", style: "background-color: #0511F8",  components:[
            {content:"Mighty Tomato", name: "Marquee"},
            {kind: onyx.Button, name:"PreferencesButton", classes: "enyo-button-dark", content:"Preferences", ontap: "showPreferencesModal"}//add config buttons here
        ]},
        {flex:1, kind:enyo.Pane, name:"Pane", classname: "mainPane", components:[
            {flex:1, kind:"Scroller", name:"Scroller", components:[
                {kind:"MainButton", name:"MainButton", classes:'main-button',ontap:"mainButtonPress"},
                {kind: onyx.Input, name:"TaskText", classes: 'task-text onyx-input-decorator'},
                {kind:onyx.Button, name:"TimerButton", showing:false, classes:'timer-button', content:"25:00", ontap:"timerButtonPress"},
                {kind: onyx.Popup, modal: true, floating: true, centered: true, name:"PreferencesModal",  components:[
                    { content: "Preferences" },
                    { layoutKind: enyo.HFlexLayout, pack: "center", components: [
                        {content: "Alarm Sound"},
                        {kind: onyx.RadioGroup, name: "AlarmSetting", components: [
                            {name: "longSongRadio", content: "Victory Fanfare", active: true},
                            {name: "shortDing", content: "Short Ding"},
                            {content: "None"}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        {kind: enyo.SlidingPane,
         name: "ConfigSlider"}

    ],

    mainButtonPress:function () {
        this.$.MainButton.hide();
        this.$.TaskText.hide();
        this.$.TimerButton.show();
        this.timerInterval = window.setInterval("t.decrementTimer()", 1000);
        var taskName = this.$.TaskText.getValue();
        if(taskName.length > 0){
          this.$.Marquee.setContent(taskName);
        }else{
          this.$.Marquee.setContent("Mighty Tomato");
        }
    },

    timerButtonPress:function () {
        if (this.timerInterval == null) {
            this.$.TimerButton.hide();
            this.$.TimerButton.setContent("25:00");
            this.$.TaskText.setValue('');
            this.$.MainButton.show();
            this.$.TaskText.show();
            this.minutes = 25;
            this.seconds = 0;
            this.$.Marquee.setValue("Mighty Tomato");
        } else {
            this.timerInterval = window.clearInterval(this.timerInterval);
        }
    },

    decrementTimer:function () {
        if (this.seconds == 0) {
            this.minutes = this.minutes - 1;
            this.seconds = 59;
        } else {
            this.seconds = this.seconds - 1;
        }
        if (this.minutes < 0) {
            window.clearInterval(this.timerInterval);
            this.minutes = 0;
            this.seconds = 0;
            if(this.$.longSongRadio.getActive()){
                var mySound = new buzz.sound("sounds/Victory_Fanfare", {
                    formats:[ "ogg"]
                });
                mySound.play();
            }else if(this.$.shortDing.getActive()){
                var mySound = new buzz.sound("sounds/Short_Ding", {
                    formats:[ "ogg"]
                });
                mySound.play();
            }
        }else{
            var ticking = new buzz.sound("sounds/tick1", { formats:[ "ogg"]});
            ticking.play();
        }

        var mins = this.pad(this.minutes, 2);
        var secs = this.pad(this.seconds, 2);
        this.$.TimerButton.setContent(mins + ":" + secs);
    },
   
    showPreferencesModal: function () {
      this.$.PreferencesModal.show();
    },

    pad:function (number, length) {

        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
});
