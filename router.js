const UserForm = { template: '<div>UserForm</div>' }
const UserList = { template: '<div>UserList</div>' }
const UserShow = { template: '<div>UserShow {{ $route.params.id }}</div>' }

const GameList = { template: '<div>GameList</div>' }
const GameShow = { template: '<div>GameShow {{ $route.params.slug }}</div>' }

const PlayForm = { template: '<div>PlayForm {{ $route.params.slug }}</div>' }
const PlayList = { template: '<div>PlayList</div>' }
const PlayShow = { template: '<div>PlayShow {{ $route.params.id }}</div>' }

const router = new VueRouter({
  routes: [
    { path: '/user/me', component: UserForm },
    { path: '/user/list', component: UserList },
    { path: '/user/:id', component: UserShow },

    { path: '/game/list', component: GameList },
    { path: '/game/:slug', component: GameShow },

    { path: '/game/:slug/play/new', component: PlayForm },
    { path: '/play/list', component: PlayList },
    { path: '/play/:id', component: PlayShow },
  ]
})
