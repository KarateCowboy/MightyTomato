enyo.kind({
	name: "MightyTomato",
	kind: enyo.VFlexBox,
	components: [
		{kind: enyo.PageHeader, name:"PageHeader", components: [
			{content: "Page Header"}
		]},
		{flex: 1, kind: enyo.Pane, name: "Pane", components: [
			{flex: 1, kind: "Scroller", name: "Scroller", components: [

                {kind: enyo.IconButton, label:"Start a Tomato", onclick:"", components: [
                    {kind: enyo.Image, src: "images/tomato.png"}
                ]}
				//Insert your components here
			]}
		]},
		{kind: enyo.Toolbar, name: "Toolbar", components: [
		]}
	]
});
