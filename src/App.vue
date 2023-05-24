<template>
    <app-header />
    <router-view class="py-14" />
    <app-footer />
</template>
<script setup lang="ts">
import AppHeader from "@/components/header.vue";
import AppFooter from "@/components/footer.vue";
</script>
