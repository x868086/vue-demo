<template>
    <div>
        <div class="header">问卷调查</div>
        <div class="content">
            <keep-alive>
                <component v-bind:is="currentComponent">
                </component>
            </keep-alive>
        </div>
        <div class="footer">
        <button v-on:click="prevPage"
        v-bind:disabled="index <= 0"
        v-show="length >0">上一步</button>
        <button v-on:click="nextPage"
        v-bind:disabled="index>=length-1"
        v-show="length >0">下一步</button>
        <button v-show="index===length-1"
        v-on:click="send">提交</button>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
                return {
                    index:0,
                    length:""
                }
        },
        computed:{
            currentComponent:function(){
                return 'page'+this.index
            },
            qa:function(){
                let content=[]
                this.$children.forEach(item=>{
                    if(item.content.message){
                        content.push(item.content)
                    }
                })
                return content
            }
        },
        methods:{
            nextPage:function(){
                this.index ++
            },
            prevPage:function(){
                if(this.index <= 0){
                    return
                }
                this.index --
            },
            send:function(){
                if(this.qa.length<this.length){
                    window.confirm("请完善资料")
                }
                console.log(this.qa)
            }
        },
        components:{
            'page0':{
                template:`
                <div>
                    <p>性别</p>
                    <label for="male">男</label>
                    <input type="radio" id="male" value="male" v-model="content.message">
                    <label for="female">女</label>
                    <input type="radio" id="female" value="female" v-model="content.message">
                    <label for="secret">保密</label>
                    <input type="radio" id="secret" value="secret" v-model="content.message">
                </div>`,
                data:function(){
                    return{
                        content:{
                            id:0,
                            message:""
                        }
                    }
                }
            },
            'page1':{
                template:`
                <div>
                    <select v-model="content.message">
                        <option disabled value="">请选择</option>
                        <option>奔驰</option>
                        <option>宝马</option>
                        <option>奥迪</option>
                    </select>
                </div>
                `,
                data:function(){
                    return {
                        content:{
                            id:1,
                            message:""
                        }
                    }
                }
            },
            'page2':{
                template:`<div>
                <p></p>
                <textarea v-model="content.message" placeholder="add multiple lines"></textarea>
                </div>`,
                data:function(){
                    return {
                        content:{
                            id:2,
                            message:""
                        }
                    }
                }
            }

        },
        created:function(){
                var _this=this
            setTimeout(function(){
                _this.length=3;
            },1000)
        }
    }

</script>

<style>
div,button{
    margin:0px;
    padding:0px;
}

.header,.footer{
    height:30px;
    text-align:center;
    background:#41B883;
}

</style>