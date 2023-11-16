<script setup>
import { computed } from 'vue';
import { resolveAssetUrl } from '@slidev/client/layoutHelper.ts';

const props = defineProps({
    image: String,
    imageFilter: String,
    imageTransform: String,
    imageOpacity: Number,
    color: String,
    colorOpacity: Number,
})

const image = computed(() => props.image ? `url("${resolveAssetUrl(props.image)}")` : '');
const colorOpacity = computed(() => props.colorOpacity ? props.colorOpacity : props.image ? 0.75 : 1);
</script>

<template>
    <div class="slidev-layout bg-image bg-overlay" :class="props.image ? 'initial:text-white' : ''">
        <slot />
    </div>
</template>

<style scoped>
.slidev-layout {
    --image: v-bind('image');
    --image-filter: v-bind('props.imageFilter');
    --image-transform: v-bind('props.imageTransform');
    --image-opacity: v-bind('props.imageOpacity');

    --overlay-color: v-bind('props.color');
    --overlay-opacity: v-bind('colorOpacity');
}
</style>