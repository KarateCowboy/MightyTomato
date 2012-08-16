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
        {name:"longAlarm", content:"Victory Fanfare"},
        {name:"shortAlarm", content:"Short Ding", active:true},
        {name: "noAlarm", content:"None"}
      ]},
      {tag:"br"},
      {classes:"divider", content:"Ticking Sound"},
      {kind:"Group", classes:"tools group", defaultKind:"onyx.Button", name:"TickingOptions", highlander:true, components:[
        {content:"On", name:"tickOn", active:true, classes:"onyx-affirmative"},
        {content:"Off", name:"tickOff", classes:"onyx-negative"}
      ]}
    ]}
  ]
});