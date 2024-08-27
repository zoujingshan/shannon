<script setup>
function checkDetails() {
    window.open('https://jzqzs.0716edu.net/image/jzenrollapp/jzqywwsczsm.pdf')
}
</script>

<template>
<div class="container">
    
    <img src="https://jzqzs.0716edu.net/image/jzenrollapp/eff6ed33-8fdc-4c77-9f94-1a5aadcab875.jpg" alt="" width="750">

    <button type="primary" class="confirm" @click="checkDetails">查看操作说明详情</button>

</div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.confirm {
    height: 80px;
    line-height: 80px;
    border-radius: 10px;
    font-size: 28px;
    background-color: #008971 !important;
    margin-top: 82px;
    width: 750px;
}

button:hover {
    cursor: pointer;
}

@media (max-width: 768px) {
    .container img {
        width: 100%;
    }

    .confirm {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    }
}
</style>
