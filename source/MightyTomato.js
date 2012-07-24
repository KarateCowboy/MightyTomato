enyo.kind({
  name:"MightyTomato",
  kind:enyo.VFlexBox,
  seconds:25,
  minutes:0,
  timerInterval:null,
  classes:"onyx",
  tick:null,
  tock:null,
  session:'pomodoro',
  tickTock:0,
  components:[
    {kind:onyx.Toolbar, name:"PageHeader", style:"background-color: #0511F8", components:[
      {content:"Mighty Tomato", name:"Marquee"},
      {kind:onyx.Button, name:"PreferencesButton", classes:"enyo-button-dark", content:"Preferences", ontap:"showPreferencesModal"}//add config buttons here
    ]},
    {flex:1, kind:enyo.Pane, name:"Pane", classname:"mainPane", components:[
      {flex:1, kind:"Scroller", name:"Scroller", components:[
        {kind:"MainButton", name:"MainButton", classes:'main-button', ontap:"setupTimer"},
        {kind:onyx.Input, name:"TaskText", classes:'task-text onyx-input-decorator', placeholder:"Some important task..."},
        {kind:onyx.Button, name:"TimerButton", showing:false, classes:'timer-button', content:"25:00", ontap:"timerButtonPress"},
        {kind:onyx.Popup, modal:true, floating:true, centered:true, name:"PreferencesModal", components:[
          { content:"Preferences" },
          {tag:"br"},
          { layoutKind:enyo.HFlexLayout, pack:"center", components:[
            {content:"Alarm Sound"},
            {kind:onyx.RadioGroup, name:"AlarmSetting", components:[
              {name:"longSongRadio", content:"Victory Fanfare"},
              {name:"shortDing", content:"Short Ding", active:true},
              {content:"None"}
            ]},
            {tag:"br"},
            {classes:"divider", content:"Ticking Sound"},
            {kind:"Group", classes:"tools group", defaultKind:"onyx.Button", highlander:true, components:[
              {content:"On", name:"tickOn", active:true, classes:"onyx-affirmative"},
              {content:"Off", name:"tickOff", classes:"onyx-negative"}
            ]}
          ]}
        ]},
        {kind:onyx.Button, name:"BreakButton", classes:"break-button", ontap:"setupTimer", center:true, content:"Break", showing:false}
      ]}
    ]}
  ],

  setupTimer:function (button){
    if ( button === this.$.MainButton ){
      this.$.MainButton.hide();
      this.$.TaskText.hide();
      this.minutes = 25;
      this.seconds = 0;
      this.session = 'pomodoro';
    }else if ( button === this.$.BreakButton ){
      this.$.BreakButton.hide();
      this.minutes = 5;
      this.seconds = 0;
      this.session = 'break';
    }
    this.$.TimerButton.setContent(this.pad(this.minutes, 2) + ":" + this.pad(this.seconds, 2));
    this.$.TimerButton.show();
    this.timerInterval = window.setInterval("t.decrementTimer()", 1000);
    this.tick = new buzz.sound("sounds/tick1", { formats:[ "ogg"]});
    this.tock = new buzz.sound("sounds/tick1", { formats:[ "ogg"]});
    var taskName = this.$.TaskText.getValue();
    if ( taskName.length > 0 ){
      this.$.Marquee.setContent(taskName);
    }else{
      this.$.Marquee.setContent("Mighty Tomato");
    }
  },

  timerButtonPress:function (){
    if ( this.timerInterval == null ){
      this.$.TimerButton.hide();
      this.$.TimerButton.setContent(this.pad(this.minutes, 2) + ":" + this.pad(this.seconds, 2));
      this.$.TaskText.setValue('');
      this.$.MainButton.show();
      this.$.TaskText.show();
      this.minutes = 25;
      this.seconds = 0;
      this.$.Marquee.setValue("Mighty Tomato");
    }else{
      this.timerInterval = window.clearInterval(this.timerInterval);
    }
  },

  decrementTimer:function (){
    if ( this.seconds == 0 ){
      this.minutes = this.minutes - 1;
      this.seconds = 59;
    }else{
      this.seconds = this.seconds - 1;
    }
    if ( this.minutes < 0 ){
      this.finishRun();
    }else{
      if ( this.$.tickOn.getActive() ){
        if ( this.tickTock == 0 ){
          this.tick.setVolume(100);
          this.tick.play();
          this.tickTock = 1;
        }else{
          this.tock.setVolume(100);
          this.tock.play();
          this.tickTock = 0;
        }
      }
    }

    var mins = this.pad(this.minutes, 2);
    var secs = this.pad(this.seconds, 2);
    this.$.TimerButton.setContent(mins + ":" + secs);
  },

  finishRun:function (){
    window.clearInterval(this.timerInterval);
    this.minutes = 0;
    this.seconds = 0;
    if ( this.$.longSongRadio.getActive() ){
      var mySound = new buzz.sound("sounds/tada", {
        formats:[ "ogg"]
      });
      mySound.setVolume(100);
      mySound.play();
    }else if ( this.$.shortDing.getActive() ){
      var mySound = new buzz.sound("sounds/Short_Ding", {
        formats:[ "ogg"]
      });
      mySound.setVolume(80);
      mySound.play();
    }
    this.$.TimerButton.hide();
    if ( this.session.match(/pomodoro/) ){
      this.$.BreakButton.show();
    }else if ( this.session.match(/break/) ){
      this.$.MainButton.show();
      this.$.TaskText.show();
    }
  },

  showPreferencesModal:function (){
    this.$.PreferencesModal.show();
  },

  pad:function (number, length){

    var str = '' + number;
    while ( str.length < length ){
      str = '0' + str;
    }
    return str;
  }
});
