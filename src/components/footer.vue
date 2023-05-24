<template>
    <footer class="py-5 bg-dark text-light">
        <div class="container">
            <p class="flex items-center gap-2">
                Made with <span class="text-red-500 text-xl">❤</span> Develoepr
                <a href="https://www.facebook.com/" target="_blank"
                    ><b>{{ developerName }}</b></a
                >
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const developerName = ref<string>("Abdallah Shaltout");
</script>
