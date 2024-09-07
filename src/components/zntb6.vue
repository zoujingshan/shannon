<template>

  <h1>片区类户籍类报名题目</h1>

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

  <div class="container">


    <el-form :model="form1" label-width="auto" style="width: 800px">

      <el-form-item label="学生姓名">
        <el-input v-model="form1.name1" placeholder="必填" />
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form1.name2" placeholder="必填" />
      </el-form-item>
      <el-form-item label="报名人与学生关系">
        <el-radio-group v-model="form1.name3">
          <el-radio value="1">父亲</el-radio>
          <el-radio value="2">母亲</el-radio>
          <el-radio value="3">监护人</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="乡镇（街道）">
        <el-select v-model="form1.name4" placeholder="请选择乡镇（街道）" style="width: 100%">
          <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="村（社区）">
        <el-select v-model="form1.name5" placeholder="请选择村（社区）" style="width: 100%">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="匹配学校">
        <el-input v-model="form1.name6" disabled />
      </el-form-item>

      <el-form-item label="父亲姓名">
        <el-input v-model="form1.name7" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <el-form-item label="父亲身份证号码">
        <el-input v-model="form1.name8" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <el-form-item label="母亲姓名">
        <el-input v-model="form1.name9" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <el-form-item label="母亲身份证号码">
        <el-input v-model="form1.name10" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <div class="bottom-btn">
        <el-button type="primary" @click="prev" style="width: 120px;">上一步</el-button>
        <el-button type="primary" @click="next" style="width: 120px;">下一步</el-button>
      </div>

    </el-form>

  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref()

const radio1 = ref() // 年级

onMounted(() => {
  const value = localStorage.getItem('step');
  if (value) {
    active.value = Number(value)
  }

  const xqyd = localStorage.getItem('xqyd');
  if (xqyd) {
    const data = JSON.parse(xqyd);
    radio1.value = data.radio1;
  }

})

// 选择1、2、4题，显示片区类产权房报名题目；
const form1 = ref({
  name1: "",
  name2: "",
  name3: "1",
  name4: "",
  name5: "",
  name6: "",
})

 

const next = () => {
  active.value += 1;
  localStorage.setItem('step', active.value);
  localStorage.setItem('table6', JSON.stringify(form1.value));
  return router.push('./cltj6');
}

const prev = () => {
  active.value -= 1;
  localStorage.setItem('step', active.value);
  return router.push('./tjyj');
}

const options1 = ref([])
const options2 = ref([])
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

.bottom-btn {
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
}
</style>