import Vue from 'vue';
import contentstring from './content.js';

        new Vue({
            el:"#app",
            data:{
                content:contentstring.split(""),
                newcontent:[],
                idx:0,
                str:"",
                fontActive:false,
                borderActive:false,
                classlist:[]
            },
            created:function(){
                var _this=this;
                var length=this.content.length;
                setInterval(function(){
                if(_this.idx === length-1){
                        return
                }

                if(_this.idx=== 100){
                    _this.classlist.push("fontactive");
                }

                if(_this.idx===120){
                    _this.classlist.push("borderactive");
                }
                    _this.newcontent.push(_this.content[_this.idx])
                    _this.idx ++;
                },50);
            },
            watch:{
                newcontent:function(){
                    this.str += this.content[this.idx]
                }
            }
        })

