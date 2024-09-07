<script setup>
import { ref, computed, onMounted } from 'vue';
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

// function card(index) {
//   if (index == 1) {
//     router.push('/xunshigongzuofangan')
//   } else if(index == 2){
//     router.push('/pianqu')
//   }else if(index == 3){
//     router.push('/caozuoshuoming')
//   }else if (index == 4) {
//     router.push('/baoming')
//   }
// }


const card = (index) => {
  return router.push(index)
}

const checked1 = ref(false)
const disabled = ref(true);

const countdown = ref(10)

const buttonText = computed(() => {
  return countdown.value > 0 ? `剩余${countdown.value}秒` : '进入填报';
})

onMounted(() => {
  setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
      if (countdown.value === 0) {
        disabled.value = false;
      }
    }
  }, 1000);
});

const active = ref(0)

const startCountdown = () => {
  if (checked1.value) {
    active.value += 1;
    localStorage.setItem('step', active.value);
    if (active.value == 1) {
      router.push('/xqyd')
    }
  } else {
    ElNotification({
      title: 'Warning',
      message: '请先阅读填报须知',
      type: 'warning',
    })
    return
  }
}
</script>

<template>

  <!-- <div class="container">
  
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

</div> -->

  <div class="steps_box">
    <el-steps style="max-width: 1200px" :active="active" finish-status="success" align-center>
      <el-step title="填报须知" />
      <el-step title="情形引导" />
      <el-step title="条件预检" />
      <el-step title="智能填表" />
      <el-step title="材料提交" />
      <el-step title="申报完成" />
    </el-steps>
  </div>

  <div class="top_box">
    <div class="bmzj" @click="card('/bmzj')">
      <div>
        <img src="./../assets/1.png" alt="">
      </div>
      <div class="ml-30">
        报名政策
      </div>
    </div>
    <div class="ggwz" @click="card('/ggwz')">
      <div>
        <img src="./../assets/1.png" alt="">
      </div>
      <div class="ml-30">
        公告文章
      </div>
    </div>
    <div class="xxxq" @click="card('/xxxq')">
      <div>
        <img src="./../assets/1.png" alt="">
      </div>
      <div class="ml-30">
        学校学区
      </div>
    </div>
    <div class="cjwt" @click="card('/cjwt')">
      <div>
        <img src="./../assets/2.png" alt="">
      </div>
      <div class="ml-30">
        常见问题
      </div>
    </div>
  </div>

  <section>

    <el-card style="max-width: 1200px">
      <template #header>
        <div class="card-header">
          <span>填报须知</span>
        </div>
      </template>

      <div>

      </div>

      <template #footer>
        <div class="footer">
          <el-checkbox v-model="checked1" label="我已阅读以上填报须知" size="large" />
          <el-button type="primary" style="width: 120px;" :disabled="disabled" @click="startCountdown">
            {{ buttonText }}
          </el-button>
        </div>
      </template>
    </el-card>

  </section>

</template>

<style scoped>
.text-center {
  font-size: 26px;
  text-align: center;
  line-height: 60px;
  margin: 50px 0 80px 0;
}

.top_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 40px;
  width: 100%;
  font-size: 18px;
}

.bmzj,
.ggwz,
.xxxq,
.cjwt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 88px;
  box-shadow: 0 0 8px 0 rgba(214, 219, 231, .8);
  border-radius: 10px;
  cursor: pointer;
}

.ml-30 {
  margin-left: 30px;
}

.main {
  margin: 30px auto;
  display: flex;
  justify-content: center;
  width: 1200px;
  flex-direction: column;
}

.steps_box {
  margin-bottom: 30px;
}

::v-deep .el-card__header {
  font-size: 22px;
  text-align: center;
}

::v-deep .el-card__footer {
  text-align: center;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* .container {
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
  }

  .card {
    width: 170px;
    height: 100px;
  }
  
  .card-title {
    font-size: 14px;
  }
} */
</style>
