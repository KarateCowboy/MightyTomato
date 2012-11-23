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
      {kind:onyx.Group, name: "timerLengthGroup", components: [
        {content: "Timer Length"},
        {kind: onyx.PickerDecorator, components:[
          {},
          {kind: onyx.Picker, name:"timerLength" }
        ]}
      ]}
    ]}
  ],
  loadPreferences: function(){
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
  create: function(){
    this.inherited(arguments);
    for(var i = 1; i < 60; i++){
      var component = {content: "" + i, name:"blah" + i} 
      if(i == 25)
        component.active = true;
      this.$.timerLength.createComponent(component);
      
    }
  },

  savePreferences: function(){
    localStorage["alarm"] = this.$.AlarmSetting.getActive().name;
  }
});
