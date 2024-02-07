<template>
    <header class="bg-rose-500">
        <nav>

            <div class="flex justify-end gap-2">
                    <router-link class="hover:text-stone-500 transition-colors" v-for="link in links" :key="link.url" :to="{path: link.path}">
                        {{ link.name }}
                    </router-link>
            </div>
        </nav>    
    </header>
</template>

<script setup>
import { reactive } from 'vue';
import {RouterLink} from 'vue-router'
    // turn thesse into object with so we can link.name and link.url implement router
let links = reactive([{'name': 'Home', 'path': '/home'}, {'name': 'Hire Me', 'path': '/hire-me'}, {'name': 'Donate', 'path': '/home'}])
</script>