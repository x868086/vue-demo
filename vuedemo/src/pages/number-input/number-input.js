import Vue from 'vue';
import numberInput from '../../components/number-input.vue'

new Vue({
    el:"#app",
    data:{
        value:5
    },
    methods:{
        updateValue:function(val){
            this.value=val
        }
    },
    components:{
        numberInput:numberInput
    }
})