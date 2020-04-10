import Vue from 'vue'
import Router from 'vue-router'
import PlayShow from 'pages/PlayShow'

Vue.use(Router)

const routes = [
/*  { path: '/user/me', component: UserForm },
  { path: '/user/list', component: UserList },
  { path: '/user/:userId', component: UserShow },

  { path: '/game/list', component: GameList },
  { path: '/game/:gameSlug', component: GameShow },

  { path: '/game/:gameSlug/play/new', component: PlayForm },
  { path: '/play/list', component: PlayList },*/
  { path: '/play/:playId', component: PlayShow },

  { path: '*', component: PlayShow },
]

export default new Router({
  routes
})
