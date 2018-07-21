<template>
    <div id="container">
  <div class="wrap">
	  <div class="media cont1">
	    <img src="../../assets/layout/aa38fc3c9fca18af7095.jpg" alt="">
			<div class="infor">
				<h4>flex标准媒体对象</h4>
				<p>The rings of Saturn are the most extensive ring system of any planet in the Solar System. They consist of countless small particles, ranging from μm to m in size,[1] that orbit about Saturn. The ring particles are made almost entirely of water ice, with a trace component of rocky material. There is still no consensus as to their mechanism of formation; some features of the rings suggest a relatively recent origin, but theoretical models indicate they are likely to have formed early in the Solar System's history.
				</p>
			</div>
	  </div>
		
		<div class="media cont2">
	    <img src="../../assets/layout/aa38fc3c9fca18af7095.jpg" alt="">
			<div class="infor">
				<h4>flex逆序媒体对象</h4>
				<p>The rings of Saturn are the most extensive ring system of any planet in the Solar System. They consist of countless small particles, ranging from μm to m in size,[1] that orbit about Saturn. The ring particles are made almost entirely of water ice, with a trace component of rocky material. There is still no consensus as to their mechanism of formation; some features of the rings suggest a relatively recent origin, but theoretical models indicate they are likely to have formed early in the Solar System's history.
				</p>
			</div>
	  </div>
		
		<div class="media cont3">
	    <img src="../../assets/layout/aa38fc3c9fca18af7095.jpg" alt="">
			<div class="infor">
				<h4>flex底对齐媒体对象</h4>
				<p>The rings of Saturn are the most extensive ring system of any planet in the Solar System. They consist of countless small particles, ranging from μm to m in size,[1] that orbit about Saturn. The ring particles are made almost entirely of water ice, with a trace component of rocky material. There is still no consensus as to their mechanism of formation; some features of the rings suggest a relatively recent origin, but theoretical models indicate they are likely to have formed early in the Solar System's history.
				</p>
			</div>
	  </div>
		
		<div class="media cont4">
	    <img src="../../assets/layout/aa38fc3c9fca18af7095.jpg" alt="">
			<div class="infor">
				<h4>flex嵌套媒体对象</h4>
				<p>The rings of Saturn are the most extensive ring system of any planet in the Solar System. They consist of countless small particles, ranging from μm to m in size,[1] that orbit about Saturn. The ring particles are made almost entirely of water ice, with a trace component of rocky material. There is still no consensus as to their mechanism of formation; some features of the rings suggest a relatively recent origin, but theoretical models indicate they are likely to have formed early in the Solar System's history.</p>
				  <p class="sub-infor"><b>wikipedia:</b>Although reflection from the rings increases Saturn's brightness</p>
				</div>
				
			</div>
	  </div>
	</div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

html,body,h4,img,p,div{
	margin:0px;
	padding:0px;
}


#container{
  width:800px;
	margin: 0 auto;
}

.media{
  width:800px;
	background:#eee;
	padding:20px;
	border:1px solid #ccc;
	box-shadow:3px 3px 5px #ccc;
	margin-top:20px;
}

.cont1{
	display:flex;
	justify-content:space-around;
}

img{
	width:260px;
	height:100px;
	border-radius:5px;
}

.infor{
	width:500px;
}

.infor p{
	padding-top:10px;
}

/*media 2*/
.cont2{
	display:flex;
	justify-content:space-around;
}

.cont2 .infor{
	order:-1;
}

/*media 3*/
.cont3{
	display:flex;
	justify-content:space-around;
	align-items:center;
}

.cont3 img{
	align-self:flex-end;
}

/*media 4*/
.cont4{
	display:flex;
	justify-content:space-around;
}


.cont4 .infor{
	display:flex;
	flex-direction:column;
}

.sub-infor{
  margin-top:5px;
  width:300px;
	background:#ccc;
	font-size:15px;
	align-self:flex-end;
}

</style>

