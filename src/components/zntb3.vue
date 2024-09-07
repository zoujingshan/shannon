<template>

  <h1>片区类公租房报名题目；</h1>

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
      <el-form-item label="选择不动产所在学区">
        <el-select v-if="radio1 == 1" v-model="form1.name4" placeholder="请选择不动产所在学区">
          <el-option label="市实验小学" value="1" />
          <el-option label="市昌荣小学" value="2" />
          <el-option label="市黄杰小学" value="3" />
          <el-option label="市新江口小学" value="4" />
          <el-option label="市划子嘴小学" value="5" />
        </el-select>

        <el-select v-if="radio1 == 2" v-model="form1.name4" placeholder="请选择不动产所在学区">
          <el-option label="市实验初中" value="1" />
          <el-option label="市实验初中城北校区" value="2" />
          <el-option label="市高成初中" value="3" />
          <el-option label="市划子嘴初中" value="4" />
        </el-select>

      </el-form-item>

      <el-form-item label="请选择公租房租房者与学生的关系">
        <el-radio-group v-model="form1.name5">
          <el-radio value="1">父母</el-radio>
          <el-radio value="2">监护人</el-radio>
        </el-radio-group>
      </el-form-item>

      <template v-if="form1.name5 == 1">
        <el-form-item label="父亲姓名">
          <el-input v-model="form1.name6" placeholder="单亲家庭可在父亲、母亲中选填一项" />
        </el-form-item>
        <el-form-item label="父亲身份证号码">
          <el-input v-model="form1.name7" placeholder="单亲家庭可在父亲、母亲中选填一项" />
        </el-form-item>

        <el-form-item label="母亲姓名">
          <el-input v-model="form1.name6" placeholder="单亲家庭可在父亲、母亲中选填一项" />
        </el-form-item>
        <el-form-item label="母亲身份证号码">
          <el-input v-model="form1.name7" placeholder="单亲家庭可在父亲、母亲中选填一项" />
        </el-form-item>
      </template>

      <template v-if="form1.name5 == 2">
        <el-form-item label="监护人姓名">
          <el-input v-model="form1.name6" placeholder="必填" />
        </el-form-item>
        <el-form-item label="监护人身份证号码">
          <el-input v-model="form1.name7" placeholder="必填" />
        </el-form-item>
      </template>

      <div class="bottom-btn">
        <el-button type="primary" @click="next" style="width: 120px;">下一步</el-button>
      </div>

    </el-form>

  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { useRouter } from 'vue-router'

const active = ref()

const router = useRouter()

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
  name5: "1",
  name6: "",
  name7: "",
})

 

const next = () => {
  active.value += 1;
  localStorage.setItem('step', active.value);
  localStorage.setItem('table3', JSON.stringify(form1.value));
  return router.push('./cltj3');
}
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