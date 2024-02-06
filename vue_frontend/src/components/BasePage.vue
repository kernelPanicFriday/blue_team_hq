<template>
  <base-header></base-header>
  <button @click="setActiveCard">click</button>

  <about-me v-if="activeCard=='about_me'"></about-me>
  <info-data v-else></info-data>
</template>

<script setup>
import BaseHeader from './BaseHeader.vue'
import AboutMe from './pages/AboutMe.vue'
import InfoData from './pages/InfoData.vue'
import { ref } from 'vue';

let activeCard = ref('about_me')

function setActiveCard(){
  console.log('clicked')
  if (activeCard.value === 'about_me') {
    activeCard.value = 'info_data'
  } else {
    activeCard.value = 'about_me'
  }
  console.log(activeCard)
}

</script>

<style>
</style>
