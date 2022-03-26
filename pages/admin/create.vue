<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >

    <h1 class="mb">Добавить новый проект</h1>

    <el-form-item label="Название" prop="title">
      <el-input
        v-model="controls.title"
      />
    </el-form-item>

    <el-form-item label="Описание" prop="text">
      <el-input
        type="textarea"
        v-model="controls.text"
        resize="none"
        :rows="4"
      />
    </el-form-item>

     <el-form-item label="Ссылка на демо" prop="text">
      <el-input
        type="text"
        v-model="controls.prlink"
      
      />
    </el-form-item>

     <el-form-item label="Ссылка на гитхаб" prop="text">
      <el-input
        type="text"
        v-model="controls.prgit"
      
      />
    </el-form-item>
     <el-form-item label="Ссылка на сайт" prop="text">
      <el-input
        type="text"
        v-model="controls.prwork"
      
      />
    </el-form-item>

    <el-checkbox-group v-model="controls.tags">
      <span v-for="item in skills" :key="item" class="tags">
        <el-checkbox :label="item"></el-checkbox>
      </span>
    </el-checkbox-group>
    <br>
   
<!-- 
    <el-upload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
    </el-upload> -->

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Создать проект
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  /* middleware: ['admin-auth'], */
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
        prlink: '',
        prgit: '',
        prwork: '',
        tags: [],
      },
      skills: ['nuxt', 'vue', 'mongodb', 'html', 'css', 'scss', 'opencart', 'bitrix', 'diafan', 'wordpress', 'firebase'],
      rules: {
        
        title: [
          { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid /* && this.image */) {
          this.loading = true

          const formData = {
            prname: this.controls.title,
            prdescription: this.controls.text,
            prlink: this.controls.prlink,
            prwork: this.controls.prwork,
            prgit: this.controls.prgit,
            prtags: this.controls.tags
           /*  image: this.image */
          }

          try {
            await this.$store.dispatch('projects/create', formData)
            this.controls.prname = ''
            this.controls.prdescription = ''
            this.controls.prlink = ''
            this.controls.prwork = ''
            this.controls.prgit = ''
            this.controls.prtags = []
           
          } catch (e) {} finally {
            this.loading = false
          }
        } else {
          alert("Форма не валидна")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
  .tags {
    padding-right: 20px;
    padding-bottom: 5px;
    width: 100px;
    display: inline-block;
  }
</style>
