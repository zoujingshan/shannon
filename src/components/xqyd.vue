<template>

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

        <section>

            <div class="heaer_box">
                <div class="title">教育入学“一件事”</div>
                <div class="sub_title">智能导服，为您提供准确办事引导</div>
            </div>
            <div class="select_box">
                <div class="select_subtitle"> 一、请选择您需要办理的业务类型（单选） </div>

                <el-radio-group v-model="radio1">
                    <el-radio :value="1" size="large" border>一年级（公办）</el-radio>
                    <el-radio :value="2" size="large" border>七年级（公办）</el-radio>
                </el-radio-group>

                <div class="select_subtitle"> 二、请选择与入学新生完全符合的政策类别 （单选） </div>

                <el-radio-group v-model="radio2" style="display: flex;flex-direction: column;align-items: flex-start;">
                    <el-radio :value="1">1. 本人或其法定监护人在学校服务区内拥有房产的</el-radio>
                    <el-radio :value="2">2. 祖父母或外祖父母在学校服务区内拥有房产，且户籍在一起的</el-radio>
                    <el-radio :value="3">3. 父母或其他法定监护人无房产，租住公租房的（未法定登记的除外）</el-radio>
                    <el-radio :value="4">4. 本人及法定监护人户籍在学校服务区，在城区无房产证明但有实际固定居住地的</el-radio>
                    <el-radio :value="5">5. 家庭为被征迁户，与政府及部门签订有协议的</el-radio>
                    <el-radio :value="6" class="multiline-radio">6.
                        户籍在以下村、社区的：张家畈村、高家榜村、联合村、陶家冲村、簸箕岩村、尖山村、桠杈铺村、八眼泉村、麻水社区、中水桥村、杨树河村、天星观村、全心村、李桥村、狮子咀村、太平桥社区、木天河村、柘树垸村、德胜垸村、西流村、糖铺子村、永兴场社区、望月村、大桥社区、丝线潮社区、东岳原种场</el-radio>

                    <el-radio :value="7">7. 烈士子女</el-radio>
                    <el-radio :value="8">8. 全国一、二级英模子女，因公牺牲或一至四级伤残军人、警察和消防救援人员子女</el-radio>
                    <el-radio :value="9">9. 松滋市户籍或在松滋市服役的现役军人子女</el-radio>
                    <el-radio :value="10">10. 松滋市户籍或松滋市在职消防救援人员子女</el-radio>
                    <el-radio :value="11">11. 松滋市援疆援藏人员子女</el-radio>
                    <el-radio :value="12">12. 台胞及重点台属子女</el-radio>
                    <el-radio :value="13">13. 松滋市荣誉市民子女，受县市级以上政府表彰的见义勇为先进个人子女</el-radio>
                    <el-radio :value="14">14.
                        松滋市招商引资重点落地项目企业、重点规上企业、重点限上商贸企业、年度服务业突出贡献企业法人代表及高层管理人员（董事会成员、总经理、监事会主席）子女</el-radio>
                    <el-radio :value="15">15. 由组织部门引进或评选的高层次人才子女</el-radio>
                    <el-radio :value="16">16.
                        监护人中心城区无固定房产，或在新江口街道、乐乡街道各社区、行政村无户籍的，在中心城区、城东、城北及临港工业园企业务工人员、个体工商户户主子女</el-radio>


                </el-radio-group>

            </div>
            <div class="btn_box">
                <el-button type="primary" style="width: 120px;" @click="nextStep">下一步</el-button>
            </div>

        </section>

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { ElNotification } from 'element-plus'

import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref()

onMounted(() => {
    const value = localStorage.getItem('step');
    if (value) {
        active.value = Number(value)
    }
    const xqyd = localStorage.getItem('xqyd');
    if (xqyd) {
        const data = JSON.parse(xqyd);
        radio1.value = data.radio1;
        radio2.value = data.radio2;
    }
})

const radio1 = ref()
const radio2 = ref()

const nextStep = () => {
    if (radio1.value && radio2.value) {
        active.value += 1;
        localStorage.setItem('step', active.value);
        const data = {
            radio1: radio1.value,
            radio2: radio2.value
        };
        localStorage.setItem('xqyd', JSON.stringify(data));
        return router.push('/tjyj')
    } else {
        ElNotification({
            title: '提示',
            message: '请选择您需要办理的业务类型（单选）和政策类别',
            type: 'warning',
        })
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto 80px;
    box-shadow: 0 1px 6px rgba(120, 137, 184, .25);
    padding: 40px;
    box-sizing: border-box;
    width: 1200px;
}

.steps_box {
    margin-bottom: 30px;
}

.heaer_box {
    margin-bottom: 40px;
}

.title {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 15px;
}

.sub_title {
    font-size: 16px;
}

.select_subtitle {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 16px;
}

.multiline-radio {
    white-space: pre-wrap;
    /* 保留空格和换行符 */
    word-break: break-word;
    /* 允许单词断开 */
    width: 100%;
    /* 可以设置宽度以控制换行 */
}

.btn_box {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}
</style>