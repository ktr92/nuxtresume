<template>
  <div>
      <el-breadcrumb separator="/" class="mb">
        <el-breadcrumb-item to="/">Главная</el-breadcrumb-item>
        <el-breadcrumb-item>Портфолио</el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <el-card class="box-card">
        <div>
          <p>Здесь представлена некоторая часть моих работ. Это не весь мой опыт, а лишь около 30%. Другая часть моего опыта, которая здесь не приведена, утеряна где то в качестве отдельных подсистем в проектах, либо не поддается демонстрации.</p>
          <p>Все эти проекты являются реальными задачами, и никакой из этих проектов не был реализован в учебных или демонстрационных целях. Те проекты, у которых есть ссылка на сайт, могли серьезно видоизмениться без моего участия. Эти ссылки даны здесь лишь для подтверждения того, что данные работы были использованы на продакшене, и на данный момент применены на реальных сайтах.</p>
        </div>
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
  methods: {
    
  }
 
 
}
</script>

<style scoped lang="scss">
  
 
</style>