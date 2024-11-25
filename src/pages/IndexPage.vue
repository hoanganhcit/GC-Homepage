<template>
  <q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    animated
    control-color="white"
    navigation
    :navigation-position="navPos"
    padding
    arrows
    height="500px"
    class="text-white mt-3"
  >
    <template v-slot:navigation-icon="{ active, onClick }">
      <q-btn v-if="active" class="rectanger-icon active" flat round dense @click="onClick" />
      <q-btn v-else class="rectanger-icon" flat round dense @click="onClick" />
    </template>
    <q-carousel-slide
      v-for="(item, index) in slides"
      :key="index"
      :name="'slide' + (index + 1)"
      class="column no-wrap flex-center"
      :img-src="item.imgSrc"
    >
      <div class="container text-center">
        <div class="slide--our-mission-content">
          <div class="om-content">
            <div v-if="item.title" class="title-slide">{{ item.title }}</div>
            <p v-for="(paragraph, idx) in item.paragraphs" :key="idx">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <div class="container">
    <div class="content-landing">
      <div class="lastest-app mb-65 row">
        <div class="col col-md-12 col-xs-12 q-item">
          <div class="title-heading-row uppercase">Lastest Apps</div>
        </div>
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
      <div class="most-popular-app mb-65 row">
        <div class="col-12 q-item">
          <div class="title-heading-row uppercase">MOST POPULAR APPS</div>
        </div>
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
      <div class="our-partner mb-65 row">
        <div class="col-12 q-item">
          <div class="title-heading-row uppercase">OUR PARTNERS</div>
        </div>
        <div
          class="col col-md-3 col-sm-6 col-xs-12"
          v-for="(org, index) in organizations"
          :key="index"
        >
          <q-item>
            <q-card class="my-card no-shadow card-app">
              <a :href="org.link">
                <img :src="org.image" />
              </a>

              <q-card-section>
                <a :href="org.link">
                  <div class="text-h6">{{ org.title }}</div>
                </a>
                <div class="text-subtitle2">{{ org.description }}</div>
              </q-card-section>
            </q-card>
          </q-item>
        </div>
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
import { defineComponent, ref } from 'vue'
import slide1 from 'assets/images/seniorCare.jpg'
import slide2 from 'assets/images/senior-services.jpg'
import slide3 from 'assets/images/non-home-banner.jpg'
import slide4 from 'assets/images/Senior-Care.jpg'
import image1 from 'assets/images/1.png'
import image2 from 'assets/images/2.png'
import image3 from 'assets/images/3.png'
import image4 from 'assets/images/4.png'
import user1 from 'assets/images/user-1.png'
import user2 from 'assets/images/user-2.png'
import user3 from 'assets/images/user-33.png'
export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      slide: ref('slide1'),
      navPos: ref('top'),
      appList: [
        {
          link: '#/app-details',
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
          link: '#/app-details',
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
          link: '#/app-details',
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
          link: '#/app-details',
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
      ],
      organizations: [
        {
          link: '#/app-details',
          image: image1,
          title: 'VHA Home HealthCare',
          description: 'VHA Home HealthCare (VHA) is a not-for-profit charitable organization that helps ...'
        },
        {
          link: '#/app-details',
          image: image2,
          title: 'Helping Hands HealthCare',
          description: 'Providing professional healthcare personnel to Canadian hospitals since 1997...'
        },
        {
          link: '#/app-details',
          image: image3,
          title: 'Skinopathy',
          description: 'Artificial intelligence that can be used by physicians, nurses, and patients to pre-screen for skin cancers...'
        },
        {
          link: '#/app-details',
          image: image4,
          title: 'Canadian Assn of Retired People',
          description: 'CARP advocates for financial security and better access to healthcare for older adults...'
        }
      ],
      slides: [
        {
          imgSrc: slide1,
          title: 'Our Mission:',
          paragraphs: [
            'To empower older adults to maintain their independence and engage fully with their families and communities.',
            'With the Service Hub for Seniors, older adults can not only stay connected with loved ones but also access vital services that enrich their daily lives. We believe in supporting the holistic well-being of older adults, making it easier for them to thrive in their communities.'
          ]
        },
        {
          imgSrc: slide2,
          paragraphs: [
            'Service Hub for Seniors: Empowering Older Adults with Relevant Services Access a curated selection of services tailored specifically to their needs and interests.',
            'Older adults can easily discover and connect with local resources, including healthcare services, transportation options, meal delivery, and social activities that enhance their quality of life.'
          ]
        },
        {
          imgSrc: slide3,
          title: 'Featured Partner:',
          paragraphs: ['"insert partner description text here"']
        },
        {
          imgSrc: slide4,
          title: 'Featured App:',
          paragraphs: [
            'Gerry Connect is an easy and simple way for older adults to stay connected with their loved ones. Our specially designed application makes video calls a breeze, ensuring that distance or other challenges never stand in the way of meaningful connections.'
          ]
        }
      ]
    }
  },
  components: {
    // SlideHeader
  }
})
</script>
