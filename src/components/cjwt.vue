<template>
    <div class="container">

        <div class="content_list" v-for="(item, index) in faqs" :key="index">

            <div class="content_item">
                <div class="item" @click="toggleShow(index)">

                    <div>
                        <div class="bubble">Q{{ index + 1 }} </div>
                        {{ item.question }}
                    </div>

                    <el-icon>
                        <ArrowRight v-if="!item.show" />
                        <ArrowDown v-else />
                    </el-icon>
                </div>
                <el-collapse-transition>
                    <div v-show="item.show" class="content_item_list">
                        <p>{{ item.answer }}</p>
                        <p>{{ item.description }}</p>
                    </div>
                </el-collapse-transition>
            </div>

        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const faqs = ref([
    {
        question: '城区义务教育招生工作方案是针对哪些学生？',
        answer: '答：城区招生方案、划片招生政策及网上招生平台均是针对小学、初中新生（一年级、七年级）入学的，所有新生一律网上注册报名，由市教育局统一按方案招录。',
        show: false,
    },
    {
        question: '非一年级、七年级新生的其它年级学生如何申请转学？',
        answer: '答：非一年级、七年级新生要求转入城区就读的，需向拟就读学校提出申请，户籍、房产及其它证明材料交学校审核，在城区有固定居住地且学校学位有空缺（最大班额不突破55人）时，可以接收转学，由学校向教育局申请办理转学手续，不需要在网上注册报名。',
        show: false,
    },
    {
        question: '新生注册报名需要到教育局或学校吗？',
        answer: ' 答：不需要。所有注册报名一律网上操作，网上招生平台将于6月25日—7月25日开通，城区各幼儿园大班班主任、小学六年级班主任将会集中组织、指导家长网上注册和提交资料。 ',
        show: false,
    },
    {
        question: '划片招生需要提供哪些资料？',
        answer: ' 答：城区招生实行“以居住地为主要依据”，主要资料是房产证明，其它资料（如户口本）是为了证明该房产与申请就读学生（监护人）的关系。如提交资料不全，招生办会要求二次提供，或者实地走访。',
        show: false,
    },
    {
        question: '房产证合同号填什么？',
        answer: ' 答：填写不动产单元号。',
        show: false,
    },
    {
        question: '已购房但无不动产证怎么填？',
        answer: ' 答：房产证明处上传购房合同关键页。',
        show: false,
    },
    {
        question: '学生报名信息填写错误，但已提交，怎么处理？',
        answer: ' 答：在审核之前，家长可以随时修改报名信息；在小程序的“学生报名信息查询”中，点击“报名修改与进度查询”，即可修改原有的报名信息。当审核人员查看您的报名信息后，就不再支持修改，除非家长接收到要求修改报名信息的短信后，才可以修改报名。',
        show: false,
    },
    {
        question: '报名什么时候有结果？',
        answer: ' 答：6月25日——7月25日报名注册、提交资料阶段，8月初进行学校初审，8月中旬教育局审核，审核完成之后结果会同步到小程序中且会发送短信至家长注册时预留的手机号。',
        show: false,
    },
    {
        question: '提交时提示身份证输入错误怎么处理？',
        answer: ' 答：详细检查家长的身份证号及学生的身份证号，不允许出现空格等特殊字符，若身份证最后一位为X，必须大写。',
        show: false,
    },
    {
        question: '政策类需要的证明材料去哪里办理？',
        answer: ' 答：现役军人、公安英模等人员上传证件信息，招商引资优待人员上传市招商中心证明材料，引进的高层次人才上传市委组织部门证明材料。同时，三类优待人员均要上传户籍户主页、关系页，以证明学生与监护人的关系。',
        show: false,
    },
    {
        question: '城区内有多套房产的怎么上传？',
        answer: ' 答：只能选择一套房产上传信息。地址填写的是哪套房产信息，证明材料则需上传该套房产的信息，如果上传的地址与房产证明材料中的地址不一致，则会导致审核不通过。',
        show: false,
    },
    {
        question: '如果属于多种报名类型的，例如既是政策类也是片区类的，怎么报名？',
        answer: ' 答：父母是房产所有人且父母是户主，需上传户主页、学生页、户籍关系页；父母是房产所有人而父母不是户主，户主页、父母页、学生页、户籍关系页。',
        description: '注：户籍证明是为了证明学生与家长存在户籍关系，片区类中的户籍证明还需体现出房产所有人与学生存在户籍关系。',
        show: false,
    },
    {
        question: '不动产权所有人为父母，但学生与父母不在同一户籍内怎么上传证明材料？',
        answer: ' 答：在上传原有户籍证明材料的基础上，还需补充上传出生证明材料以证明学生与家长存在户籍关系。',
        show: false,
    },
    {
        question: '不动产权所有人为祖父母，但祖父母为独立户口本时，证明材料怎么上传？',
        answer: ' 答：在上传原有户籍证明材料的基础上，还需前往辖区派出所开具证明文件以证明学生与房产所有人存在户籍关系。',
        show: false,
    },
    {
        question: '片区是如何划分的？为什么有的学生所划分的学校不是最近的学校？',
        answer: ' 答：“划片招生、就近入学”是义务教育招生的基本原则。划片之前，教育局进行了大量的摸底调研，根据各片区生源基本情况，结合片区学校规模与实践确定招生片区。因部分学校规模较小，招生容量受限，划定的招生范围同样较小，所以可能出现个别学生划分的学校不是直线距离最近的学校，特别再次提示：“就近入学”不是“最近入学”。',
        show: false,
    }
])

const toggleShow = (index) => {
    faqs.value[index].show = !faqs.value[index].show;
}
</script>

<style scoped>
.container {
    margin: 0 auto 80px;
    box-shadow: 0 1px 6px rgba(120, 137, 184, .25);
    padding: 40px;
    box-sizing: border-box;
    width: 1200px;
    font-size: 18px;
}

.content_list {
    border-bottom: 1px solid #ebeef5;
}

.content_item {
    margin-top: 10px;
    margin-bottom: 10px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: #333;
}

.content_item_list {
    font-size: 18px;
    color: rgb(153, 153, 153);
    margin-top: 10px;
}

.bubble {
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #409eff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .1);
    font-size: 16px;
}

.bubble:after {
    content: "";
    position: absolute;
    top: 100%; /* 将伪元素放置在.bubble元素的下方 */
    left: 50%; /* 水平居中 */
    margin-left: -6px; /* 水平偏移量，确保三角形中心与.bubble中心对齐 */
    border-width: 6px; /* 控制三角形的大小 */
    border-style: solid;
    border-color: #409eff transparent transparent transparent; /* 顶底左右的颜色 */
    z-index: 1; /* 确保三角形位于.bubble之下 */
}
</style>