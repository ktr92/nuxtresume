<template>
  <div>
    <div v-for="project in projects" :key="project">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ project.prname }}</span>
          <span v-for="tag in project.prtags" :key="tag" class="tags-images">
            <img :src="require(`~/assets/img/${tag}.svg`)" />
          </span>
        </div>
        <div class="text item">
          <p>{{ project.prdescription }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.projects = this.$store.getters['projects/projects']
  }
 
}
</script>

<style scoped>
  .tags-images {
    width: 70px;
    height: 70px;
    display: inline-block;
  }
  .tags-images img {
    max-width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }
  .box-card:hover  .tags-images img{
    filter: grayscale(0);
  }
</style>