<template>
    <div>
        <button v-on:click="decrement"
        v-bind:disabled="currentValue <= 0">-</button>   
        <input type="text" v-bind:value="currentValue"
        v-on:input="type">
        <button v-on:click="increment"
        v-bind:disabled="currentValue >= 10">+</button>
    </div>
</template>


<script>
export default {
    props:{
        value:{
            type:Number,
            default:5
        },
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:Infinity
        }
    },
    data:function(){
        let val=JSON.parse(JSON.stringify(this.value))
        return {
            currentValue:val
        }
    },
    
    watch:{
        currentValue:function(newval,oldval){
            this.$emit("update",newval)
        }
    },
    
    methods:{
        increment:function(){
            if (this.currentValue >= this.max) {
                return;
            }
            this.currentValue ++;
        },
        decrement:function(){
            if (this.currentValue <= this.min) {
                return;
            }
            this.currentValue --;
        },
        type:function(event){
            let val=event.target.value;
            if(val >= this.max){
                this.currentValue = this.max;
            } else if(val <= this.min){
                this.currentValue = this.min;
            } else{
                this.currentValue=Number(val);
            }

        }
    }
}
</script>

<style>
    div{
        width:400px;
        margin:0 auto;
        text-align:center;
    }
    button{
        width:50px;
        height:20px;
    }
    input{
        width:30px;
        text-align:center;
    }
    [disabled]{
        background:#ccc;
    }
</style>


