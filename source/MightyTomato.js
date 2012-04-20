enyo.kind({
	name: "MightyTomato",
	kind: enyo.VFlexBox,
	components: [
		{kind: enyo.PageHeader, name:"PageHeader", components: [
			{content: "Mighty Tomato"}
		]},
		{flex: 1, kind: enyo.Pane, name: "Pane", components: [
			{flex: 1, kind: "Scroller", name: "Scroller", components: [

                          {kind: enyo.IconButton, label:"Start a Tomato", onclick:"startTimer", components: [
                            {kind: enyo.Image, src: "images/tomato.png"}
                          ]}
	                 //Insert your components here
			]}
		]},
		{kind: enyo.Toolbar, name: "Toolbar", components: [
		]}
	],
        
        startTimer: function(){
          var tomato = new Tomato();   
        }
});
