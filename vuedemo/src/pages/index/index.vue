<template>
    <div>
        <h2>JS 组件</h2>
        <ul v-for="list in jscomponents"
            v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>

        <h2>HTML UI 组件</h2>
        <ul v-for="list in htmlui"
            v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>

        <h2>页面布局</h2>
        <ul v-for="list in layout"
            v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>

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
                    title:'企业介绍网站',
                    link:'business.html'
                },
                {
                    title:'打字机',
                    link:'typer.html'
                },
                {
                    title:'test',
                    link:'test.html'
                }
            ],
            jscomponents:[
                {
                    title:'JS布局-AJAX获取数据瀑布流布局',
                    link:'waterfall.html'
                },
                {
                    title:'JS布局-木桶布局',
                    link:'barrels.html'
                },
                {
                    title:'JS组件-面向对象-轮播图(带缩略图)',
                    link:'carousel.html'
                },
                {
                    title:'JS组件-面向对象-曝光加载',
                    link:'exposure.html'
                },
                {
                    title:'JS组件-面向对象-tab切换',
                    link:'switchtab.html'
                },
                {
                    title:'JS组件-面向对象-回到顶部',
                    link:'backtop.html'
                },
                {
                    title:'JS组件-模态框',
                    link:'modualcover.html'
                },
                {
                    title:'jquery DOM操作',
                    link:'jquerydom.html'
                }
            ],
            htmlui:[
                {
                    title:'HTML UI 提示框',
                    link:'alert.html'
                },
                {
                    title:'HTML UI 卡片样式',
                    link:'card.html'
                },
                {
                    title:'HTML UI 按钮样式',
                    link:'button.html'
                },
                {
                    title:'HTML UI form表单',
                    link:'form.html'
                },
                {
                    title:'HTML UI 百叶窗折叠菜单',
                    link:'nav2.html'
                },
                {
                    title:'HTML UI 顶部导航菜单1',
                    link:'nav1.html'
                },
                {
                    title:'HTML UI 顶部导航菜单2',
                    link:'nav3.html'
                },
                {
                    title:'HTML UI loading H5动画1',
                    link:'loading1.html' 
                },
                {
                    title:'HTML UI loading H5动画2',
                    link:'loading2.html' 
                }
            ],
            layout:[
                {
                    title:'页面布局 响应式栅格布局',
                    link:'flex_grid.html'
                },
                {
                    title:'页面布局 flex绝对居中布局',
                    link:'flex_absolute.html'
                },
                {
                    title:'页面布局 flex媒体对象',
                    link:'flex_media.html'
                },
                {
                    title:'页面布局 flex三栏布局',
                    link:'flex_three.html'
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


