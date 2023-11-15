<script setup>
import DefaultLayout from './default.vue';

const props = defineProps({
    contentClass: String,
})
</script>

<template>
    <DefaultLayout :contentClass="`row ${contentClass}`">
        <template #default>
            <slot />
        </template>

        <template #content>
            <slot name="content" />
        </template>
    </DefaultLayout>
</template>