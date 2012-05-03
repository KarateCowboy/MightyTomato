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
    minute:25,
    second:0,
    startTime:null,
    constructor:function () {
        var now = new Date();
        this.startTime = new String(this.pad(now.getMonth(), 2) + "/" + this.pad(now.getDate(), 2) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    },
    published:{
        startTime:this.startTime
    },

    pad:function (number, length) {

        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
})
;