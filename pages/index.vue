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
              Ищу работу в области Frontend разработки на VueJS, или Fullstack разработки на NuxtJS
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-chat-round"></i>
               Способы связи
              </template>
          <el-button-group>
            <el-button type="info" icon="el-icon-message" @click="email"></el-button>
            <el-button type="info" @click="telegram"><img src="~/assets/img/tg.svg" alt=""></el-button>
            <el-button type="info" icon="el-icon-mobile-phone" @click="call"></el-button>
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

      <h3>Дополнительные навыки</h3>
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
      <p>Опыт адаптивной кроссбраузерной верстки сайтов более 6 лет. Опыт Frontend разработки Vue JS небольшой, но это направление, в котором я активно развиваюсь. Также развиваюсь в направлении Fullstack разработки на NuxtJS и ставлю это направление в свой будущий приоритет. Занимаюсь улучшением знания английского языка, чтобы сразу понимать документацию в оригинале. Имею опыт работы как в команде, так и удаленно.</p>

      <NuxtLink to="/projects"><el-button type="primary">Перейти в портфолио</el-button></NuxtLink>
      <p><span> Приблизительная статистика по опыту: </span>
        <el-badge :value="120" :max="100" class="badge">
          <el-button size="small">Html лендингов</el-button>
        </el-badge>
        <el-badge :value="70" :max="99" class="badge">
          <el-button size="small">Html сайтов</el-button>
        </el-badge>
        <el-badge :value="8" :max="99" class="badge">
          <el-button size="small">Vue проектов</el-button>
        </el-badge>
        <el-badge :value="3" :max="99" class="badge">
          <el-button size="small">Nuxt проектов</el-button>
        </el-badge>
        <el-badge :value="35" :max="99" class="badge">
          <el-button size="small">CMS сайтов</el-button>
        </el-badge>
       
        <el-badge :value="999" :max="599" class="badge">
          <el-button size="small">задач по верстке</el-button>
        </el-badge>

      </p>
      </div><!-- /.description -->

         
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
              <p>Верстка сайтов. Интеграция сайтов на CMS Diafan, Wordpress. Оптимизация, поддержка работы сайтов. Выполнение комплекса работ по технической части.</p>
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
          { type: 'info', label: 'Английский А2' },
          { type: 'info', label: 'Французский А2' },
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
      location.href='mailto:ktr992@yandex.ru'
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
   .el-timeline-item__content h4 {
    font-weight: bold;
    font-size: 16px;
    margin: 0 0 5px 0;
  }
  .el-timeline-item__content p {
    margin: 0 0 10px 0;
  }
 
 .el-descriptions-row .el-button a {
   padding: 0;
 }
.el-button-group>.el-button  {
  font-size: 20px;
      padding: 8px 27px;
}
.el-button-group>.el-button img {
 width: 20px;
    height: 20px;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
}
.el-tag {
  margin-right: 5px;
}
.badge {
  margin-top: 10px;
  margin-right: 15px;
}
.description span {
  display: inline-block;
  vertical-align: middle;
  padding-right: 10px;
}
sup.el-badge__content.el-badge__content--undefined.is-fixed {
  right: 32px !important;
}
</style>
