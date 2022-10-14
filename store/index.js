export const state = () => ({
  name: "Кудашев Тимур",
  city: "Набережные Челны",
  date: "25 июня 1992",
  status: "Ищу работу Frontend разработчиком VueJS, NuxtJS",
  emailvalue: "ktr992@yandex.ru",
  phonevalue: '89869108073',
  tgvalue: '//tttttt.me/ktr992',
  description: 'Опыт адаптивной кроссбраузерной верстки более 7 лет. Опыт коммерческой Frontend разработки VueJS более 1 года',
  skills: [    
    { type: 'info', label: 'VueJS' },
    { type: 'info', label: 'NuxtJS' },
    { type: 'info', label: 'HTML' },
    { type: 'info', label: 'CSS' },
    { type: 'info', label: 'SCSS' },    
    { type: 'info', label: 'Javascript' },
    { type: 'info', label: 'jQuery' }, 
    { type: 'info', label: 'Тестирование Jest/Cypress' },  
  ],
  skills2: [    
   // { type: 'info', label: 'Typescript' },
   { type: 'info', label: 'Pug' },  

   { type: 'info', label: 'MongoDB' },
    { type: 'info', label: 'Webpack' },    
    { type: 'info', label: 'Git' },
    { type: 'info', label: 'Figma' },
    { type: 'info', label: 'Photoshop' },    
   // { type: 'info', label: 'C++' },
   // { type: 'info', label: 'Python' },
   // { type: 'info', label: 'Matlab' },
    { type: 'info', label: 'MySQL' },   
   // { type: 'info', label: 'CMS Opencart' },
   // { type: 'info', label: 'CMS Diafan' }
  ],
  langs: [
    { type: 'info', label: 'Английский' },
    { type: 'info', label: 'Французский' },
  ],
  experience: [
    {
      date: '2010 - 2015',
      title: 'Филиал Казанского (Приволжского) федерального университета, Набережные Челны',
      description: 'Прикладная математика и информатика (математик, системный программист)',
      role: 'Специалист',
      status: 'past',
      id: '001'
    },
    {
      date: '2015 - 2018',
      title: 'VELVETMEDIA, веб-студия г. Набережные Челны',
      description: 'Верстка HTML CSS JS и интеграция на CMS. Разработка и оптимизация работы веб-сайтов.',
      role: 'Верстальщик, программист',
      status: 'past',
      id: '002'
    },
    {
      date: '2018 - 04.2022',
      title: 'ООО "Эмпис", интернет-агентство полного цикла, г.Москва - <a href="//www.empis.ru" target="_blank">empis.ru</a> ',
      description: 'Frontend разработка и верстка макетов.',
      role: 'Верстальщик, Frontend-разработчик',
      status: 'past',
      id: '004'
    },
    {
      date: '04.2022 - н.в.',
      title: 'ООО "ИПОТЕХ", Иннополис',
      description: 'Разработка Frontend части приложений Nuxt Vue.',
      role: 'Frontend-разработчик',
      status: 'present',
      id: '005'
    },
  ],
  about: `<div>
    <p>Некоторая часть моего опыта коммерческой разработки.</p>
    <p>Проекты, у которых есть ссылка на сайт, могли существенно видоизмениться без моего участия.</p>
  </div>`

})

