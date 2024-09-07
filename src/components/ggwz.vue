<template>
    <div class="container">
  
      <div class="content_item">
        <div class="content_top">
          <div class="mr-20">
            <el-tag type="danger">公告</el-tag>
          </div>
          <div class="pt-8"></div>
        </div>
        <div class="content_bottom">
          <div></div>
          <div></div>
        </div>
      </div>
  
      <el-pagination  v-model:current-page="currentPage" :page-size="15" :size="size" background layout="prev, pager, next" :total="1000"  @current-change="handleCurrentChange" />
  
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  import axios from 'axios'
  
  const currentPage = ref(1)
  
  const handleCurrentChange = (val) => {
    console.log(val)
    currentPage.value = val
  }
  
  // axios({
  //   url: 'http://111.170.12.194:9002/remote/Index/getPolicList',
  //   method: 'post',
  //   data: {
  //     page: 1,
  //     rows: 15,
  //   },
  // })
  </script>
  
  <style scoped>
  .container {
    margin: 0 auto 80px;
    box-shadow: 0 1px 6px rgba(120, 137, 184, .25);
    padding: 40px;
    box-sizing: border-box;
    width: 1200px;
  }
  
  .content_item {
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e4e9;
    padding-bottom: 20px;
    cursor: pointer;
  }
  
  .content_top {
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .content_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    color: #999;
  }
  
  .mr-20 {
    margin-right: 20px;
  }
  
  .pt-8 {
    margin-top: 8px;
  }
  
  .el-pagination {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }
  </style>