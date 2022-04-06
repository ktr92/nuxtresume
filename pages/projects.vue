<template>
  <div>
      
      <el-card class="box-card">
        <AppText :data="about" />
      </el-card>
      <br>
      <el-collapse v-model="activeNames" accordion v-for="(project, idx) in dataset" :key="idx" class="projects">
        <el-collapse-item :name="idx">
          <template slot="title" >
              <div  class="projects__header clearfix">
                <span class="projects__title">{{ project.prname }}</span>
                <span class="projects__images">
                  <span v-for="prtag in project.prtags" :key="prtag" class="tags-images">
                    <span v-if="tags[prtag]">
                      <img :src="require(`~/assets/img/${tags[prtag].icon}`)" />
                      <span>{{ tags[prtag].name}} </span>
                    </span>
                  </span>
                </span>
              </div>
               </template>
              <div class="text item projects__text">
                 <p><vue-markdown>{{ project.prdescription }}</vue-markdown></p>
              </div>
              <el-button-group>
                <el-button type="primary" v-if="project.prgit">
                  <a :href="project.prgit" target="_blank">GitHub</a> 
                </el-button>
                <el-button type="primary" v-if="project.prlink">
                  <a :href="project.prlink" target="_blank">Демо</a> 
                </el-button>
                <el-button type="primary" v-if="project.prwork">
                  <a :href="project.prwork" target="_blank">Сайт</a> 
                </el-button>
              </el-button-group>
              
        </el-collapse-item>
      </el-collapse>  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({store}) {
   const dataset = await store.dispatch('projects/getAll')
   return {dataset}
  },
  data() {
    return {
      tags: [],
      activeNames: [false],
      showthis: false,
      projects: [],
    }
  },
  mounted() {
    this.tags = this.$store.getters['projects/tags']
  },
  computed: {
    ...mapState([
      'about'
    ])
  }
 
 
}
</script>

<style scoped lang="scss">
  
 
</style>