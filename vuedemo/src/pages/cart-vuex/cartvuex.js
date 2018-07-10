import Vue from 'vue';
import store from './store.js';
import url from '../../modules/js/api.js';
import {mapState, mapGetters, mapActions} from 'vuex'

new Vue({
    el:"#app",
    store:store,
    computed:{
        ...mapState(['productList','cartList']),
        ...mapGetters(['totalPrice'])
    },
    methods:{
        ...mapActions(['getListsAction','addListAction','incrementAction','decrementAction',
    'clearAction']),
        addCart:function(list){
            let flag=this.cartList.find(item=>{
                return item.id===list.id
            })
            if(flag){
                return 
            }
            let arr={
                'id':list.id,
                'product':list.product,
                'price':list.price,
                'num':1,
                'total':list.price
            }
            this.addListAction(arr)
        },
        increment:function(list){
            let idx=this.cartList.findIndex(item=>{
                return item.id === list.id
            })
            this.incrementAction({"idx":idx,"id":list.id})
        },
        decrement:function(list){
            let idx=this.cartList.findIndex(item=>{
                return item.id === list.id
            })
            this.decrementAction({"idx":idx,"id":list.id})
        },
        clear:function(){
            this.clearAction(url.listAdd,this.cartList)
        }

    },
    created:function(){
        this.getListsAction(url.cartList,{})
    },
    filters:{
        currency:function(price){
            let str=price +``;
            if(str.indexOf(".")>-1){
                let arr=str.split(".");
                return arr[0] +`.` +arr[1].substr(0,2)
            }else{
                return str + `.00`
            }
        }
    }
})