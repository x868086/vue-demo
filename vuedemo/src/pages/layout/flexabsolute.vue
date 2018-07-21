<template>
    <div id="container">
    <p id="main">flex绝对居中布局</p>
        <div class="wrap">
            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>

            <div class="card">
                <div class="img"></div>
                <p class="infor">The Apollo program</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body,
p,
div {
  margin: 0px;
  padding: 0px;
}

#container {
  width: 600px;
  margin: 0 auto;
}

.wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.card {
  width: 160px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 3px 3px 5px #ccc;
  margin: 15px;
}

#main {
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  margin-bottom: 20px;
  text-align: center;
}

.img {
  height: 140px;
  background: transparent url(../../assets/layout/36153b65ab9373910d92.jpeg) 0 0
    no-repeat;
  background-size: cover;
}

.infor {
  text-align: center;
  line-height: 100%;
  width: 160px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
