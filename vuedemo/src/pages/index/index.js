import Vue from 'vue';
import indexpage from './index.vue';

new Vue({
    el:"#app",
    data:{
        count:1
    },
    methods:{
        change:function(){
            this.count ++
        }
    },
    components:{
        indexPage:indexpage
    }
})