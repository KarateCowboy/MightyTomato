enyo.kind({
  name:"PreferencesModal",
  kind:onyx.Popup,
  scrim:true,
  content:"Preferences",
  floating: true,
  autoDismiss: true,
  centered: true,
  components:[
    {tag:"br"},
    { layoutKind:enyo.HFlexLayout, pack:"center", components:[
      {content:"Alarm Sound"},
      {kind:onyx.RadioGroup, name:"AlarmSetting", components:[
        {name:"longAlarm", content:"Victory Fanfare", ontap:"savePreferences"},
        {name:"shortAlarm", content:"Short Ding", active:true, ontap:"savePreferences"},
        {name: "noAlarm", content:"None", ontap:"savePreferences"}
      ]},
      {tag:"br"},
      {classes:"divider", content:"Ticking Sound"},
      {kind:"Group", classes:"tools group", defaultKind:"onyx.Button", name:"TickingOptions", highlander:true, components:[
        {content:"On", name:"tickOn", active:true, classes:"onyx-affirmative", ontap:"savePreferences"},
        {content:"Off", name:"tickOff", classes:"onyx-negative", ontap:"savePreferences"}
      ]}
    ]}
  ],
  loadPreferences: function(){
    if(localStorage["ticking"] != null){
      switch(localStorage['ticking']){
        case "tickOn": this.$.tickOn.active = true;
          this.$.tickOff.active = false;
          break;
        case "tickOff": this.$.tickOff.active = true;
          this.$.tickOn.active = false; 
          break;
        default:
      }
    }
    if(localStorage["alarm"] != null){
      switch(localStorage['alarm']){
        case "longAlarm": this.$.longAlarm.active =true;
          break;
        case "shortAlarm": this.$.shortAlarm.active = false;
          break;
        default:
          this.$.noAlarm.active = true;
      }
    }
  },

  savePreferences: function(){
    localStorage["ticking"] = this.$.TickingOptions.getActive().name;
    localStorage["alarm"] = this.$.AlarmSetting.getActive().name;
  }
});
