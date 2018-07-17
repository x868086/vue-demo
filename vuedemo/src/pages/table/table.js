import Vue from 'vue';
import table from '../../components/table/table.vue';


new Vue({
    el:"#app",
    data:{
        lists:null
    },
    components:{
        componentTable:table
    }
})