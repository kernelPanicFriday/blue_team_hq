<template>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h2>{{data}}</h2>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['data'])
</script>