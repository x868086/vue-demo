<template>
    <div id="container">
        <table class="tab_first">
            <tr class="tab_first_head">
                <td>ID</td>
                <td>姓名</td>
                <td>性别</td>
                <td>年龄
                    <span v-on:click="sortArray('age','up')">↑</span>
                    <span v-on:click="sortArray('age','down')">↓</span></td>
                <td>分数
                    <span v-on:click="sortArray('score','up')">↑</span>
                    <span v-on:click="sortArray('age','down')">↓</span></td>
                <td>时间</td>
            </tr>
            <tr 
            v-for="list in lists"
            v-bind:key="list.id">
                <td>{{list.id}}</td>
                <td>{{list.name}}</td>
                <td>{{list.sex}}</td>
                <td>{{list.age}}</td>
                <td>{{list.score}}</td>
                <td>{{list.time}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import url from '../../modules/js/api.js';
//定义数组排序函数，传入参数prop为根据什么属性排序，meths为升序或者降序
const compare = function (prop,meths) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
		if(meths==="up"){
			return val1-val2
		}
		if(meths === "down"){
			return val2-val1
		}
          
    } 
}

export default {
    data:function(){
        return {
            lists:null
        }
    },
    methods:{
        getLists:function(url){
            axios.get(url).then(res=>{
                this.lists=res.data.array
            })
        },
        sortArray:function(prop,meths){
            this.lists.sort(compare(prop,meths))
            console.log(this.lists)
        }
    },
    created:function(){
        this.getLists(url.tablelist)
    }
}
</script>

<style>
            #container{
                /* width:600px; */
                margin:0 auto;
                text-align:center;
            }

            .tab_first,.tab_sec{
                margin:0 auto;
                text-align:left;
                border-collapse:collapse;
                margin-bottom:30px;
            }

            .tab_first{
                border:1px solid #eee;
            }


            tr{
                height:30px;
                font:15px/30px "微软雅黑";
            }

            .tab_first_head,.tab_sec_head{
                background-color:#4CAF50;
                font:bold 15px/30px "微软雅黑"; 
                color:white;
            }

            tr:nth-child(2n){/*间隔行背景效果*/
                background-color:#eee;
            }

            td{
                padding-left:10px;
                padding-right:50px;
            }

            span{
                font-size:20px;
                font-weight:bold;
                cursor:pointer;
            }
</style>


