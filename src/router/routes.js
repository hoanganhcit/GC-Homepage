const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/company-information', component: () => import('src/pages/CompanyInformation.vue') },
      { path: '/download', component: () => import('pages/DownloadApp.vue') },
      { path: '/partner', component: () => import('pages/PartnerPage.vue') },
      { path: '/app-details', component: () => import('pages/AppDetails.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
