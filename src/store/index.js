import { createStore } from 'vuex'
import auth from './modules/auth.module'
import axios from 'axios'

export default createStore({
  state() {
    return {
      navbar: {
        home: {
          url: '/',
          title: 'Главная',
          desc: '',
          home: false,
          nav: true,
        },
        about: {
          url: '/about',
          title: 'Обо Мне',
          desc: '"Простота — залог надежности."',
          home: true,
          nav: true,
          namePage: 'Приветствую гостей моего сайта!',
          aboutMe: [
            {text: 'Меня зовут Дмитрий, Я Front-end разработчик из Киева. Разрабатываю интуитивно понятные, динамичные пользовательские интерфейсы с чистым и эффективным кодом.'},
            {text: 'Стараюсь не останавливаться на достигнутом результате и постоянно улучшаю свои навыки изучая самые современные технологии. Увлекаюсь футболом, сериалами и вкусной едой.'},
            {text: 'На моем сайте в разделе портфолио представлены проекты, которые были разработаны мною в течение последних лет.'},
          ],
          descPage: 'Преимущества работы со мной:',
          descPageEl: [
            {
              title: 'Деньги',
              text: 'За мои услуги вы платите адекватные деньги, которые соответствуют качеству и скорости выполнения работы.'
            },
            {
              title: 'Время',
              text: 'Любая, заказаная Вами, работа, будет выполнена качественно и по возможности в максимально кратчайшие сроки.'
            },
            {
              title: 'Нервы',
              text: 'В отличии от большинства разработчиков, всегда нахожусь на связи, тем самым быстро смогу решить Вашу проблему!'
            },
          ],
          mainImg: 'https://i.imgur.com/52iQIvQ.png',
          resume: [
            {
              title: 'Статус',
              text: 'Front-end разработчик, фрилансер',
              array: false
            },
            {
              title: 'Имя',
              text: 'Николаенко Дмитрий',
              array: false
            },
            {
              title: 'Специализация',
              text: 'Одностраничные приложения (SPA), Сайт-визитка, Landing Page, сайт под ключ, доработка функциональности сайтов, доработка адаптивности и кроссбраузерности.',
              array: false
            },
            {
              title: 'Образование',
              text: [
                {text: '2019 – 2020, Геоинформатик, Магистр, КНУБА'},
                {text: '2015 – 2019, Геоинформатик, Бакалавр, КНУБА'},
              ],
              array: true
            },
            {
              title: 'Деловые и личные качества',
              text: 'Собранный и уверенный в своих силах, планирую выполнение работы, творчески подхожу к выполнению ТЗ, самодисциплина и способность работать в команде. Всегда нахожусь на связи, заинтересован в постоянных заказчиках.',
              array: false
            }
          ],
          contacts: {
            title: 'Контакты',
            text: [
              {
                title: 'E-mail',
                text: 'dima.nikolaenko.ua@gmail.com',
                style: 'fas fa-envelope'
              },
              {
                title: 'Telegram',
                text: '@dima_nikolaenko',
                style: 'fas fa-paper-plane'
              },
              {
                title: 'Inst',
                text: '@dm.nikolaenko',
                style: 'fab fa-instagram'
              },
            ],
            array: true
          },
          certificates: []
        },
        services: {
          url: '/services',
          title: 'Услуги',
          desc: 'Читать',
          home: false,
          nav: false,
          modalDefault: {
            price: 'Минимальная цена',
            period: 'Срок реализации'
          },
          services: [
            {
              name: 'Landing Page',
              imgDesc: 'fas fa-sticky-note',
              desc: 'Это посадочная страница для сбора контактов посетителей или продажи товара. Как правило, это одностраничный сайт, на котором кратко и емко представлена информация об услуге или товаре, что позволяет повысить эффективность рекламы.',
              modal: [
                {
                  type: 'desc',
                  value: {
                    price: '100$',
                    technologies: ['Статический HTML', 'СMS: WordPress'],
                  }
                },
                {
                  type: 'title',
                  value: 'Кому подходит?'
                },
                {
                  type: 'text',
                  value: 'Лендинг — это любая страница, которая призывает пользователя что-то сделать. Например, подписаться на рассылку, купить билет на конференцию, запросить смету или просто скачать презентацию. Поэтому, если у вас есть бизнес или ваша деятельность связана с людьми, вам пригодится лендинг. Такие страницы создают для узкой аудитории. Их эффективно использовать в рекламе и тогда, когда нужно сосредоточиться на чем-то определенном — продаже, информации, приглашении подписаться на рассылку и пр.'
                },
                {
                  type: 'title',
                  value: 'Возможные целевые действия:'
                },
                {
                  type: 'list',
                  value: ['Оформление', 'Оформление', 'Оформление']
                },
                {
                  type: 'text',
                  value: 'Стоит понимать, что вы сами решаете - какое целевое действие для вас является ключевым. Для оптовых продаж - это может быть заполнение брифа. А для розничной сферы это может быть полная онлайн-оплата товара или услуги.'
                },
                {
                  type: 'time',
                  value: 'до 10 дней'
                },
                {
                  type: 'title',
                  value: 'Для примера:'
                },
                {
                  type: 'example',
                  value: 'https://i.imgur.com/YBZPieC.png'
                },
              ],
            },
            {
              name: 'Сайт визитка',
              imgDesc: 'fas fa-sticky-note',
              desc: 'Это посадочная страница для сбора контактов посетителей или продажи товара. Как правило, это одностраничный сайт, на котором кратко и емко представлена информация об услуге или товаре, что позволяет повысить эффективность рекламы.',
              modal: [
                {
                  type: 'desc',
                  value: {
                    price: '100$',
                    technologies: ['Статический HTML', 'СMS: WordPress'],
                  }
                },
                {
                  type: 'title',
                  value: 'Кому подходит?'
                },
                {
                  type: 'text',
                  value: 'Лендинг — это любая страница, которая призывает пользователя что-то сделать. Например, подписаться на рассылку, купить билет на конференцию, запросить смету или просто скачать презентацию. Поэтому, если у вас есть бизнес или ваша деятельность связана с людьми, вам пригодится лендинг. Такие страницы создают для узкой аудитории. Их эффективно использовать в рекламе и тогда, когда нужно сосредоточиться на чем-то определенном — продаже, информации, приглашении подписаться на рассылку и пр.'
                },
                {
                  type: 'title',
                  value: 'Возможные целевые действия:'
                },
                {
                  type: 'list',
                  value: ['Оформление', 'Оформление', 'Оформление']
                },
                {
                  type: 'text',
                  value: 'Стоит понимать, что вы сами решаете - какое целевое действие для вас является ключевым. Для оптовых продаж - это может быть заполнение брифа. А для розничной сферы это может быть полная онлайн-оплата товара или услуги.'
                },
                {
                  type: 'time',
                  value: 'до 10 дней'
                },
                {
                  type: 'title',
                  value: 'Для примера:'
                },
                {
                  type: 'example',
                  value: 'https://i.imgur.com/YBZPieC.png'
                },
              ],
            },
          ]
        },
        skills: {
          url: '/skills',
          title: 'Навыки',
          desc: '"Отладка кода — это как охота. Охота на баги."',
          home: true,
          nav: true,
          skills: []
        },
        portfolio: {
          url: '/portfolio',
          title: 'Портфолио',
          desc: '"Работает? Не трогай."',
          home: true,
          nav: true,
          portfolio: []
        },
        price: {
          url: '/price',
          title: 'Прайс-лист',
          desc: 'Читать',
          home: false,
          nav: false,
          status: 'Моя цель - предоставить лучшую услугу на рынке!',
          title1: 'Работая со мной вы экономите',
          title1El: [
            {
              title: 'Деньги',
              text: 'За мои услуги вы платите столько, сколько они действительно стоят. Ничего лишнего. 100% отработка ваших денег.'
            },
            {
              title: 'Время',
              text: 'Предлагаю вам создание сайта любой сложности в самые сжатые сроки, без потери качества выполнения работы.'
            },
            {
              title: 'Нервы',
              text: 'Быстро устраню любую проблему на вашем сайте, всегда бываю на связи, и никуда не пропадаю! Связь любым удобным для вас способом.'
            },
          ],
          title2: 'Вы гарантировано получаете',
          title2El: [
            'сайт, одинаково отображающийся во всех современных браузерах',
            'оптимизированный дизайн страниц под современные мобильные устройства',
            'отношение к Вашему проекту как к своему собственному',
            'оперативную работу в соответствии с установленным дедлайном'
          ],
          footerBlock1: {
            title: 'Сроки',
            text: 'В среднем, учитывая этап согласования технического задания, внутренние утверждения на стороне клиента и длительность работ по созданию и разработке некоторых элементов сайта, длительность создания сайта может составлять от 2 дней до 3 месяцев. Более подробную информацию, вы можете найти в разделе услуги и нажав там на соответствующую карточку.'
          },
          footerBlock2: {
            title: 'Как вычисляется стоимость сайта?',
            text: 'Сайт — это не баннер и не буклет. Сайт — это проект разной сложности. Цена за сайт начинается с объема дизайна. Что это за сайт? Что включает в себя дизайн сайта стилистически? Сколько у него страниц? Простой ли это сайт в духе минимализма? Будет ли дизайн адаптивен? И прочее. В оценку входит множество разных факторов, на пример, общее время на работу, время на правки (они наверняка будут) и тд.'
          },
          priceMain: [
            {
              title: 'Тип сайта',
              items: [
                {
                  title: 'Landing Page',
                  cost: '100$'
                },
                {
                  title: 'Сайт визитка',
                  cost: '100$'
                },
                {
                  title: 'Личный блог',
                  cost: '100$'
                },
                {
                  title: 'Интернет-магазин',
                  cost: '100$'
                },
                {
                  title: 'Корпоративный сайт',
                  cost: '100$'
                }
              ]
            },
            {
              title: 'Функционал сайта',
              items: [
                {
                  title: 'Статистика посещений',
                  cost: ''
                },
                {
                  title: 'Новостная лента',
                  cost: ''
                },
                {
                  title: 'Поиск',
                  cost: ''
                },
                {
                  title: 'Форма обратной сязи',
                  cost: ''
                },
                {
                  title: 'Слайдер',
                  cost: ''
                },
                {
                  title: 'Фотогалерея',
                  cost: ''
                },
                {
                  title: 'Заказать звонок',
                  cost: ''
                },
                {
                  title: 'Онлайн консультация',
                  cost: ''
                },
                {
                  title: 'Подключить онлайн оплату',
                  cost: ''
                },
              ]
            },
            {
              title: 'Адаптив и наполнение',
              items: [
                {
                  title: 'Оптимизация готового сайта под мобильные устройства (1 страница)',
                  cost: ''
                },
                {
                  title: 'Информационное наполнение сайта',
                  cost: ''
                },
                {
                  title: 'Написание текста для сайта (статья от 500 знаков)',
                  cost: ''
                },
              ]
            },
            {
              title: 'Прочие услуги',
              items: [
                {
                  title: 'Поддержка и сопровождение сайта (1 год)',
                  cost: ''
                },
                {
                  title: 'Разработка калькулятора на сайте (расчет услуг/товаров)',
                  cost: ''
                },
              ]
            },
          ]
        },
        blog: {
          url: '/blog',
          title: 'Блог',
          desc: 'Читать',
          home: false,
          nav: false,
          posts: [
            {
              id: '1',
              date: '01.03.2021',
              title: 'Object Oriented JavaScript',
              prev: 'https://i.imgur.com/dmyypW4.jpg',
              img: 'https://i.imgur.com/dmyypW4.jpg',
              rubric: 'JavaScript',
              body: [
                {
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea animi pariatur et excepturi architecto sed autem ut tempore quos odit ipsam laudantium ratione cumque, quae harum mollitia dolor tenetur!'
                }
              ]
            },
          ]
        },
        contacts: {
          url: '/contacts',
          title: 'Контакты',
          desc: '"Сегодня никогда не повторится..."',
          home: false,
          nav: true,
          info: [
            {
              text: 'Если Вы хотите задать вопрос, сообщить об ошибках или просто поздороваться, то воспользуйтесь одним из способов связи ниже.'
            },
            {
              text: 'Предпочтительней оставлять сообщение, после чего Я лично свяжусь с Вами.'
            }
          ],
          blockInfo: [
            {
              title: 'Email',
              url: 'mailto:dima.nikolaenko.ua@gmail.com',
              desc: 'dima.nikolaenko.ua@gmail.com'
            },
            {
              title: 'Телефон',
              url: 'tel:+380637999880',
              desc: '+38 (063) 799-98-80'
            },
            {
              title: 'Viber',
              url: 'viber://add?number=380637999880',
              desc: 'Написать в Viber'
            },
            {
              title: 'Telegram',
              url: 'http://t.me/dima_nikolaenko',
              desc: '@dima_nikolaenko'
            },
          ],
          city: 'Kyiv, Ukraine',
          contactForm: [
            {
              title: 'Ваше имя',
              el: 'input',
              type: 'text',
              name: 'username',
              req: true
            },
            {
              title: 'Ваш e-mail',
              el: 'input',
              type: 'email',
              name: 'useremail',
              req: true
            },
            {
              title: 'Тематика',
              el: 'select',
              name: 'theme',
              options: [
                {value: 'Вопрос'},
                {value: 'Жалоба'},
                {value: 'Сотрудничество'},
                {value: 'Реклама'},
                {value: 'Прочее'},
              ]
            },
            {
              title: 'Сообщение',
              el: 'textarea',
              name: 'text',
              req: true
            },
          ]
        },
      },
      addPage: [
        {
          value: 'skills',
          title: 'Навыки',
          addRub: {
            addInput: {
              name: {
                id: 1,
                label: 'Категория',
                desc: 'name',
                value: ''
              },
              img: {
                id: 2,
                label: 'Иконка Font Awesome',
                desc: 'img',
                value: ''
              },
            },
          },
          addSkill: {
            addInput: {
              name: {
                id: 1,
                label: 'Навык',
                desc: 'name',
                value: ''
              },
              desc: {
                id: 2,
                label: 'Описание',
                desc: 'desc',
                value: ''
              },
            },
          }
        },
        {
          value: 'portfolio',
          title: 'Работу',
          addInput: {
            name: {
              id: 1,
              label: 'Название',
              desc: 'name',
              value: ''
            },
            url: {
              id: 2,
              label: 'Ссылка на сайт',
              desc: 'url',
              value: ''
            },
            period: {
              id: 3,
              label: 'Время разработки',
              desc: 'period',
              value: ''
            },
            img: {
              id: 4,
              label: 'Изображение',
              desc: 'img',
              value: ''
            },
            adaptiveTest: {
              id: 5,
              label: 'Результат адаптивности',
              desc: 'adaptiveTest',
              value: ''
            },
            imgDesc: {
              id: 6,
              label: 'Адаптив - Компьютер',
              desc: 'imgDesc',
              value: ''
            },
            imgTable: {
              id: 7,
              label: 'Адаптив - Планшет',
              desc: 'imgTable',
              value: ''
            },
            imgMobile: {
              id: 8,
              label: 'Адаптив - Телефон',
              desc: 'imgMobile',
              value: ''
            },
            task: {
              id: 9,
              label: 'Задача',
              desc: 'task',
              value: ''
            },
            color: {
              id: 10,
              label: 'Цвет - #000000',
              desc: 'color',
              value: ''
            }
          },
          type: {
            id: 1,
            isButton: false,
            label: 'Тип работы',
            desc: 'type',
            value: [
              {
                text: 'Личный блог',
                slug: false,
              }
            ]
          },
          technologies: {
            id: 2,
            isButton: false,
            label: 'Технологии',
            desc: 'technologies',
            value: [
              {
                text: 'JS',
                slug: false,
              },
              {
                text: 'CSS',
                slug: false,
              }
            ]
          },
        },
        {
          value: 'about',
          title: 'Сертификаты',
          addInput: {
            urlCert: {
              id: 1,
              label: 'Ссылка на сертификат',
              desc: 'urlCert',
              value: ''
            },
          },
        },
      ],
      socBlock: {
        git: {
          icon: 'fab fa-github',
          url: 'https://github.com/nikwebdevit'
        },
        inst: {
          icon: 'fab fa-instagram',
          url: 'https://www.instagram.com/dm.nikolaenko/'
        },
        linkedin: {
          icon: 'fab fa-linkedin',
          url: 'https://www.linkedin.com/in/dnikolaenko/'
        }
      },
      nameSite: 'Dima Nikolaenko',
      descSite: 'Front-end Developer',
      copyright: '© Dima Nikolaenko, 2021',
      isMenu: false
    }
  },
  mutations: {
    addNew(state, payload) {
      const idx = Object.keys(state.navbar).find(e => e === payload.navbar)
      state.navbar[idx][idx].push(payload.addObj)
    },
    addRub(state, request) {
      state.navbar.skills.skills = request
    },
    addPort(state, request) {
      state.navbar.portfolio.portfolio = request.reverse()
    },
    addCert(state, request) {
      state.navbar.about.certificates = request.reverse()
    }
  },
  actions: {
    async add({ commit, dispatch }, payload) {
      const token = this.getters['auth/token']
      const idx = this.state.navbar['skills']['skills'].find(e => e.slug === true)
      await axios.post(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Rub/${idx.id}/item.json?auth=${token}`, payload)
    },
    async loadSkills({commit, dispatch}) {
      const {data} = await axios.get(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Rub.json`)
      const requests = Object.keys(data).map(id => ({...data[id], id}))
      commit('addRub', requests)
    },
    async loadPort({commit, dispatch}) {
      const {data} = await axios.get(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Portfolio.json`)
      const requests = Object.keys(data).map(id => ({...data[id], id}))
      commit('addPort', requests)
    },
    async loadCert({commit, dispatch}) {
      const {data} = await axios.get(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Cert.json`)
      const requests = Object.keys(data).map(id => ({...data[id], id}))
      commit('addCert', requests)
    }
  },
  modules: {
    auth
  },
  getters: {
    addNew(state) {
      return state.addPage
    },
    addPageId(_, getters) {
      return id => getters.addNew.find(e => e.value === id)
    }
  }
})
