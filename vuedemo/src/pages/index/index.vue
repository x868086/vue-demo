<template>
    <div>
        <h2>vue-项目</h2>
        <ul v-for="list in projectlist"
            v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>

        <h2>vue-组件</h2>
        <ul v-for="list in componentlists"
        v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>

        <h2>vue-demo</h2>
        <ul v-for="list in demolists"
        v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>
        
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            projectlist:[
                {
                    title:'H5促销活动页面-适配移动端',
                    link:'flexible.html'
                },
                {
                    title:'打字机',
                    link:'typer.html'
                }
            ],
            componentlists:[
                {
                    title:'数字输入组件',
                    link:'number-input.html'
                },
                {
                    title:'tab组件-slot分发',
                    link:'tabslot.html'
                },
                {
                    title:'问卷调查组件-动态异步加载',
                    link:'questions.html'
                },
                {
                    title:'排序表格组件',
                    link:'table.html'
                },
                                {
                    title:'购物车组件-bus事件总线',
                    link:'cart.html'
                },
                {
                    title:'购物车组件-vuex状态管理',
                    link:'cartvuex.html'
                }
            ],
            demolists:[
                {
                    title:'计数器-vue',
                    link:'count.html'
                },
                {
                    title:'计数器-vuex',
                    link:'countvuex.html'
                }
            ]
        }
    },
    methods:{
        changeNav:function(e){
            location.href=`${e.link}`
        }
    }
}
</script>

<style>
	  a{
			color:#333;;
			text-decoration:none;
		}
		
		a:hover{
			color:green;
		}
		
        ul,li{
            list-style:none;
        }
		
		li{
			font-family:"Monaco";
            cursor:pointer;
		}
</style>


