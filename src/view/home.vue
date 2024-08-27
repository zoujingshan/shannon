<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function card(index) {
  if (index == 1) {
    router.push('/xunshigongzuofangan')
  } else if(index == 2){
    router.push('/pianqu')
  }else if(index == 3){
    router.push('/caozuoshuoming')
  }else if (index == 4) {
    router.push('/baoming')
  }
}
</script>

<template>

<div class="container">
  
  <div class="title">
    <img src="../assets/title.png" alt="">
  </div>

  <div class="content">
    <div class="cards">
      <div class="card" @click="card(1)">
        <img src="../assets/xunshigongzuofangan.png" alt="" width="43" height="50">
        <p class="card-title">招生工作方案</p>        
      </div>
      <div class="card" @click="card(2)">
        <img src="../assets/pianqu.png" alt="" width="56" height="51">
        <p class="card-title">学校服务片区</p>
      </div>
      <div class="card"  @click="card(3)">
        <img src="../assets/caozuoshuoming.png" alt="" width="49" height="50">
        <p class="card-title">网上入学操作说明</p>
      </div>
      <div class="card"  @click="card(4)">
        <img src="../assets/baoming.png" alt="" width="48" height="48">
        <p class="card-title">网上报名</p>
      </div>
    </div>
  </div>

</div>

</template>

<style scoped>
	.container {
    width: 100vw;
    height: 100vh;
    background: url(../assets/bg.png) no-repeat;
    background-size: 100% 100%;
  }

.card {
  width: 320px;
	height: 167px;
	background-color: #dbffe4;
	border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card:hover {
  cursor: pointer;
}

.cards {
  width: 1370px;
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  justify-content: center;
}

.title {
  text-align: center;
  padding-top: 20vh;
  padding-bottom: 16vh;
}

.card-title {
  font-family: PingFangSC-Regular;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 12px;
	letter-spacing: 0px;
	color: #047049;

  margin-top: 20px;
}

@media (max-width: 768px) {
  .card img {
    width: 20px;
    height: 20px;
  }

  img {
    width: 90%;
  }

  .cards {
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    /* width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 220px; */
  }

  .card {
    width: 170px;
    height: 100px;
  }
  
  .card-title {
    font-size: 14px;
  }
}
</style>
