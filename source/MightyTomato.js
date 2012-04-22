enyo.kind({
	name: "MightyTomato",
	kind: enyo.VFlexBox,
        tomato: null,
	components: [
		{kind: enyo.PageHeader, name:"PageHeader", components: [
			{content: "Mighty Tomato"}
		]},
		{flex: 1, kind: enyo.Pane, name: "Pane", components: [
			{flex: 1, kind: "Scroller", name: "Scroller", components: [

                          {kind: enyo.IconButton, id: "mainButton", label:"Start a Tomato", onclick:"startTimer", onclick: "startTimer", components: [
                            {kind: enyo.Image, name: "tomatoPic", src: "images/tomato.png", className: "centered"}
                          ]}
	                 //Insert your components here
			]}
		]},
		{kind: enyo.Toolbar, name: "Toolbar", components: [
		]}
	],
        
        published: {
          tomato: this.tomato
        },
        startTimer: function(){
          if(this.tomato == null){
            this.tomato = new Tomato();   
          }
          this.$.tomatoPic.hide()
          alert(this.tomato.getStartTime());
        }
});
