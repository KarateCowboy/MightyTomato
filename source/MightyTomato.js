enyo.kind({
    name:"MightyTomato",
    kind:enyo.VFlexBox,
    seconds:0,
    minutes:25,
    timerInterval:null,
    components:[
        {kind:enyo.PageHeader, name:"PageHeader", components:[
            {content:"Mighty Tomato"}
        ]},
        {flex:1, kind:enyo.Pane, name:"Pane", classname: "mainPane", components:[
            {flex:1, kind:"Scroller", name:"Scroller", components:[
                //Insert your components here
                {kind:"MainButton", name:"MainButton", ontap:"mainButtonPress"},
                {kind:onyx.Button, name:"TimerButton", showing:false, className:'timer-button', content:"25:00", ontap:"timerButtonPress"}

            ]}
        ]},

        {kind:enyo.Toolbar, name:"Toolbar", components:[

        ]}
    ],

    published:{

    },

    mainButtonPress:function () {
        this.$.MainButton.hide();
        this.$.TimerButton.show();
        this.timerInterval = window.setInterval("t.decrementTimer()", 1000);
    },

    timerButtonPress:function () {
        if (this.timerInterval == null) {
            this.$.TimerButton.hide();
            this.$.TimerButton.setContent("25:00");
           this.$.MainButton.show();
            this.minutes = 25;
            this.seconds = 0;
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
            var mySound = new buzz.sound("sounds/Victory_Fanfare", {
                formats:[ "ogg", "mp3", "acc" ]
            });

            mySound.play();
        }
        var mins = this.pad(this.minutes, 2);
        var secs = this.pad(this.seconds, 2);
        this.$.TimerButton.setContent(mins + ":" + secs);
    },

    pad:function (number, length) {

        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
});
