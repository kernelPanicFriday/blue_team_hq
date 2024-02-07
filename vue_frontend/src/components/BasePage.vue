<template>
  <base-header></base-header>
  <button v-for="(tab, idx) in tabs" :key="idx" @click="setActiveTab(tab)"> {{ tab }} </button>
  <div v-if="isLoading">LOADING!</div>
  <info-card v-else :data=activeTabData[activeTab] :key="activeTabData"></info-card>
</template>

<script setup>
import BaseHeader from './BaseHeader.vue';
import InfoCard from './pages/InfoCard.vue';
import { reactive, ref, onMounted } from 'vue';

const tabs = ref(['About Me', 'Contact Me']);
const activeTabData = reactive({});
const activeTab = ref(tabs.value[0]);
const isLoading = ref(true);

function setActiveTab(tab){
  console.log('clicked', tab)
  activeTab.value = tab
  console.log(activeTab.value)
}

function getTabData(){
  // TODO: make this an async fetch('/my/backend/url') adn add error handling
  console.debug('Fetching data...')

  //but for right now
  activeTabData['About Me'] = 'Hey this is a bunch of data about me'
  activeTabData['Contact Me'] = 'Here is how you can contact me '
  isLoading.value = false;
  console.debug('Success')
}

//grab all data to populate the tab data
onMounted(() => getTabData());


</script>

<style>
</style>