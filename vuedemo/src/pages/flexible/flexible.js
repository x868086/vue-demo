import Vue from 'vue';
import flexible from 'amfe-flexible';
import axios from 'axios';
import url from '../../modules/js/api.js';

new Vue({
    el:"#app",
    data:{
        productList:null,
        bannerImage:""

    },
    methods:{
        getLists:function(url){
            axios.get(url).then(res=>{
                this.productList=res.data.promotion.productlist;
                this.bannerImage=res.data.promotion.bannerimage;
            })
        }
    },
    created:function(){
        this.getLists(url.productlist)
    }
})