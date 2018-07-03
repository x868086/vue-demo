import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        count:1
    },
    getters:{
        evenOrOdd:function(state){
            return state.count % 2 ===0 ? "偶数" : "奇数";
        },
        isEven:function(state){
            return state.count % 2 !==0 ? true : false;
        }
    },
    mutations:{
        increment:function(state){
            state.count ++;
        },
        decrement:function(state){
            state.count --;
        },
        evenAdd:function(state,num){
            state.count += num
        }
    },
    actions:{
        incrementActions:function(context){
            context.commit('increment')
        },
        decrementActions:function(context){
            context.commit('decrement')
        },
        evenAddActions:function(context,num){
            setTimeout(()=>{
                context.commit("evenAdd",num)
            },1000)
        }
        
    }
})

export default store