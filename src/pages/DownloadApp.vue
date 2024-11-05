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
    height="500px"
    class="text-white mt-3"
    >
    <template v-slot:navigation-icon="{ active, onClick }">
        <q-btn
        v-if="active"
        class="rectanger-icon active"
        flat
        round
        dense
        @click="onClick"
        />
        <q-btn v-else class="rectanger-icon" flat round dense @click="onClick" />
    </template>
    <q-carousel-slide
        name="slide1"
        class="column no-wrap flex-center"
        img-src="~assets/images/seniorCare.jpg"
    >
        <div class="container text-center">
        <div class="slide--our-mission-content">
            <div class="om-content">
            <div class="title-slide">Our Mission:</div>
            <p>
                To empower older adults to maintain their independence and engage
                fully with their families and communities.
            </p>
            <p>
                With the Service Hub for Seniors, older adults can not only stay
                connected with loved ones but also access vital services that
                enrich their daily lives. We believe in supporting the holistic
                well-being of older adults, making it easier for them to thrive in
                their communities.
            </p>
            </div>
        </div>
        </div>
    </q-carousel-slide>
    <q-carousel-slide
        name="slide2"
        class="column no-wrap flex-center"
        img-src="~assets/images/senior-services.jpg"
    >
        <div class="container text-center">
        <div class="slide--our-mission-content">
            <div class="om-content">
            <p>
                Service Hub for Seniors: Empowering Older Adults with Relevant
                Services Access a curated selection of services tailored
                specifically to their needs and interests.
            </p>
            <p>
                Older adults can easily discover and connect with local resources,
                including healthcare services, transportation options, meal
                delivery, and social activities that enhance their quality of
                life.
            </p>
            </div>
        </div>
        </div>
    </q-carousel-slide>
    <q-carousel-slide
        name="slide3"
        class="column no-wrap flex-center"
        img-src="~assets/images/non-home-banner.jpg"
    >
        <div class="container text-center">
        <div class="slide--our-mission-content">
            <div class="om-content">
            <div class="title-slide">Featured Partner:</div>
            <p>"insert partner description text here"</p>
            </div>
        </div>
        </div>
    </q-carousel-slide>
    <q-carousel-slide
        name="slide4"
        class="column no-wrap flex-center"
        img-src="~assets/images/Senior-Care.jpg"
    >
        <div class="container text-center">
        <div class="slide--our-mission-content">
            <div class="om-content">
            <div class="title-slide">Featured App:</div>
            <p>
                Gerry Connect is an easy and simple way for older adults to stay
                connected with their loved ones. Our specially designed
                application makes video calls a breeze, ensuring that distance or
                other challenges never stand in the way of meaningful connections
            </p>
            </div>
        </div>
        </div>
    </q-carousel-slide>
    </q-carousel>
    <div class="download-hero">
        <div class="container">
            <div class="content-landing">
                <div class="lastest-app mb-65 row">
                <div class="col col-md-12 col-xs-12 q-item">
                    <div class="download-content-center">
                        <div class="title-download-center text-blue-primary">
                            Get Gerry Connect for you, family, friends, and caregivers
                        </div>
                        <img src="~assets/images/screen-download.png" class="mt-50" />
                        <div class="title-download-center text-blue-primary mt-50 mb-30">
                            Gerry Connect Companion App
                        </div>
                        <q-list class="flex justify-between align-center">
                            <q-item to="#">
                                <img src="~assets/images/ch-play.png" />
                            </q-item>
                            <q-item to="#">
                                <img src="~assets/images/app-store.png" />
                            </q-item>
                        </q-list>
                    </div>
                </div>
                <div class="col col-md 12 col-xs-12 q-item">
                    <div class="dl-item-section">
                        <div class="title-4">Connect to those you love with easy, fast and secure virtual visits</div>
                        <div class="title-5 font-weight-light my-4">Through virtual visits, Gerry Connect strengthens social connection for older adults with their family and friends regardless of distance, lockdowns or other life challenges.</div>
                    </div>
                    <div class="dl-item-section">
                        <div class="title-4">What does Gerry Connect offer?</div>
                        <ul class="my-4">
                            <li><div class="title-5">Unlimited video calls for each older adult to 9 contacts</div></li>
                            <li><div class="title-5">UEmail support</div></li>
                            <li><div class="title-5">UGroup video calls</div></li>
                            <li><div class="title-5">UAbility to leave video messages</div></li>
                            <li><div class="title-5">UAbility to share photos, videos and YouTube links</div></li>
                            <li><div class="title-5">UAbility to “drop in” via audio and/or video</div></li>
                        </ul>
                    </div>
                    <div class="dl-item-section">
                        <div class="title-4">What will you need to use Gerry Connect?</div>
                        <ul class="my-4">
                            <li><div class="title-5 mb-30"><strong>For you, family, friends and caregivers</strong> - A mobile device to install the <strong>Gerry Connect</strong> app onto. This app is for you, family, friends, and caregivers. See FAQ for device specifications</div></li>
                            <li><div class="title-5 mb-30"><strong>For older adults</strong> - An Android tablet or Apple iOS iPad to install the <strong>Gerry Connect for Older Adults</strong> app onto. See FAQ for device specifications</div></li>
                            <li><div class="title-5"><strong>For everyone</strong> - A WiFi connection</div></li>
                            <li><div class="title-5 mb-30"><strong>For everyone</strong> - An account on Google Play or the Apple App Store to download these apps</div></li>
                        </ul>
                    </div>
                </div>
                </div>
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
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      slide: ref('slide1'),
      navPos: ref('top')
    }
  },
  components: {
    // SlideHeader
  }
})
</script>
