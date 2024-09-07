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

        <div class="flex">
            正在为您预检
            <el-progress :stroke-width="26" :percentage="percentage" style="margin-left: 25px; width: 800px;" />
        </div>

        <div class="content">
            <div class="Description">
                <span>预检条件</span>
                <span>申请条件引导，提高用户办事申请成功率，减少无效的办事申请!</span>
            </div>
            <div class="result" v-if="percentage == 100">
                <div class="condition">
                    <div v-if="examine1">1. 根据数据自动检验结果，用户信息预检未通过。</div>
                    <div v-else>1. 根据数据自动检验结果，用户信息预检已通过。</div>
                    <div class="CircleClose" v-if="examine1">
                        <el-icon>
                            <CircleCheck />
                        </el-icon>
                        <span>不符合</span>
                    </div>
                    <div class="CircleCheck" v-else>
                        <el-icon>
                            <CircleCheck />
                        </el-icon>
                        <span>符合</span>
                    </div>
                </div>
                <div class="condition">
                    <div v-if="examine2">2. 根据数据自动检验结果，义务教育招生时间为8月1日~8月7日，当前时间不在申报时间范围内，申报时间预检不通过。</div>
                    <div v-else>2. 根据数据自动检验结果，义务教育招生时间为8月1日~8月7日，当前时间在申报时间范围内，申报时间预检已通过。</div>
                    <div class="CircleClose" v-if="examine2">
                        <el-icon>
                            <CircleClose />
                        </el-icon>
                        <span>不符合</span>
                    </div>
                    <div class="CircleCheck" v-else>
                        <el-icon>
                            <CircleCheck />
                        </el-icon>
                        <span>符合</span>
                    </div>
                </div>

                <div class="Warning" v-if="count != 0">

                    <el-icon color="rgb(230, 162, 60)" style="margin-right: 10px;">
                        <Warning />
                    </el-icon>

                    温馨提示：您有 <span style="color: rgb(230, 162, 60);"> {{ count }}个条件不符合</span>，无法线上办理该业务，如有疑问请至线下窗口咨询
                </div>
                
            </div>
        </div>

        <div class="gr-btn" v-if="percentage == 100">
            <el-button type="primary" @click="prev" style="width: 120px;">上一步</el-button>
            <el-button type="primary" v-if="!examine2" @click="next" style="width: 120px;">下一步</el-button>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { useRouter } from 'vue-router'

import axios from 'axios';

// const dayjs = require('dayjs')

import dayjs from 'dayjs';

console.log('111', dayjs().format());

const router = useRouter()

const active = ref()

// true 不通过 ，false 通过
const examine1 = ref()
const examine2 = ref()

const count = ref(0)

onMounted(() => {
    const value = localStorage.getItem('step');
    if (value) {
        active.value = Number(value)
    }

    const xqyd = localStorage.getItem('xqyd');
    if (xqyd) {
        examine1.value = false
    } else {
        examine1.value = true
        count.value = 1
    }

    animateProgress();

    axios({
        url: 'http://192.168.1.212:8882/api/v1/public/config',
        method: 'get'
    }).then((res) => {
        const data = res.data;
        console.log('222', data);
    })

})

const percentage = ref(0)

function animateProgress() {
    let currentPercentage = percentage.value;
    const interval = setInterval(() => {
        if (currentPercentage < 100) {
            currentPercentage += 20;
            percentage.value = currentPercentage;
        } else {
            clearInterval(interval);
        }
    }, 500);
}

const prev = () => {
    active.value -= 1;
    localStorage.setItem('step', active.value);
    return router.push('/xqyd')
}

// 选择1、2、4题，显示片区类产权房报名题目；
// 选择3题，显示片区类公租房报名题目；
// 选择5题，显示片区类征迁房报名题目；
// 选择6题，显示片区类户籍类报名题目；
// 选择7/8/9/10/11/12/13/14/15题，显示政策类报名题目；
// 选择16题，显示随迁类报名题目；

const next = () => {

    active.value += 1;
    localStorage.setItem('step', active.value);

    const xqyd = localStorage.getItem('xqyd');
    const data = xqyd ? JSON.parse(xqyd) : {};

    const routeMap = {
        1: '/zntb4',
        2: '/zntb4',
        4: '/zntb4',
        3: '/zntb3',
        5: '/zntb5',
        6: '/zntb6',
        7: '/zntb15',
        8: '/zntb15',
        9: '/zntb15',
        10: '/zntb15',
        11: '/zntb15',
        12: '/zntb15',
        13: '/zntb15',
        14: '/zntb15',
        15: '/zntb15',
        16: '/zntb16',
    };

    const targetRoute = routeMap[data.radio2];
    if (targetRoute) {
        router.push(targetRoute);
    }

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
}

.flex {
    display: flex;
    color: #1a1b1f;
    font-weight: 600;
    font-size: 16px;
    justify-content: center;
}

.content {
    margin-top: 25px;
}

.Description {
    span {
        font-weight: 600;
        font-size: 20px;
        position: relative;
        padding-left: 10px;
    }

    span:first-child::after {
        content: "";
        height: 22px;
        width: 4px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #4269db;
        bottom: 0;
        margin: auto;
        border-radius: 10px;
    }

    span:last-child {
        color: #999;
        font-size: 16px;
        line-height: 50px;
        padding-left: 8px;
    }

}

.condition {
    font-size: 14px;
    padding: 17px 0;
    border-bottom: 1px dashed #e5e5e5;

    display: flex;
    justify-content: space-between;
}

.CircleCheck {
    color: rgb(9, 189, 101);
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.CircleClose {
    color: #ff3b30;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.gr-btn {
    margin-top: 25px;
    display: flex;
    justify-content: flex-end;
}

.Warning {
    margin-top: 20px;
    display: flex;
    align-items: center;
}
</style>