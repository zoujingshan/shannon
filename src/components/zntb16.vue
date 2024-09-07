<template>

  <h1>随迁类报名题目</h1>

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
      <el-form-item label="现居地址">
        <el-input v-model="form1.name3" placeholder="必填" />
      </el-form-item>
      <el-form-item label="报名人与学生关系">
        <el-radio-group v-model="form1.name4">
          <el-radio value="1">父亲</el-radio>
          <el-radio value="2">母亲</el-radio>
          <el-radio value="3">监护人</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="选择志愿学校">
        <el-select v-if="radio1 == 1" v-model="form1.name5" placeholder="选择志愿学校">
          <el-option label="市实验小学" value="1" />
          <el-option label="市昌荣小学" value="2" />
          <el-option label="市黄杰小学" value="3" />
          <el-option label="市新江口小学" value="4" />
          <el-option label="市划子嘴小学" value="5" />
        </el-select>

        <el-select v-if="radio1 == 2" v-model="form1.name5" placeholder="选择志愿学校">
          <el-option label="市实验初中" value="1" />
          <el-option label="市实验初中城北校区" value="2" />
          <el-option label="市高成初中" value="3" />
          <el-option label="市划子嘴初中" value="4" />
        </el-select>

      </el-form-item>

      <el-form-item label="是否服从调剂">
        <el-radio-group v-model="form1.name6">
          <el-radio value="1">是</el-radio>
          <el-radio value="2">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="服从调剂" v-if="form1.name6 == 1" style="color: red;">
        在学校学位富余的情况下，可根据家长意愿按居住地远近调剂到所选学校;若家长所选学校无富余学位，则由教育局招生办调剂到其他学校就读。
      </el-form-item>

      <el-form-item label="不服从调剂" v-if="form1.name6 == 2" style="color: red;">
        可回学生原籍就读
      </el-form-item>

      <el-form-item label="父亲姓名">
        <el-input v-model="form1.name7" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <el-form-item label="父亲身份证号码">
        <el-input v-model="form1.name7" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <el-form-item label="母亲姓名">
        <el-input v-model="form1.name8" placeholder="单亲家庭可在父亲、母亲中选填一项" />
      </el-form-item>

      <el-form-item label="母亲身份证号码">
        <el-input v-model="form1.name8" placeholder="单亲家庭可在父亲、母亲中选填一项" />
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
    radio1.value = data.radio1    
  }

})

// 选择1、2、4题，显示片区类产权房报名题目；
const form1 = ref({
  name1: "",
  name2: "",
  name3: "",
  name4: "1",
  name5: "",
  name6: "1",
  name7: "",
  name8: "",
})

const next = () => {
  active.value += 1;
  localStorage.setItem('step', active.value);
  localStorage.setItem('table16', JSON.stringify(form1.value));
  return router.push('./cltj16');
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