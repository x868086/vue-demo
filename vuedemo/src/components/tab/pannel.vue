<template>
    <div class="pannel" v-show="isshow">
        <!-- pannel组件中的内容分发给slot -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            label:{
                type:String
            },
            index:{
                type:Number
            }
        },
        data:function(){
            return{
                isshow:false
            }
        }
    }
</script>

<style>
    .pannel{
        width:450px;
        height:400px;
        border:1px solid #ccc;
        border-top:none;
    }
</style>


