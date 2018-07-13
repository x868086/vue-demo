<template>
    <div class="tabs">
        <div class="tab-title clearfix">
            <ul v-for="(list,idx) in tablists"
            v-bind:key="list.title">
                <li v-bind:class="{'active':idx===currentIdx}"
                v-on:click="choosetab(idx)">{{list.title}}</li>
            </ul>
        </div>   
        <div class="tab-content">
            <!-- tabs组件上的内容分发给下面的slot,即pannel组件分发给slot -->
            <slot></slot>
        </div>
    </div>
 
</template>

<script>
    export default {    
        data:function(){
            return {
                tablists:[],
                currentIdx:0
            }
        },
        methods:{
            init:function(){
                //页面初始化时先读取tab组件的子组件，遍历子组件取label名称组成tablists实现tab标题
                let val=this.$children;
                val[this.currentIdx].isshow=true;
                val.forEach(item=>{
                    if(item.$options._componentTag==='pannel'){
                        this.tablists.push({
                            'title':item.$options.propsData.label
                        })
                    }
                })
                
            },
            choosetab:function(idx){
                this.currentIdx=idx;
                let val=this.$children;
                val.forEach((e,i,a)=>{
                    if(i===this.currentIdx){
                        // tab index===pannel index 时显示
                        e.isshow=true
                    }else{
                        e.isshow=false;
                    }
                })
            }
        },
        mounted:function(){
            this.init()
        }
    }
</script>

<style>
    h3,div,ul,li{
        list-style:none;
        margin:0px;
        padding:0px;
    }

    ul>li{
        width:150px;
        height:40px;
        border-bottom:1px solid #ccc;
        border-radius:3px;
        float:left;
        font-size:16px;
        text-align:center;
        line-height:40px;
        cursor:pointer;
    }

    .clearfix:after{
        content:"";
        display:block;
        clear:both;
    }

    .active{
        background:#eee;
        border-top:2px solid crimson;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc; 
        border-bottom:none;
    }
</style>


