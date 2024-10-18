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
</template>
<script setup>
defineOptions({
  name: 'SlideHeader'
})

</script>
