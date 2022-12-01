<template>
  <div>
    <el-card class="box-card">
      <AppText :data="about" />
    </el-card>
    <br>
    <el-collapse v-for="(project, idx) in dataset" :key="idx" v-model="activeNames" accordion class="projects">
      <AppProject :data="project" />
    </el-collapse>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData ({ store }) {
    const dataset = await store.dispatch('projects/getAll')
    return { dataset }
  },
  data () {
    return {
      activeNames: [false]
    }
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
