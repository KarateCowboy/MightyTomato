enyo.kind({
  name: "Tomato",
  kind: enyo.Component,
  startTime: null,
  minute: null,
  second: null,
  constructor: function() {
    var now = new Date();
    this.startTime = new String(now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    this.minute = this.length;
    this.second = 0;
  },
  components: [],
  published: {
    length: 25,
    startTime: this.startTime,
    minute: this.minute,
    second: this.second
  }
});
