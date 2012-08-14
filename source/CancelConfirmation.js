enyo.kind({kind:onyx.Popup, floating:true, centered:true, name:"CancelConfirmation", autoDismiss:true, content:"Cancel Pomodoro?", scrim:true, components:[
  {content:"Cancel Pomodoro?"},
  {kind:onyx.GroupBox, name:"ButtonBox",
    components:[
      {kind:onyx.InputDecorator, components:[
        {kind:onyx.Button, name:"YesCancel", centered:true, content:"Yes, cancel!", ontap:"handleAffirmCancel"}
      ]},
      {kind:onyx.InputDecorator, components:[
        {kind:onyx.Button, name:"KeepWorking", centered:true, content:"No, keep working", ontap:"handleKeepWorking"}
      ]}
    ]
  }
],


  handleAffirmCancel:function (){
    this.hide();
    this.bubbleUp("doAffirmCancel");

  },
  handleKeepWorking:function (){
    this.hide();
  }
});