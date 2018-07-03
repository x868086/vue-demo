import Vue from 'vue';


new Vue({
    el:"#app",
    data:{
        count:1
    },
    computed:{
        evenOrOdd:function(){
            return this.count % 2 ===0 ? '偶数' : '奇数'
        }
    },
    methods:{
        increment:function(){
            this.count ++
        },
        decrement:function(){
            this.count --
        },
        evenAdd:function(){
            this.count ++
        }
    }
})