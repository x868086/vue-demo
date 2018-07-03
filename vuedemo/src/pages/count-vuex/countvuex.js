import Vue from 'vue';

import store from './store.js';

import {mapState, mapGetters, mapActions} from 'vuex'

new Vue({
    el:"#app",
    store:store,
    computed:{
        // count:function(){
        //     return this.$store.state.count
        // },
        // evenOrOdd:function(){
        //     return this.$store.getters.evenOrOdd
        // },
        // isEven:function(){
        //     return this.$store.getters.isEven
        // }
        ...mapState(['count']),
        ...mapGetters(['evenOrOdd','isEven'])
    },
    methods:{
        increment:function(){
            this.$store.dispatch('incrementActions')
        },
        decrement:function(){
            this.$store.dispatch('decrementActions')
        },
        evenAdd:function(){
            this.$store.dispatch('evenAddActions',2)
        }
        // ...mapActions(['incrementActions','decrementActions',''])
    }
})