<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="item in data" :key="item.id" :timestamp="item.date" placement="top" :color="color(item.status)">
        <el-card>
          <h4 v-html="item.title" />
          <p v-html="item.description" />
          <span class="el-tag el-tag--light">{{ item.role }}</span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  props: ['data'],
  data () {
    return {

    }
  },
  methods: {
    color (status) {
      return status === 'present' ? '#409eff' : '#909399'
    }
  }
}
</script>

<style>

</style>
