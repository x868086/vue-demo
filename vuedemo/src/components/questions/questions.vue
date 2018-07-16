<template>
    <div class="container">
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
                    return
                }else if(this.qa.length === this.length){
                    window.confirm("提交成功！")
                }
            }
        },
        components:{
            'page0':{
                template:`
                <div>
                    <p>1.请问你的性别是：</p>
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
                    <p>2.轻选择您的兴趣爱好：</p>
                    <input type="checkbox" id="read" value="read" v-model="content.message">
                    <label for="read">阅读</label>
                    <input type="checkbox" id="swim" value="swim" v-model="content.message">
                    <label for="swim">游泳</label>
                    <input type="checkbox" id="runing" value="runing" v-model="content.message">
                    <label for="runing">跑步</label>
                    <input type="checkbox" id="movie" value="movie" v-model="content.message">
                    <label for="movie">看电影</label>
                    <input type="checkbox" id="music" value="music" v-model="content.message">
                    <label for="music">听音乐</label>
                </div>
                `,
                data:function(){
                    return {
                        content:{
                            id:1,
                            message:[]
                        }
                    }
                }
            },
            'page2':{
                template:`<div>
                <p>3.请介绍一下你自己：</p>
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

.container{
    border:1px solid #ddd;
    margin-left:100px;
    margin-right:100px;
}

.content{
    height:400px;
    margin-left:30px;
}

.header{
    height:50px;
    text-align:center;
    background:#41B883;
    line-height:50px;
    color:white;
    font-weight:bold;
}

.footer{
    height:30px;
    text-align:center;
}

button{
    width:100px;
    height:30px;
    border-radius:3px;
    background:#41B883;
    color:white;
    border:0px;
    font-weight:bold;
}

[disabled]{
    background:rgb(77, 131, 133);
}

textarea{
    height:200px;
    width:300px;
}

</style>