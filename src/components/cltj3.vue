<template>
  <div>
    片区类公租房报名题目

    <!-- <h2>该学生已有报名记录，无法重复报名</h2> 
    <h2>若需修改，请前往“我要入学”微信小程序的“报名修改与进度查询”功能中进行报名修改</h2>  -->

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


  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue'

const active = ref()

onMounted(() => {
  const value = localStorage.getItem('step');
  if (value) {
    active.value = Number(value)
  }
})
</script>

<style scoped>
.steps_box {
  margin-bottom: 30px;
}

.container {
  margin: 0 auto 80px;
  box-shadow: 0 1px 6px rgba(120, 137, 184, .25);
  padding: 40px;
  box-sizing: border-box;
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>