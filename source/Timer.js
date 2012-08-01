/**
 * Created by JetBrains RubyMine.
 * User: moriger
 * Date: 4/26/12
 * Time: 5:51 PM
 */

enyo.kind({
    name:"Timer",
    kind:enyo.Component,
    content:"25:00",
    minute:0,
    second:0,

    /*
    constructor:function () {
        var now = new Date();
        this.setStartTime(new String(this.pad(now.getMonth(), 2) + "/" + this.pad(now.getDate(), 2) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()));
    },
    */

    start: function(){
      window.setInterval();
    },
    currentTime: function(){
      return this.pad(this.minute,2) + ":" + this.pad(this.second,2);
    },

    pad:function (number, length) {

        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
});