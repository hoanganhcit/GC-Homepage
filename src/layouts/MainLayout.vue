<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header-white no-shadow"  v-if="showHeader" elevated >
      <q-toolbar>
        <q-item to="/" class="align-center">
          <img
            alt="Quasar logo"
            src="~assets/logo.png"
            class="mb-2rem logo-sm"
          />
        </q-item>
        <q-space />
        <q-list class="menu-header row items-center" v-if="!$q.screen.lt.md">
          <q-item to="/" class="align-center active">Home</q-item>
          <q-item to="/" class="align-center">Latest Apps</q-item>
          <q-item to="/" class="align-center">Most Popular</q-item>
          <q-item to="/" class="align-center">Our Partners</q-item>
          <q-item to="/login" class="align-center pr-0">
            <div class="btn button-login">
              <span>Partner Login</span>
            </div>
          </q-item>
          <q-item to="/download" class="align-center">
            <div class="btn bg-positive text-white">
              <span>Download</span>
            </div>
          </q-item>
        </q-list>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="drawer = !drawer"
          class="q-mr-sm"
          color="black"
          v-if="$q.screen.width <= 991"
        />
      </q-toolbar>
    </q-header>
    <q-header class="header-white no-shadow border-bottom-e" v-if="!showHeader">
      <q-toolbar>
        <q-toolbar-title style="padding-left: 12px;">
          <div class="title-h3 text-black">Welcome Dany!</div>
        </q-toolbar-title>
        <q-space />
        <q-list class="menu-header row items-center">
          <q-btn-dropdown class="button-none text-capitalize button-account" icon="fal fa-user" color="black" flat label="Account">
            <q-list>
              <q-item to="/login">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-list>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      :width="300"
      :breakpoint="768"
      v-if="showHeader"
    >
      <q-list>
        <q-item to="/" class="align-center text-black">Home</q-item>
        <q-item to="/" class="align-center text-black">Latest Apps</q-item>
        <q-item to="/" class="align-center text-black">Most Popular</q-item>
        <q-item to="/" class="align-center text-black">Our Partners</q-item>
        <q-item to="/login" class="align-center">
          <div class="btn button-login">
            <span>Login</span>
          </div>
        </q-item>
        <q-item to="/login" class="align-center">
          <div class="btn button-register">
            <span>Register</span>
          </div>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      headerDashboard: ['/my-apps'],
      headerRoute: ['/', '/login', '/download'],
      drawer: ref(false)
    }
  },
  computed: {
    showHeader () {
      return this.headerRoute.includes(this.$route.path)
    }
  }
})

</script>
