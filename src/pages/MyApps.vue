<template>
  <div class="container">
    <div class="content-landing pt-30">
      <div class="row myApp-tabs flex justify-between q-item">
        <q-tabs v-model="tab" narrow-indicator class="q-mb-lg align-start">
          <q-tab
            class="text-black"
            name="company_information"
            label="COMPANY INFORMATION"
          />
          <q-tab
            class="text-black"
            name="apps_services"
            label="APPS & SERVICES"
          />
          <q-tab class="text-black" name="news" label="NEWS" />
        </q-tabs>
        <q-input v-model="text" outlined label="Search App">
          <template v-slot:prepend>
            <q-icon name="fal fa-search" />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-sm">
        <q-tab-panels v-model="tab">
          <q-tab-panel name="company_information">
            <div class="lastest-app mb-65 row">
              <div class="col col-md-12 col-xs-12 q-item">
                <div class="title-heading-row uppercase">Company Details</div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="apps_services">
            <div class="row myApp-tabs flex justify-between q-item">
                <q-tabs
                    v-model="app_service_tab"
                    narrow-indicator
                    class="q-mb-lg align-start"
                    >
                    <q-tab class="text-black" name="apps" label="APPS" />
                    <q-tab class="text-black" name="services" label="SERVICES" />
                </q-tabs>
            </div>
            <q-tab-panels v-model="app_service_tab">
              <q-tab-panel name="apps">
                <div class="lastest-app mb-65 row">
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#"><img src="~assets/images/1.png" /></a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Take Me There</div></a
                          >
                          <div class="text-subtitle2">
                            Ride sharing for seniors
                          </div>

                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">Just Now</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#"><img src="~assets/images/2.png" /></a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Dude Where’s My Food?</div></a
                          >
                          <div class="text-subtitle2">
                            Easy recipes and pre-made meal kits for older
                            adults.
                          </div>

                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">2 hrs ago</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#"><img src="~assets/images/3.png" /></a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Golden Age of Radio</div></a
                          >
                          <div class="text-subtitle2">
                            Streaming hits from the big band to the doo-woop
                            era.
                          </div>
                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">4 hrs ago</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#">
                          <img src="~assets/images/4.png" />
                        </a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Word Guesser</div></a
                          >
                          <div class="text-subtitle2">
                            Guess the word in up to 6 trie
                          </div>

                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">6 hrs ago</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
            <q-tab-panels v-model="app_service_tab">
              <q-tab-panel name="services">
                <div class="lastest-app mb-65 row">
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#"><img src="~assets/images/1.png" /></a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Take Me There</div></a
                          >
                          <div class="text-subtitle2">
                            Ride sharing for seniors
                          </div>

                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">Just Now</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#"><img src="~assets/images/2.png" /></a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Dude Where’s My Food?</div></a
                          >
                          <div class="text-subtitle2">
                            Easy recipes and pre-made meal kits for older
                            adults.
                          </div>

                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">2 hrs ago</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#"><img src="~assets/images/3.png" /></a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Golden Age of Radio</div></a
                          >
                          <div class="text-subtitle2">
                            Streaming hits from the big band to the doo-woop
                            era.
                          </div>
                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">4 hrs ago</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                  <div class="col col-md-3 col-sm-6 col-xs-12">
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a href="#">
                          <img src="~assets/images/4.png" />
                        </a>

                        <q-card-section>
                          <a href="#"
                            ><div class="text-h6">Word Guesser</div></a
                          >
                          <div class="text-subtitle2">
                            Guess the word in up to 6 trie
                          </div>

                          <div
                            class="q-pt-none flex justify-between align-center"
                          >
                            <div class="time-sm">6 hrs ago</div>
                            <div class="users-list">
                              <div class="user-item">
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-1.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-2.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                                <div class="avatar pull-up">
                                  <img
                                    src="~assets/images/user-33.png"
                                    alt=""
                                    class="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="news">
            <div class="lastest-app mb-65 row">
              <div class="col col-md-12 col-xs-12 q-item">
                <div class="title-heading-row uppercase">Lastest News</div>
              </div>
              <q-list class="list-news">
                <q-item>
                  <q-item-section>
                    <q-item-label
                      >June 1 2024 -- Gerry Health Labs Launches Healthcare
                      Marketplace</q-item-label
                    >
                    <q-item-label caption lines="2"
                      >Article details</q-item-label
                    >
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label
                      >May 1 2024 -- Gerry Connect Update v1.8</q-item-label
                    >
                    <q-item-label caption lines="2"
                      >Article details</q-item-label
                    >
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label
                      >March 19 2024 -- Gerry Connect Partners with HealthNet to
                      Improve Care for Seniors</q-item-label
                    >
                    <q-item-label caption lines="2"
                      >Article details</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <div class="footer">
      <div class="i-gh">
        <div class="t-f">Gerry Health Labs</div>
        <q-icon name="fab fa-github"></q-icon>
        <div class="t-c">Toronto MicroElectronics Inc.</div>
      </div>
      <div class="copyright">Copyright ©2024 Toronto MicroElectronics Inc.</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('company_information'),
      app_service_tab: ref('apps'),
      navPos: ref('top')
    }
  },
  components: {
    // SlideHeader
  }
}
</script>
