enyo.kind({
  name:"MightyTomato",
  kind:enyo.VFlexBox,
  classes:"onyx",
  interval: null,
  finishSound: null,
  constructor: function(){
    this.finishSound = new Audio("sounds/Short_Ding.ogg");
    this.inherited(arguments);
  },
  components:[
    {kind:onyx.Toolbar, name:"PageHeader", style:"background-color: #0511F8", components:[
      {content:"Mighty Tomato", name:"Marquee"},
      {kind:onyx.Button, name:"PreferencesButton", classes:"enyo-button-dark", content:"Preferences", ontap:"showPreferencesModal"}//add config buttons here
    ]},
    {flex:1, kind:enyo.Pane, name:"Pane", classname:"mainPane", components:[
      {flex:1, kind:"Scroller", name:"Scroller", components:[
        {kind:"MainButton", name:"MainButton", classes:'main-button', ontap:"mainButtonPress"},
        {kind: "Timer",name: "timer"},
        {kind:onyx.Button, name:"TimerButton", showing:false, classes:'timer-button', content:"25:00", ontap:"timerButtonPress"},
        {kind: "CancelConfirmation", name:"CancelPopup", showing:false},
        {kind:onyx.Popup, floating:true, centered:true, name:"PreferencesModal", components:[
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

    mainButtonPress: function(){
      //this.timer = new Timer();
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
    var snd = new Audio("sounds/tick1.ogg");
    snd.play();
    this.$.TimerButton.setContent(this.$.timer.currentTime());
  },

  handleFinish: function(){
    window.clearInterval(this.interval);
    this.finishSound.play();
  },
  handleAffirmCancel: function(){
    window.clearInterval(this.interval);
    this.$.TimerButton.hide();
    this.$.MainButton.show();
  } ,


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
