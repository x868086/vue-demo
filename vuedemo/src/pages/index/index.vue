<template>
    <div>
        <h2>vue-demo</h2>
        <ul v-for="list in lists"
        v-bind:key="list.title">
            <li v-on:click="changeNav(list)"><a>{{list.title}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            lists:[
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


