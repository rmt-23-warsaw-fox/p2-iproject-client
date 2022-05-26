const routes = [{
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
      path: '',
      component: () => import('pages/HomePage.vue'),
      name: "Antre"
    },
    {
      path: '/about',
      component: () => import('pages/AboutPage.vue'),
      name: "About"
    },
  ]
},
{
  path:"/login",
  component: () => import('pages/LoginPage.vue'),
  name: "Login"
},
{
  path:"/events",
  component: () => import('pages/EventPage.vue'),
  name: "Events"
},
{
  path:"/organizers/login",
  component: () => import('pages/LoginOrganizerPage.vue'),
  name: "Login Organizer"
},
{
  path:"/organizers/create-event",
  component: () => import('pages/CreateEventPage.vue'),
  name: "Create Event"
},
// Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => import('pages/ErrorNotFound.vue')
}
]

export default routes