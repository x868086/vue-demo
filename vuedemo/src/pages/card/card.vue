<template>
    	<div class="container">
	  <div class="card ct1">
	  <div class="headimg"></div>
		<div class="infor">
		  <div class="instroduce">
		    <h3>安妮·海瑟薇</h3>
				<h4>Anne Hathaway</h4>
				<p>安妮·海瑟薇是一位明眸皓齿、肤白胜雪、笑容甜美的“公主”，有着奥黛丽·赫本式的优雅及朱迪·加兰式的明媚。2010年，安妮在美国怪才导演蒂姆·波顿执导的奇幻大片《爱丽丝梦游仙境》里以白发如雪的夸张造型诠释了“白皇后”一角，她夸张如舞台剧的表演形式也让人耳目一新。</p>
		  </div>
		</div>
	</div>
		
		<div class="card ct2">
	  <div class="headimg"></div>
		<div class="infor">
			<div class="instroduce">
		    <h3>安妮·海瑟薇</h3>
				<h4>Anne Hathaway</h4>
				<p>安妮·海瑟薇是一位明眸皓齿、肤白胜雪、笑容甜美的“公主”，有着奥黛丽·赫本式的优雅及朱迪·加兰式的明媚。2010年，安妮在美国怪才导演蒂姆·波顿执导的奇幻大片《爱丽丝梦游仙境》里以白发如雪的夸张造型诠释了“白皇后”一角，她夸张如舞台剧的表演形式也让人耳目一新。</p>
					<div class="contact">
						<i class="fab fa-facebook-square fa-lg"></i>
						<i class="fab fa-twitter-square fa-lg"></i>
						<i class="fab fa-google-plus-square fa-lg"></i>
					</div>
		  </div>
		</div>
	</div>
	
			<div class="card ct3">
				<div class="instroduce">
					<h3>安妮·海瑟薇</h3>
					<h4>Anne Hathaway</h4>
				</div>
	  <div class="headimg"></div>
		<div class="infor">
				<p>安妮·海瑟薇是一位明眸皓齿、肤白胜雪、笑容甜美的“公主”，有着奥黛丽·赫本式的优雅及朱迪·加兰式的明媚。2010年，安妮在美国怪才导演蒂姆·波顿执导的奇幻大片《爱丽丝梦游仙境》里以白发如雪的夸张造型诠释了“白皇后”一角，她夸张如舞台剧的表演形式也让人耳目一新。

				</p>


		</div>
	</div>
	
	</div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
div,p,a,h3,h4{
	margin:0px;
	padding:0px;
	color:#272727;
	text-align:center;
}

.container{
  width:900px;
	background:#333;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
}

.card{
	float:left;
  margin:20px;
}

.ct1 .instroduce p{
	font-size:12px;
	text-align:left;
	padding:20px;
	text-indent:20px;
}

.ct1 .instroduce{
	padding-top:80px;
}



.card.ct1{
	position:relative;
}

.ct1 .headimg{
	width:120px;
	height:120px;
	background:transparent url(../../assets/card/a2ce80b57379e41a54a7.jpg) 0 0 no-repeat;
	background-size:contain;
	border-top-left-radius:50%;
	border-bottom-right-radius:50%;
	position:absolute;
	transform:translate(60%,-50%);
}

.ct1 .instroduce{
	width:260px;
	background:#fff;
	border-radius:5px;
	border-bottom:5px solid #ff6666;
}

.ct1 .instroduce h4{
	color:#666;
}




.ct2{
  width:260px;
	height:300px;
	position:relative;
	overflow:hidden;
}

.ct2 .headimg{
	width:260px;
	height:300px;
	border-radius:5px;
	background:transparent url(../../assets/card/a2ce80b57379e41a54a7.jpg) 0 0 no-repeat;
	background-size:cover;
}

.ct2 .instroduce{
  position:absolute;
	top:180px;
	width:260px;
	background:#fff;
	border-top:5px solid #009933;
}

.ct2 .instroduce p{
	font-size:12px;
	text-align:left;
	padding:20px;
	text-indent:20px;

}

.ct2 .instroduce h4{
	color:#666;
}



.ct2 .contact{
  width:100%;
	height:40px;
	background:#009933;
  position:absolute;
	top:216px;
	text-align:center;
	line-height:40px;
	letter-spacing:20px;
	color:white;
	cursor:pointer;
}

.ct2 .infor .instroduce:hover{
  transition:all 1s;
  position:absolute;
	top:40px;
	width:260px;
	background:#fff;
	border-top:5px solid #009933;
}




.ct3{
  width:260px;
	height:300px;
	position:relative;
  overflow:hidden;
}

.ct3 .headimg{
	width:260px;
	height:300px;
	border-radius:5px;
	background:transparent url(../../assets/card/a2ce80b57379e41a54a7.jpg) 0 0 no-repeat;
	background-size:cover;
}

.ct3 .instroduce{
	background:#fff;
}

.ct3 h4{
		color:#666;
}

.ct3 .infor{
	position:absolute;
	background:rgba(0,0,0,0.5);
	left:0;
	right:0;
	top:46px;
	bottom:0;
	z-index:-1;
}

.ct3 .infor p{
	font-size:12px;
	text-align:left;
	padding-left:20px;
	padding-right:20px;
	text-indent:20px;
	color:white;
	padding-top:25%;
}

.ct3:hover .infor{
	z-index:1;
	transition:all 1s;
}

</style>


