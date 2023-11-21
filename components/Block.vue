<script setup>
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client/layoutHelper.ts'

const props = defineProps({
    image: String,
    imageFilter: String,
    imageTransform: String,
    imageOpacity: Number,
    color: { type: String, default: 'var(--slidev-theme-primary)' },
    colorOpacity: Number,
})

const image = computed(() => props.image ? `url("${resolveAssetUrl(props.image)}")` : '');
const colorOpacity = computed(() => props.colorOpacity ? props.colorOpacity : props.image ? 0.75 : 1);
</script>

<template>
    <div class="initial:text-white initial:text-center initial:p-3" :class="{'bg-image': image, 'bg-overlay': color && color.value != 'transparent'}">
        <slot />
    </div>
</template>

<style scoped>
div {
    --image: v-bind('image');
    --image-filter: v-bind('props.imageFilter');
    --image-transform: v-bind('props.imageTransform');
    --image-opacity: v-bind('props.imageOpacity');

    --overlay-color: v-bind('props.color');
    --overlay-opacity: v-bind('colorOpacity');

    &> :deep(*:first-child) {
        padding-top: 0;
        margin-top: 0;
    }

    &> :deep(*:last-child) {
        padding-bottom: 0;
        margin-bottom: 0;
    }
}
</style>