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
        <q-input v-model="search" outlined label="Search App">
          <template v-slot:prepend>
            <q-icon name="fal fa-search" />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-sm">
        <q-tab-panels v-model="tab">
          <q-tab-panel name="company_information">
            <div class="lastest-app mb-65 row">
              <div class="col col-md-12 col-xs-12 q-pa-md">
                <q-banner dense inline-actions class="text-black bg-blue-3 mt-30">
                  <div class="fs-18">Company Details</div>
                </q-banner>
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="company_name" label="Company Name *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Company Name is required']" />
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="website" label="Website" />
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="phone_number" label="Phone Number *" :rules="[
                val => !!val || 'Phone Number is required',
                val => /^[0-9]{10,15}$/.test(val) || 'Phone Number must be 10-15 digits'
              ]"/>
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="address_1" label="Address 1 *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Address is required']"/>
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="province" label="Province / State *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Province / State is required']"/>
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="vendorLogo" label="Vendor Logo*" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Vendor Logo is required']">
                  <template v-slot:append>
                    <q-icon name="fal fa-upload fs-18"/>
                  </template>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    @change="onFileChange"
                    class="file-hidden"
                  />
                </q-input>
                <div v-if="imageUrl" class="q-mt-md">
                  <img :src="imageUrl" alt="Preview" style="max-width: 100%; height: 100px;" />
                </div>
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="address_2" label="Address 2" />
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="city" label="City *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'City is required']"/>
              </div>
              <div class="col col-md-4 col-xs-12 q-pa-md">
                <q-input outlined v-model="country" label="Country *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Country is required']"/>
              </div>
              <div class="col col-md-12 col-xs-12 q-pa-md">
                <q-input outlined v-model="company_description" type="textarea" label="Company Description / Services"/>
              </div>
              <div class="col col-md-12 col-xs-12 q-pa-md">
                <q-banner dense inline-actions class="text-black bg-blue-3 mt-30">
                  <div class="fs-18">Contact Details</div>
                </q-banner>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="contact_name" label="Contact Name *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Contact Name is required']"/>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="job_title" label="Job Title"/>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined type="email" v-model="contact_mail" label="Email Address *" :rules="[val => !!val || 'Email is required', val => emailValidation(val) || 'Email must be valid']" />
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="contact_phone" label="Phone Number *" :rules="[
                val => !!val || 'Phone Number is required',
                val => /^[0-9]{10,15}$/.test(val) || 'Phone Number must be 10-15 digits'
              ]"/>
              </div>
              <div class="col col-md-12 col-xs-12 q-pa-md">
                <q-banner dense inline-actions class="text-black bg-blue-3 mt-30">
                  <div class="fs-18">App Details</div>
                </q-banner>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="app_name" label="App Name *" lazy-rules
                :rules="[ val => val && val.length > 0 || 'App Name is required']"/>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="operating_system" label="Operating System"/>
              </div>
              <div class="col col-md-12 col-xs-12 q-pa-md">
                <q-input outlined v-model="apk_link" label="APK Link " lazy-rules
                :rules="[ val => val && val.length > 0 || 'APK Link is required']"/>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="one_time_cost" label="One Time Cost ($ CAD)"/>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <label for="">Monthly Subscription? </label>
                <div class="q-gutter-sm">
                  <q-radio
                    v-model="monthlySubscription"
                    val="yes"
                    label="Yes"
                  />
                  <q-radio
                    v-model="monthlySubscription"
                    val="no"
                    label="No"
                  />
                </div>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="desc_app" type="textarea" label="Description"/>
              </div>
              <div class="col col-md-6 col-xs-12 q-pa-md">
                <q-input outlined v-model="desc_cost" label="Subscription Cost ($CAD)"/>
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
                <q-btn :label="showAddApp ? 'Save App' : 'Add App'" @click="addAppChange" no-caps :size="'md'" color="positive" style="height:35px"  v-if="app_service_tab === 'apps'"/>
                <q-btn :label="showAddService ? 'Save Services' : 'Add Services'" @click="addServiceChange" no-caps :size="'md'" color="positive" style="height:35px"  v-if="app_service_tab === 'services'"/>
            </div>
            <q-tab-panels v-model="app_service_tab">
              <q-tab-panel name="apps">
                <div class="lastest-app mb-65 row" v-if="!showAddApp">
                  <div
                    class="col col-md-3 col-sm-6 col-xs-12"
                    v-for="(item, index) in appList"
                    :key="index"
                  >
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a :href="item.link">
                          <img :src="item.image" />
                        </a>

                        <q-card-section>
                          <a :href="item.link">
                            <div class="text-h6">{{ item.title }}</div>
                          </a>
                          <div class="text-subtitle2">{{ item.subtitle }}</div>

                          <div class="q-pt-none flex justify-between align-center">
                            <div class="time-sm">{{ item.time }}</div>
                            <div class="users-list">
                              <div class="user-item" v-for="(user, userIndex) in item.users" :key="userIndex">
                                <div class="avatar pull-up">
                                  <img :src="user.avatar" alt="" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                </div>
                <div class="add-app-box row"  v-if="showAddApp">
                  <div class="col col-md-12 col-xs-12 q-pa-md">
                    <q-banner dense inline-actions class="text-black bg-blue-3 mt-30">
                      <div class="fs-18">App Details</div>
                    </q-banner>
                  </div>
                  <div class="col col-md-6 col-xs-12 q-pa-md">
                    <q-input outlined v-model="app_name" label="App Name *" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'App Name is required']"/>
                  </div>
                  <div class="col col-md-6 col-xs-12 q-pa-md">
                    <q-input outlined v-model="appLogo" label="App Logo*" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'App Logo is required']">
                      <template v-slot:append>
                        <q-icon name="fal fa-upload fs-18"/>
                      </template>
                      <input
                        type="file"
                        id="fileInputAppLogo"
                        accept="image/*"
                        @change="onFileChangeAppLogo"
                        class="file-hidden"
                      />
                    </q-input>
                    <div v-if="imageUrlAppLogo" class="q-mt-md">
                      <img :src="imageUrlAppLogo" alt="Preview" style="max-width: 100%; height: 100px;" />
                    </div>
                  </div>
                  <div class="col col-md-6 col-xs-12 q-pa-md">
                    <q-input outlined v-model="operating_system" label="Operating System"/>
                  </div>
                  <div class="col col-md-6 col-xs-12 q-pa-md">
                    <q-input outlined v-model="web_link" label="Web Mobile Link  " lazy-rules
                    :rules="[ val => val && val.length > 0 || 'APK Link is required']"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <label for="">Monthly Subscription? </label>
                    <div class="q-gutter-sm">
                      <q-radio
                        v-model="monthlySubscription"
                        val="yes"
                        label="Yes"
                      />
                      <q-radio
                        v-model="monthlySubscription"
                        val="no"
                        label="No"
                      />
                    </div>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <label for="">Show on Service Hub?</label>
                    <div class="q-gutter-sm">
                      <q-toggle
                        :label="show_Service_hub"
                        color="primary"
                        false-value="No"
                        true-value="Yes"
                        v-model="show_Service_hub"
                      />
                    </div>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-input outlined v-model="one_time_cost" label="One Time Cost ($ CAD)"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-input outlined v-model="desc_cost" label="Subscription Cost ($CAD)"/>
                  </div>
                  <div class="col col-md-12 col-xs-12 q-pa-md">
                    <q-input outlined v-model="desc_app" type="textarea" label="Description"/>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
            <q-tab-panels v-model="app_service_tab">
              <q-tab-panel name="services">
                <div class="lastest-app mb-65 row" v-if="!showAddService">
                  <div
                    class="col col-md-3 col-sm-6 col-xs-12"
                    v-for="(item, index) in appList"
                    :key="index"
                  >
                    <q-item>
                      <q-card class="my-card no-shadow card-app">
                        <a :href="item.link">
                          <img :src="item.image" />
                        </a>

                        <q-card-section>
                          <a :href="item.link">
                            <div class="text-h6">{{ item.title }}</div>
                          </a>
                          <div class="text-subtitle2">{{ item.subtitle }}</div>

                          <div class="q-pt-none flex justify-between align-center">
                            <div class="time-sm">{{ item.time }}</div>
                            <div class="users-list">
                              <div class="user-item" v-for="(user, userIndex) in item.users" :key="userIndex">
                                <div class="avatar pull-up">
                                  <img :src="user.avatar" alt="" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-item>
                  </div>
                </div>
                <div class="add-app-box row"  v-if="showAddService">
                  <div class="col col-md-12 col-xs-12 q-pa-md">
                    <q-banner dense inline-actions class="text-black bg-blue-3 mt-30">
                      <div class="fs-18">Service Offering Details</div>
                    </q-banner>
                  </div>
                  <div class="col col-md-6 col-xs-12 q-pa-md">
                    <q-input outlined v-model="service_name" label="Service Name *" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'App Name is required']"/>
                  </div>
                  <div class="col col-md-6 col-xs-12 q-pa-md">
                    <q-input outlined v-model="service_logo" label="Logo*" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Logo is required']">
                      <template v-slot:append>
                        <q-icon name="fal fa-upload fs-18"/>
                      </template>
                      <input
                        type="file"
                        id="fileInputAppLogo"
                        accept="image/*"
                        @change="onFileChangeAppLogo"
                        class="file-hidden"
                      />
                    </q-input>
                    <div v-if="imageUrlAppLogo" class="q-mt-md">
                      <img :src="imageUrlAppLogo" alt="Preview" style="max-width: 100%; height: 100px;" />
                    </div>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-select outlined v-model="service_category" :options="options_service_category" label="Service Category" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Service Category Type is required']"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-select outlined v-model="service_delivery" :options="service_delivery_type" label="Service Delivery Type" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Service Delivery Type Type is required']"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-input outlined v-model="web_link" label="Service Area" lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Service Area Type is required']"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <label for="">Monthly Subscription? </label>
                    <div class="q-gutter-sm">
                      <q-radio
                        v-model="monthlySubscription"
                        val="yes"
                        label="Yes"
                      />
                      <q-radio
                        v-model="monthlySubscription"
                        val="no"
                        label="No"
                      />
                    </div>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <label for="">Show on Service Hub?</label>
                    <div class="q-gutter-sm">
                      <q-toggle
                        :label="show_Service_hub"
                        color="primary"
                        false-value="No"
                        true-value="Yes"
                        v-model="show_Service_hub"
                      />
                    </div>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-input outlined v-model="one_time_cost" label="One Time Cost ($ CAD)"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-input outlined v-model="hourly_cost" label="Hourly Cost ($ CAD)"/>
                  </div>
                  <div class="col col-md-3 col-xs-12 q-pa-md">
                    <q-input outlined v-model="desc_cost" label="Subscription Cost ($CAD)"/>
                  </div>
                  <div class="col col-md-12 col-xs-12 q-pa-md">
                    <q-input outlined v-model="desc_app" type="textarea" label="Description"/>
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
import image1 from 'assets/images/1.png'
import image2 from 'assets/images/2.png'
import image3 from 'assets/images/3.png'
import image4 from 'assets/images/4.png'
import user1 from 'assets/images/user-1.png'
import user2 from 'assets/images/user-2.png'
import user3 from 'assets/images/user-33.png'
export default {
  setup () {
    const imageUrl = ref(null)
    const imageUrlAppLogo = ref(null)
    const vendorLogo = ref(null)
    const appLogo = ref(null)
    const showAddApp = ref(false)
    const showAddService = ref(false)

    const onFileChange = (event) => {
      const file = event.target.files[0]
      if (file) {
        vendorLogo.value = file.name
        if (imageUrl.value) {
          URL.revokeObjectURL(imageUrl.value)
        }
        imageUrl.value = URL.createObjectURL(file)
      }
    }
    const onFileChangeAppLogo = (event) => {
      const fileAppLogo = event.target.files[0]
      if (fileAppLogo) {
        appLogo.value = fileAppLogo.name
        if (imageUrlAppLogo.value) {
          URL.revokeObjectURL(imageUrlAppLogo.value)
        }
        imageUrlAppLogo.value = URL.createObjectURL(fileAppLogo)
      }
    }
    const addAppChange = () => {
      showAddApp.value = !showAddApp.value
    }

    const addServiceChange = () => {
      showAddService.value = !showAddService.value
    }

    return {
      search: ref(null),
      tab: ref('company_information'),
      app_service_tab: ref('apps'),
      navPos: ref('top'),
      company_name: ref(null),
      website: ref(null),
      phone_number: ref(null),
      logo: ref(null),
      address_1: ref(null),
      address_2: ref(null),
      province: ref(null),
      city: ref(null),
      country: ref(null),
      company_description: ref(null),
      imageUrl,
      onFileChange,
      vendorLogo,
      monthlySubscription: ref('yes'),
      show_Service_hub: ref('Yes'),
      onFileChangeAppLogo,
      appLogo,
      imageUrlAppLogo,
      addAppChange,
      showAddApp,
      addServiceChange,
      showAddService,
      service_category: ref(null),
      service_delivery: ref(null),
      options_service_category: [
        'Communications', 'Entertainment', 'Meals', 'Medical Care', 'Residence', 'Travel'
      ],
      service_delivery_type: [
        'Virtual', 'On-Site at Provider', 'On-Site at Client'
      ],
      appList: [
        {
          link: '#',
          image: image1,
          title: 'Take Me There',
          subtitle: 'Ride sharing for seniors',
          time: 'Just Now',
          users: [
            { avatar: user1 },
            { avatar: user2 },
            { avatar: user3 }
          ]
        },
        {
          link: '#',
          image: image2,
          title: 'Dude Where’s My Food?',
          subtitle: 'Easy recipes and pre-made meal kits for older adults.',
          time: '2 hrs ago',
          users: [
            { avatar: user1 },
            { avatar: user2 },
            { avatar: user3 }
          ]
        },
        {
          link: '#',
          image: image3,
          title: 'Golden Age of Radio',
          subtitle: 'Streaming hits from the big band to the doo-wop era.',
          time: '4 hrs ago',
          users: [
            { avatar: user1 },
            { avatar: user2 },
            { avatar: user3 }
          ]
        },
        {
          link: '#',
          image: image4,
          title: 'Word Guesser',
          subtitle: 'Guess the word in up to 6 tries',
          time: '6 hrs ago',
          users: [
            { avatar: user1 },
            { avatar: user2 },
            { avatar: user3 }
          ]
        }
      ]
    }
  },
  methods: {
    emailValidation (email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    }
  },
  components: {
    // SlideHeader
  }
}
</script>
