enyo.kind({
    name:"MightyTomato",
    kind:enyo.VFlexBox,
    components:[
        {kind:enyo.PageHeader, name:"PageHeader", components:[
            {content:"Mighty Tomato"}
        ]},
        {flex:1, kind:enyo.Pane, name:"Pane", components:[
            {flex:1, kind:"Scroller", name:"Scroller", components:[
                //Insert your components here
                {kind:"MainButton", name:"MainButton", onclick:"mainButtonPress"},
                {kind:"TimerButton", name:"TimerButton",showing: false, className:'timer-button'}

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
    }
});
