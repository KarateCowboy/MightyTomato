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
    interval:null,

    start: function(inSelf){
      //this.interval = setInterval(inSelf.countDown(),1000);
    },
    
    countDown: function(){
      if(this.second == 0){
        this.minute--;
        this.second = 59;
      }else{
        this.second--;
      }

      if(this.minute <= 0 && this.second == 0){
         this.finishCounting();
      }else{
        this.bubbleUp('doCountDown');
      }
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
    },
    
    finishCounting: function(){
        window.clearInterval(this.interval);
        this.bubbleUp('doFinish');
    },
    events: {
      onCountDown: "countDown"
    }
});