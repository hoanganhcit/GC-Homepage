<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="white"
    navigation
    :navigation-position="navPos"
    padding
    arrows
    height="400px"
    class="bg-primary text-white mt-3"
  >
    <template v-slot:navigation-icon="{ active, onClick }">
      <q-btn v-if="active" class="rectanger-icon active" flat round dense @click="onClick" />
      <q-btn v-else class="rectanger-icon" flat round dense @click="onClick" />
    </template>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
      <div class="container text-center">
        <div class="slide--our-mission-content">
          <div class="om-content">
            <div class="title-slide">Our Mission:</div>
            <p>
              To empower older adults to maintain their independence and
              engage fully with their families and communities. </p>
            <p>With the
              Service Hub for Seniors, older adults can not only stay
              connected with loved ones but also access vital services that
              enrich their daily lives. We believe in supporting the
              holistic well-being of older adults, making it easier for them
              to thrive in their communities.
            </p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="style" class="column no-wrap flex-center">
      <div class="container text-center">
        <div class="slide--our-mission-content">
          <div class="om-content">
            <p>
              Service Hub for Seniors: Empowering Older Adults with Relevant Services
              Access a curated selection of services tailored specifically to their needs and interests.</p>
            <p>Older adults can easily discover and connect with local resources, including healthcare services, transportation options, meal delivery, and social activities that enhance their quality of life.
            </p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="layers" class="column no-wrap flex-center">
      <div class="container text-center">
        <div class="slide--our-mission-content">
          <div class="om-content">
            <div class="title-slide">Featured Partner:</div>
            <p>
              "insert partner description text here"
            </p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="map" class="column no-wrap flex-center">
      <div class="container text-center">
        <div class="slide--our-mission-content">
          <div class="om-content">
            <div class="title-slide">Featured App:</div>
            <p>
              Gerry Connect is an easy and simple way for older adults to stay connected with their loved ones. Our specially designed application makes video calls a breeze, ensuring that distance or other challenges never stand in the way of meaningful connections
            </p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <div class="container">
    <div class="content-landing">
      <div class="lastest-app mb-65 row">
        <div class="col-12 q-item">
          <div class="title-heading-row uppercase">App Lastest</div>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class=" my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/1.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Take Me There</div></a>
                    <div class="text-subtitle2">Ride sharing for seniors</div>

                    <div class="q-pt-none flex justify-between align-center">
                      <div class="time-sm">Just Now</div>
                      <div class="users-list">
                          <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
                              </div>
                          </div>
                      </div>
                    </div>
                </q-card-section>
            </q-card>
          </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/2.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Dude Where’s My Food?</div></a>
                    <div class="text-subtitle2">Easy recipes and pre-made meal kits for older adults.</div>

                    <div class="q-pt-none flex justify-between align-center">
                        <div class="time-sm">2 hrs ago</div>
                        <div class="users-list">
                          <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
                              </div>
                          </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/3.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Golden Age of Radio</div></a>
                    <div class="text-subtitle2">Streaming hits from the big band to the doo-woop era.</div>
                    <div class="q-pt-none flex justify-between align-center">
                      <div class="time-sm">4 hrs ago</div>
                        <div class="users-list">
                          <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
                              </div>
                          </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#">
                  <img src="~assets/images/4.png" />
                </a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Word Guesser</div></a>
                    <div class="text-subtitle2">Guess the word in up to 6 trie</div>

                <div class="q-pt-none flex justify-between align-center">
                    <div class="time-sm">6 hrs ago</div>
                    <div class="users-list">
                      <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
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
        <div class="col-3">
          <q-item>
            <q-card class=" my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/1.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Gerry Connect</div></a>
                    <div class="text-subtitle2">Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.</div>

                    <div class="q-pt-none flex justify-between align-center">
                      <div class="time-sm">Just Now</div>
                      <div class="users-list">
                          <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
                              </div>
                          </div>
                      </div>
                    </div>
                </q-card-section>
            </q-card>
          </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/2.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Bingo</div></a>
                    <div class="text-subtitle2">Eleifend ultricies nam mauris non facilisis.</div>

                    <div class="q-pt-none flex justify-between align-center">
                        <div class="time-sm">2 hrs ago</div>
                        <div class="users-list">
                          <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
                              </div>
                          </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/3.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Skinopathy</div></a>
                    <div class="text-subtitle2">Etiam condimentum leo arcu posuere vitae, quis.</div>
                    <div class="q-pt-none flex justify-between align-center">
                      <div class="time-sm">4 hrs ago</div>
                        <div class="users-list">
                          <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
                              </div>
                          </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#">
                  <img src="~assets/images/4.png" />
                </a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Angry Birds</div></a>
                    <div class="text-subtitle2">Ac nulla hendrerit diam, scelerisque fusce lacus sed.</div>

                <div class="q-pt-none flex justify-between align-center">
                    <div class="time-sm">6 hrs ago</div>
                    <div class="users-list">
                      <div class="user-item">
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-1.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-2.png" alt="" class="rounded-circle">
                              </div>
                              <div class="avatar pull-up">
                                <img src="~assets/images/user-33.png" alt="" class="rounded-circle">
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
        <div class="col-3">
          <q-item>
            <q-card class=" my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/1.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">VHA Home HealthCare</div></a>
                    <div class="text-subtitle2">VHA Home HealthCare (VHA) is a not-for-profit charitable organization that helps ...</div>
                </q-card-section>
            </q-card>
          </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/2.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Helping Hands HealthCare</div></a>
                    <div class="text-subtitle2">Providing professional healthcare personnel to Canadian hospitals since1997...</div>
                </q-card-section>
            </q-card>
        </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#"><img src="~assets/images/3.png" /></a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Skinopathy</div></a>
                    <div class="text-subtitle2">Artificial intelligence that can be used by physicians, nurses, and patients to pre-screen for skin cancers...</div>
                </q-card-section>
            </q-card>
        </q-item>
        </div>
        <div class="col-3">
          <q-item>
            <q-card class="  my-card no-shadow card-app">
                <a href="#">
                  <img src="~assets/images/4.png" />
                </a>

                <q-card-section>
                    <a href="#"><div class="text-h6">Canadian Assn of Retired People</div></a>
                    <div class="text-subtitle2">CARP advocates for financial security and better access to healthcare for older adults...</div>
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
export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      slide: ref('style'),
      navPos: ref('top')
    }
  },
  components: {
    // SlideHeader
  }
})
</script>
