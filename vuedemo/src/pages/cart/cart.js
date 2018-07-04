import Vue from 'vue';
import url from '../../modules/js/api.js';
import fetch from '../../modules/js/fetch.js';

const bus =new Vue();

new Vue({
    el:"#app",
    data:{
        productList:null,
        cartList:[]
    },
    computed:{
        totalPrice:function(){
            let _total=0
                this.cartList.forEach(item=>{
                    _total += item.total
                })
                return _total
            }
    },
    methods: {
        getProductList:function(url,param){
            fetch(url,param).then(res=>{
                this.productList=res.data.list
            })
        },
        addCart:function(list){
            let flag=this.cartList.find(item=>{
                return item.id===list.id
            })
            if(flag){
                return 
            }
            this.cartList.push({'id':list.id,
            'product':list.product,
            'price':list.price,
            'num':1,
            'total':list.price
        })
        },
        increment:function(list){
            let idx=this.cartList.findIndex(item=>{
                return item.id === list.id
            })
            this.cartList[idx].num ++
            this.cartList[idx].total=this.cartList[idx].num * this.cartList[idx].price;
            bus.$emit("increment",idx)
        },
        decrement:function(list){
            let idx=this.cartList.findIndex(item=>{
                return item.id === list.id
            })
            this.cartList[idx].num --
            this.cartList[idx].total=this.cartList[idx].num * this.cartList[idx].price;
            bus.$emit("decrement",idx)
        },
        clear:function(){
            this.cartList=[]
        }

    },
    created: function(){
            this.getProductList(url.cartList,{})
    },
    mounted:function(){
        var _this=this
        bus.$on("increment",function(idx){
            _this.productList[idx].count --
        })

        bus.$on("decrement",function(idx){
            _this.productList[idx].count ++
        })
    }
})