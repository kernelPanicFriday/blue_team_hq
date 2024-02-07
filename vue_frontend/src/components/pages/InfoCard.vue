<template>
    <div class="rounded-lg bg-rose-500 col-span-2">
        <h2>{{data}}</h2>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['data'])
</script>