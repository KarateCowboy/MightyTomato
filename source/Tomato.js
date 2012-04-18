enyo.kind({
  name: "Tomato",
  kind: enyo.Component,
  startTime: null,
  constructor: function() {
    var now = new Date();
    this.startTime = new String(now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
  },
  components: [],
  published: {
    length: 25,
    startTime: this.startTime
  }
});
