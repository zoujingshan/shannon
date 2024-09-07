<template>
  <div>
    片区类产权房报名题目

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

      <el-form :model="form" label-width="auto" style="width: 1000px">
        <el-form-item label="请上传不动产证或房屋所有权证照片">
          <el-upload ref="Picture1" v-model:file-list="fileList1" action="" :auto-upload="false"
            list-type="picture-card" accept=".jpg, .png, .jpeg" :class="{ hide: hideUploadAdd1 }" :limit="9"
            :on-preview="handlePictureCardPreview" :on-change="selectFile1" :on-remove="handleRemove1">
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="请上传户籍证明照片（必须包含户籍地址页）">
          <el-upload ref="Picture2" v-model:file-list="fileList2" action="" :auto-upload="false" list-type="picture-card"
            accept=".jpg, .png, .jpeg" :class="{ hide: hideUploadAdd2 }" :limit="9"
            :on-preview="handlePictureCardPreview" :on-change="selectFile2" :on-remove="handleRemove2">
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="请上传监护权合法证明照片" v-if="show1">
          <el-upload v-model:file-list="fileList3" action="" :auto-upload="false" list-type="picture-card"
            accept=".jpg, .png, .jpeg" :class="{ hide: hideUploadAdd3 }" :limit="9"
            :on-preview="handlePictureCardPreview" :on-change="selectFile3" :on-remove="handleRemove3">
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="请上传关系证明照片（老户口本、档案等选其一）" v-if="show2">
          <el-upload v-model:file-list="fileList4" action="" list-type="picture-card" :class="{ hide: hideUploadAdd4 }"
            accept=".jpg, .png, .jpeg" :limit="9" :on-change="handlePictureCardPreview" :on-success="selectFile4"
            :on-remove="handleRemove4">
            <el-icon>
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>

        <div class="bottom-btn">
          <el-button type="primary" @click="prev" style="width: 120px;">上一步</el-button>
          <el-button type="primary" @click="next" style="width: 120px;">下一步</el-button>
        </div>

      </el-form>



    </div>

    <el-image-viewer v-if="previewVisible" @close="closeViewer" :url-list="[previewImageUrl]"></el-image-viewer>


  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import { ElMessage, FormInstance, UploadFile, UploadFiles, UploadProps } from "element-plus";
import { Phone, Picture } from '@element-plus/icons-vue';

import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref()

const show1 = ref(false)
const show2 = ref(false)

const fileList1 = ref<any>([])
const fileList2 = ref([])
const fileList3 = ref([])
const fileList4 = ref([])

const existingData = ref()

onMounted(() => {
  const value = localStorage.getItem('step');
  if (value) {
    active.value = Number(value)
  }
  const table = localStorage.getItem('table4');
  existingData.value = table ? JSON.parse(table) : {};
  if (existingData.value) {
    if (existingData.value.name5 == 2) {
      show1.value = true
    } else if (existingData.value.name5 == 3) {
      show2.value = true
    }
    
    fileList1.value = existingData.value.Picture1.map(item => {
      return {
        url: item.url
      }
    })

    fileList2.value = existingData.value.Picture2.map(item => {
      return {
        url: item.url
      }
    })

  }
  

})

const previewVisible = ref(false);
const previewImageUrl = ref("");

const handlePictureCardPreview = (file) => {
  previewVisible.value = true;
  previewImageUrl.value = file.url;
}

const closeViewer = () => {
  previewVisible.value = false;
};

const formData = ref<any>({
  Picture1: [],
  Picture2: [],
  Picture3: [],
  Picture4: [],
})

const hideUploadAdd1 = ref(false)

const selectFile1: UploadProps["onChange"] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFile.raw) {

    // const fileBlob = new Blob([uploadFile.raw], { type: uploadFile.raw.type });
    // const fileUrl = URL.createObjectURL(fileBlob);

    // // formData.value.Picture1.push(uploadFile.raw as any);
    // formData.value.Picture1.push({ url: fileUrl, name: uploadFile.name });
    // // fileList1.value.push({ url: fileUrl, name: uploadFile.name  });


    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const fileBase64 = e.target?.result as string;
      formData.value.Picture1.push({ url: fileBase64, name: uploadFile.name });
    };
    fileReader.readAsDataURL(uploadFile.raw);

    if (uploadFiles.length >= 9) {
      ElMessage.warning('已达到最大上传数量！');
      hideUploadAdd1.value = true;
    }
  }
};

const handleRemove1: UploadProps["onRemove"] = uploadFile => {
  let index = formData.value.Picture1.findIndex((item: any) => {
    return item.uid === uploadFile.uid;
  });
  formData.value.Picture1.splice(index, 1);

  existingData.value = { ...existingData.value, ...formData.value };

  localStorage.setItem('table4', JSON.stringify(existingData.value));

};

const hideUploadAdd2 = ref(false)

const selectFile2: UploadProps["onChange"] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFile.raw) {

    const fileBlob = new Blob([uploadFile.raw], { type: uploadFile.raw.type });
    const fileUrl = URL.createObjectURL(fileBlob);
    formData.value.Picture2.push({ url: fileUrl, name: uploadFile.name });
    // formData.value.Picture2.push(uploadFile.raw as any);
    if (uploadFiles.length >= 9) {
      hideUploadAdd2.value = true;
    }
  }
};

const handleRemove2: UploadProps["onRemove"] = uploadFile => {
  let index = formData.value.Picture2.findIndex((item: any) => {
    return item.uid === uploadFile.uid;
  });
  formData.value.Picture2.splice(index, 1);
};

const hideUploadAdd3 = ref(false)

const selectFile3: UploadProps["onChange"] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFile.raw) {
    formData.value.Picture3.push(uploadFile.raw as any);
    if (uploadFiles.length >= 9) {
      hideUploadAdd3.value = true;
    }
  }
};

const handleRemove3: UploadProps["onRemove"] = uploadFile => {
  let index = formData.value.Picture3.findIndex((item: any) => {
    return item.uid === uploadFile.uid;
  });
  formData.value.Picture3.splice(index, 1);
};

const hideUploadAdd4 = ref(false)

const selectFile4: UploadProps["onChange"] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFile.raw) {
    formData.value.Picture4.push(uploadFile.raw as any);
    if (uploadFiles.length >= 9) {
      hideUploadAdd4.value = true;
    }
  }
};

const handleRemove4: UploadProps["onRemove"] = uploadFile => {
  let index = formData.value.Picture4.findIndex((item: any) => {
    return item.uid === uploadFile.uid;
  });
  formData.value.Picture4.splice(index, 1);
};

const next = () => {
  active.value += 1;
  localStorage.setItem('step', active.value);
  // return router.push('./cltj3');
}

const prev = () => {
  active.value -= 1;
  localStorage.setItem('step', active.value);

  // existingData.value = { ...existingData.value, ...formData.value };

  existingData.value = { ...existingData.value, ...formData.value };
  localStorage.setItem('table4', JSON.stringify(existingData.value));

  return router.push('./zntb4');
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

.hide ::v-deep .el-upload.el-upload--picture-card {
  display: none;
}

.bottom-btn {
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
}
</style>