<template>
  <base-header></base-header>
  <div class="flex justify-center content-center py-2">
    <div class="grid grid-cols-2 max-w-3xl justify-center content-center gap-3">
      <button class="rounded bg-stone-400 hover:bg-stone-500 transition-colors focus:ring-rose-400 focus:ring-1 ring-offset-1" v-for="(tab, idx) in tabs" :key="idx" @click="setActiveTab(tab)"> {{ tab }} </button>
      <div v-if="isLoading">LOADING!</div>
      <info-card v-else :data=activeTabData[activeTab] :key="activeTabData"></info-card>
    </div>
</div>
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
  // TODO: make this an async fetch('/my/backend/url') tog grab data from back-end and add error handling
  console.debug('Fetching data...')

  //but for right now
  activeTabData['About Me'] = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  activeTabData['Contact Me'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  isLoading.value = false;
  console.debug('Success')
}

//grab all data to populate the tab data
onMounted(() => getTabData());


</script>

<style>
</style>