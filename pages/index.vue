<template>
  <div>
    <el-card class="box-card">
      <h1>Кудашев Тимур Ринатович</h1>
      <h3>Основная информация</h3>
           <el-descriptions class="margin-top" title="" :column="2"  border>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                Город
              </template>
              Набережные Челны
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-time"></i>
                Дата рождения
              </template>
              25 июня 1992
            </el-descriptions-item><br>
             <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-loading"></i>
                Статус
              </template>
              Ищу работу в области Frontend разработки на VueJS, <br/> или Fullstack разработки на NuxtJS
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-chat-round"></i>
               Способы связи
              </template>
          <el-button-group>
            <el-button type="info" icon="el-icon-message" @click="email"><small>{{ emailvalue }} </small></el-button>
            <el-button type="info" @click="telegram"><img src="~/assets/img/tg.svg" alt=""></el-button>
            <el-button type="info" icon="el-icon-mobile-phone" @click="call"><small>{{ phonevalue }}</small></el-button>
          </el-button-group>           
       </el-descriptions-item>           
      </el-descriptions>


      <h3>Ключевые навыки</h3>
      <div class="tag-group">
        <span class="tag-group__title"></span>
        <el-tag
          v-for="item in skills"
          :key="item.label"
          :type="item.type"
          effect="dark">
          {{ item.label }}
        </el-tag>
      </div>

      <h3>Дополнительные знания</h3>
      <div class="tag-group">
        <span class="tag-group__title"></span>
        <el-tag
          v-for="item in skills2"
          :key="item.label"
          :type="item.type"
          effect="dark">
          {{ item.label }}
        </el-tag>
      </div>

       <h3>Знание иностранных языков</h3>
      <div class="tag-group">
        <span class="tag-group__title"></span>
        <el-tag
          v-for="item in langs"
          :key="item.label"
          :type="item.type"
          effect="dark">
          {{ item.label }}
        </el-tag>
      </div>

      <h3>О себе</h3>
      <div class="description">
      <p>Опыт адаптивной кроссбраузерной верстки сайтов более 6 лет. Опыт Frontend разработки Vue JS небольшой, но это направление, в котором я активно развиваюсь. Также развиваюсь в направлении Fullstack разработки на NuxtJS и ставлю это направление в свой будущий приоритет. Занимаюсь улучшением знаний английского языка. Имею опыт работы как в команде, так и удаленно.</p>

     <!-- 
      <p><span> Приблизительная статистика по опыту: </span>
        <el-badge :value="150" :max="100" class="badge">
          <el-button size="small">HTML CSS JS сайтов</el-button>
        </el-badge>
        
        <el-badge :value="8" :max="99" class="badge">
          <el-button size="small">Vue проектов</el-button>
        </el-badge>
        <el-badge :value="3" :max="99" class="badge">
          <el-button size="small">Nuxt проектов</el-button>
        </el-badge>
        <el-badge :value="35" :max="30" class="badge">
          <el-button size="small">CMS сайтов</el-button>
        </el-badge>
       
        <el-badge :value="9999" :max="500" class="badge">
          <el-button size="small">мелкие доработки</el-button>
        </el-badge>

      </p> -->
      </div><!-- /.description -->

      <NuxtLink to="/projects"><el-button type="primary">Перейти в портфолио</el-button></NuxtLink>
         
      <h3>Образование и Опыт работы</h3>

     <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2010 - 2015" placement="top" >
            <el-card>
              <h4>Филиал Казанского (Приволжского) федерального университета, Набережные Челны</h4>
              <p>Прикладная математика и информатика (математик, системный программист)</p>
              <span class="el-tag el-tag--light">Специалист</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2015 - 2018" placement="top" >
            <el-card>
              <h4>VELVETMEDIA, веб-студия г. Набережные Челны</h4>
              <p>Верстка HTML CSS JS. Интеграция сайтов на CMS Diafan, Wordpress. Оптимизация, поддержка работы сайтов. Выполнение всего комплекса работ по технической части.</p>
              <span class="el-tag el-tag--light">Верстальщик, программист</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018" placement="top">
            <el-card>
              <h4>Фриланс, разработка собственных проектов</h4>
              <p>Верстка и другие виды работ на фрилансе - <a href="//www.fl.ru/users/ktr992/portfolio/#/" target="_blank">ссылка на фриланс профиль</a> </p>
               <span class="el-tag el-tag--light">Верстальщик</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018 - н.в." placement="top" color="#00dc82">
            <el-card>
              <h4>ООО "Эмпис", интернет-агентство полного цикла, г.Москва (удаленно) <a href="//www.empis.ru" target="_blank">empis.ru</a> </h4>
              <p>Верстка сайтов и задачи по Frontend разработке JS.</p>
               <span class="el-tag el-tag--light">Верстальщик, Frontend-разработчик</span>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>


    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailvalue: "ktr992@yandex.ru",
      phonevalue: '8 (986) 9108073',
      skills: [
          { type: 'info', label: 'HTML' },
          { type: 'info', label: 'CSS' },
          { type: 'info', label: 'SCSS' },
          { type: 'info', label: 'Javascript' },
          { type: 'info', label: 'jQuery' },
          { type: 'info', label: 'VueJS' },
          { type: 'info', label: 'NuxtJS' },
          { type: 'info', label: 'MongoDB' },
          { type: 'info', label: 'Figma' },
          { type: 'info', label: 'Photoshop' },
         
        ],
      skills2: [
          { type: 'info', label: 'Typescript' },
          { type: 'info', label: 'Webpack' },
          { type: 'info', label: 'C++' },
          { type: 'info', label: 'Python' },
          { type: 'info', label: 'Matlab' },
          { type: 'info', label: 'SQL' },
          { type: 'info', label: 'CMS Opencart' },
          { type: 'info', label: 'CMS Diafan' },
          { type: 'info', label: 'SEO' },
        ],
      langs: [
          { type: 'info', label: 'Английский' },
          { type: 'info', label: 'Французский' },
        ],


    }
  },
  methods: {
    call() {
      location.href='tel:89869108073'
    },
    telegram() {
      location.href='//tttttt.me/ktr992'
    },
    email() {
      location.href=`mailto:${this.email}`
    },

  }
}
</script>

<style scoped lang="scss">
 @import "../assets/scss/partials/_params.scss";
  .el-card__body a {
    color: $green;
    text-decoration: underline;
  }
  

</style>
