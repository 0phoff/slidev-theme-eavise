<script setup>
import DefaultLayout from './default.vue';

const props = defineProps({
    columnWidth: String,
    rowHeight: String,
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
    --column-width: v-bind('props.columnWidth');
    --row-height: v-bind('props.rowHeight');
}
</style>