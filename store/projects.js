export const state = () => ({
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
      html: {
        icon: 'html.svg',
        name: 'HTML'
      },       
      css: {
        icon: 'css.svg',
        name: 'CSS'
      },       
      vuetify: {
        icon: 'vuetify.svg',
        name: 'Vuetify'
      },       
      elementui: {
        icon: 'element.svg',
        name: 'ElementUI'
      },       
      elementui: {
        icon: 'element.svg',
        name: 'ElementUI'
      },       
    }      
})

export const mutations = {

}

export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/projects/admin/create', data)
    } catch (e) {
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$post(`/api/projects/admin/remove/${id}`)
    } catch (e) {
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/projects/admin/edit/${id}`, data)
    } catch (e) {
    
      throw e
    }
  },
  async getAll({commit}, data) {
    try {
      return await this.$axios.$get('/api/projects') 
    } catch (error) {
      
    }
  },
  async fetchAdminById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/projects/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
}

export const getters = {
  tags: state => state.tags
}