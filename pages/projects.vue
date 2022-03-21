<template>
  <div>
      <el-collapse v-model="activeNames" accordion v-for="(project, idx) in projects" :key="idx" class="projects">
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
                 <p>{{ project.prdescription }}</p>
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
export default {
  data() {
    return {
      activeNames: [false],
      showthis: false,
      projects: [],
      tags: 
        {
          nuxt: {
            icon: 'nuxt.svg',
            name: 'NuxtJS'
          },    
          vue: {
            icon: 'vue.svg',
            name: 'VueJS'
          },
          mongodb: {
            icon: 'mongodb.svg',
            name: 'MongoDB'
          },       
        }          
    }
  },
  mounted() {
    this.projects = this.$store.getters['projects/projects']
  },
  methods: {
    
  }
 
 
}
</script>

<style scoped lang="scss">
  
 
</style>