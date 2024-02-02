<template>
    <header class="bg-gray-600">
        <nav>
            <div class="flex flex-auto">
                <a href='#' v-for="(link, idx) in links" :key="idx">{{ link }}</a>
            </div>
        </nav>    
    </header>
</template>

<script setup>
import { reactive } from 'vue';

let links = reactive(['Home', 'Hire me', 'buy me stuff'])

// Need to implement router for these buttons

</script>