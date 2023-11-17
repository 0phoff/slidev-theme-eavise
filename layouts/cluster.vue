<script setup>
import DefaultLayout from './default.vue';

const props = defineProps({
    columns: String,
    rows: String,
    contentClass: String,
})
</script>

<template>
    <DefaultLayout :contentClass="`cluster ${contentClass}`">
        <template #default>
            <slot />
        </template>

        <template #content>
            <slot name="content" />
        </template>
    </DefaultLayout>
</template>

<style scoped>
.slidev-layout {
    --columns: v-bind('props.columns');
    --rows: v-bind('props.rows');
}
</style>