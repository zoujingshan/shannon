<script setup>




// import HelloWorld from './components/HelloWorld.vue'

const headerUrl = '/common/layout/top/header.html';
// const headerUrl = 'http://zwfw.hubei.gov.cn/common/layout/top/header.html' 

const footerUrl = '/common/layout/footer/footer.html';
// const footerUrl = 'http://zwfw.hubei.gov.cn/common/layout/footer/footer.html';


window.onload = function () {
  this.intervalObj = setInterval(() => {
    if (window.$) {
      $('#iframe_app_footer').load(footerUrl);
      $('#iframe_app').load(headerUrl, () => {
        $('html').css('font-size', 'initial');
      });
      clearInterval(this.intervalObj);
    }
  }, 100);
};

// fetch('/common/layout/top/header.html').then(async res=>{
//   const a1 = await res.text();
//   console.log(a1);
// })

</script>

<template>
  <div>
    <div id="iframe_app"></div>
    <!-- <div class="text-center">
            <div>2024年秋季新生入学招生报名已结束，</div>
            <div>
                如需查询报名进度，请登录“<span style="color: red"
                    >荆州区网上入学</span
                >”小程序查看。
            </div>
        </div> -->

    <div class="main">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>

    <div id="iframe_app_footer"></div>
  </div>
</template>

<style scoped>
.main {
  margin: 30px auto;
  display: flex;
  justify-content: center;
  width: 1200px;
  flex-direction: column;
}

::v-deep .el-step__main .is-process {
  font-weight: 400;
  color: #4269db;
}

::v-deep .is-process .el-step__icon {
  color: #fff;
  background: #4269db;
  border-width: 0;
}

::v-deep .el-step__head .el-step__icon .el-step__icon-inner {
  font-size: 24px;
  font-weight: 400;
}

::v-deep .el-step__head .el-step__icon {
  padding: 12px;
  width: 24px;
  height: 24px;
  font-weight: 700;
  line-height: 24px;
  font-family: PingFang SC;
  box-sizing: content-box;
}

::v-deep .el-step__line {
  background: #eaebef;
  transform: scaleX(.6);
}

::v-deep .el-step.is-center .el-step__line {
  left: 50%;
  right: -50%;
  top: 50%;
}
</style>
