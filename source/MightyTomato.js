enyo.kind({
  name:"MightyTomato",
  kind:enyo.VFlexBox,
  classes:"onyx",
  interval: null,
  longFinishSound: null,
  shortFinishSound: null,
  timerMode: 'work',
  tick: null,
  constructor: function(){
    this.longFinishSound = new Audio("sounds/Victory_Fanfare.ogg");
    this.shortFinishSound = new Audio("sounds/Short_Ding.ogg");
    this.inherited(arguments);
  },
  components:[
    {kind:onyx.Toolbar, name:"PageHeader", style:"background-color: #0511F8", components:[
      {content:"Mighty Tomato", name:"Marquee"},
      {kind:onyx.Button, name:"PreferencesButton", classes:"enyo-button-dark", content:"Preferences", ontap:"showPreferencesModal"}//add config buttons here
    ]},
    {flex:1, kind:enyo.Pane, name:"Pane", classname:"mainPane", components:[
      {flex:1, kind:"Scroller", name:"Scroller", components:[
        {kind:"MainButton", name:"MainButton", classes:'main-button', ontap: "mainButtonPress"},
        {kind: "Timer",name: "timer"},
        {kind:onyx.Button, name:"TimerButton", showing: false, classes:'timer-button', content:"25:00", ontap:"timerButtonPress"},
        {kind: onyx.Button, name: "BreakButton",showing: false, classes:'main-button', content:"Take a Break!", ontap:"startBreak"},
        {kind: "CancelConfirmation", name:"CancelPopup", showing:false},
        {kind: "PreferencesModal", name: "PreferencesPopup", showing:false}
      ]}
    ]}
  ],

    mainButtonPress: function(){
      this.$.PreferencesPopup.loadPreferences();
      this.$.timer.minute = 25;
      this.$.timer.second = 0;
      this.$.MainButton.hide();
      this.$.TimerButton.show();
      t = this.$.timer;
      this.interval = window.setInterval('t.countDown()',1000);
    },

  timerButtonPress: function(){
    this.$.CancelPopup.show();
  },

  handlers: {
    doCountDown: "handleCountDown",
    doFinish: "handleFinish",
    doAffirmCancel:"handleAffirmCancel"
  } ,

  handleCountDown: function(inEvent,inSender){
    if(this.$.PreferencesPopup.$.tickOn.active){
      var snd = new Audio("sounds/tick1.ogg");
      snd.play();
    }
    this.$.TimerButton.setContent(this.$.timer.currentTime());
  },

  handleFinish: function(){
    window.clearInterval(this.interval);
    if(this.$.PreferencesPopup.$.longAlarm.active == true){
      this.longFinishSound.play();
    }else if(this.$.PreferencesPopup.$.shortAlarm.active == true){
      this.shortFinishSound.play();
    }else if(this.$.PreferencesPopup.$.noAlarm.active == false){

    }
    this.$.TimerButton.hide();
    if(this.timerMode == 'work'){
      this.timerMode = 'break';
      this.$.BreakButton.show();
    }else if(this.timerMode =='break'){
      this.timerMode = 'work';
      this.$.MainButton.show();
    }
  },
  handleAffirmCancel: function(){
    window.clearInterval(this.interval);
    this.$.TimerButton.hide();
    this.$.MainButton.show();
  } ,

  startBreak: function(){
    this.$.BreakButton.hide();
    this.$.timer.minute = 5;
    this.$.timer.second = 0;
    this.$.TimerButton.setContent(this.$.timer.currentTime());
    this.$.TimerButton.show();
    t = this.$.timer;
    this.interval = window.setInterval('t.countDown()',1000);
  },

  showPreferencesModal:function (){
    this.$.PreferencesPopup.loadPreferences();
    this.$.PreferencesPopup.show();
  },

  pad:function (number, length){

    var str = '' + number;
    while ( str.length < length ){
      str = '0' + str;
    }
    return str;
  }
});
