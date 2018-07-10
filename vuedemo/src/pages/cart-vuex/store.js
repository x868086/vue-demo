import Vue from 'vue';
import Vuex from 'vuex';
import fetch from '../../modules/js/fetch.js';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        productList:null,
        cartList:[]
    },
    getters:{
        totalPrice:function(state){
            let _total=0
            state.cartList.forEach(item=>{
                _total += item.total
            })
            return _total
        }
    },

    mutations:{
        getLists:function(state,obj){
            state.productList=obj
        },
        addList:function(state,arr){
            state.cartList.push(arr)
        },
        increment:function(state,obj){
            state.cartList[obj.idx].num ++;
            state.cartList[obj.idx].total=state.cartList[obj.idx].num * state.cartList[obj.idx].price;
            let index=state.productList.findIndex(item=>{
                return item.id===obj.id
            })
            state.productList[index].count --;
        },
        decrement:function(state,obj){
            state.cartList[obj.idx].num --;
            state.cartList[obj.idx].total=state.cartList[obj.idx].num * state.cartList[obj.idx].price;
            let index=state.productList.findIndex(item=>{
                return item.id===obj.id
            })
            state.productList[index].count ++;
        },
        clear:function(state){
            state.cartList=[]
        }
    },

    actions:{
        getListsAction:function(context,url,param){
            fetch(url,param).then(res=>{
                context.commit("getLists",res.data.list)
            })
        },
        addListAction:function(context,arr){
            context.commit("addList",arr)
        },
        incrementAction:function(context,obj){
            context.commit("increment",obj)
        },
        decrementAction:function(context,obj){
            context.commit("decrement",obj)
        },
        clearAction:function(context,url,arr){
            let param=arr
            fetch(url,param).then(res=>{
                let r=window.confirm(res.data.message)
                if(r){
                    context.commit("clear")
                    window.location.reload();
                }else{
                    return
                }
            })
        }
    }
})


export default store