/**
 * Created with JetBrains RubyMine.
 * User: moriger
 * Date: 5/2/12
 * Time: 9:11 PM
 * To change this template use File | Settings | File Templates.
 */

enyo.kind({
    name:"TimerButton",
    kind:onyx.Button,
    content: "25:00",
    caption:'',
/*
    constructor:function () {
        this.caption = this.displayValue;
    },
*/
    components:[

    ],
    published:{
        displayValue:"25:00"
    }
});
