enyo.kind({
    name:"MightyTomato",
    kind:enyo.VFlexBox,
    tomato:null,
    components:[
        {kind:enyo.PageHeader, name:"PageHeader", components:[
            {content:"Mighty Tomato"}
        ]},
        {flex:1, kind:enyo.Pane, name:"Pane", components:[
            {flex:1, kind:"Scroller", name:"Scroller", components:[

                {kind:enyo.ToggleButton, name:"mainButton", label:"Start a Tomato", onclick:"mainButtonPress", components:[
                    {kind:enyo.Image, name:"tomatoPic", src:"images/tomato.png", className:"centered"},
                    {kind:enyo.BasicRichText, name:"counterText", showing:false}

                ]}
                //Insert your components here
            ]}
        ]},

        {kind:enyo.Toolbar, name:"Toolbar", components:[

        ]}
    ],

    published:{
        tomato:this.tomato
    },

    mainButtonPress:function () {
        if (this.tomato == null) {
            this.tomato = new Tomato();
        }
        this.$.tomatoPic.hide();
        this.$.counterText.value = this.tomato.getMinute() + ':' + this.tomato.getSecond();
        this.$.counterText.show();
    }
});
