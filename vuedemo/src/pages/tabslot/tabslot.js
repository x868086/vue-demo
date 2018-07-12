import Vue from 'vue';
import tabs from '../../components/tab/tabslot.vue';
import pannel from '../../components/tab/pannel.vue'

new Vue({
    el:"#app",
    components:{
        tabs:tabs,
        pannel:pannel
    }
})