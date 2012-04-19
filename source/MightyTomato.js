enyo.kind({
	name: "MightyTomato",
	kind: enyo.VFlexBox,
	components: [
		{kind: enyo.PageHeader, components: [
			{content: "Page Header"}
		]},
		{flex: 1, kind: enyo.Pane, components: [
			{flex: 1, kind: "Scroller", components: [
				//Insert your components here
			]}
		]},
		{kind: enyo.Toolbar, components: [
		]}
	]
});
