<template>
    <div>
        <h2>vue-demo</h2>
        <ul v-for="list in demolists"
        v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>
        <h2>vue-组件</h2>
        <ul v-for="list in componentlists"
        v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            demolists:[
                {
                    title:'计数器-vue',
                    link:'count.html'
                },
                {
                    title:'计数器-vuex',
                    link:'countvuex.html'
                },
                {
                    title:'购物车-bus',
                    link:'cart.html'
                },
                {
                    title:'购物车-vuex',
                    link:'cartvuex.html'
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


