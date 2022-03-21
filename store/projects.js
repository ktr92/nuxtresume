export const state = () => ({
  projects: [
    {
      prname: "CRM система",
      prdescription: "CRM система для студии заточки. Основным требованием было заменить используемую ранее систему в формате Excel таблиц и перенести все данные из старой системы в новую. Дополнительные требования: схожесть с excel таблицами, простота использования, статистика по произвольному интервалу времени.",
      prtags: ['nuxt', 'vue', 'mongodb'],
      prlink: "https://crm-ideal.herokuapp.com/",
      prgit: "https://github.com/ktr92/crmvuetify",
      prpreview: [],
    },
    {
      prname: "Подбор витаминов онлайн",
      prdescription: "Сервис подбора витаминов для блога. Реализован на Vue 3 Composition API. ",
      prtags: ['vue'],
      prlink: "http://vuecalc.tmweb.ru/",
      prwork: "https://herbblog.ru/podbor-vitaminov/",
      prgit: "https://github.com/ktr92/appcalc",
      prpreview: []
    },

  ]
})

export const mutations = {

}

export const actions = {

}

export const getters = {
  projects: state => state.projects
}