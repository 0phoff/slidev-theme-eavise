<script setup>
import ImageLayout from './image.vue';

const props = defineProps({
    image: String,
    imageFilter: String,
    imageTransform: String,
    textColor: {type: String, default: 'white'},
    color: {type: String, default: 'var(--slidev-theme-primary)'},
    colorOpacity: Number,

    number: Number,
})
</script>

<template>
    <ImageLayout
        :image="props.image"
        :imageFilter="props.imageFilter"
        :imageTransform="props.imageTransform"
        :textColor="props.textColor"
        :color="props.color"
        :colorOpacity="props.colorOpacity"
        :class="['section', number ? 'numbered-section' : '']"
    >
        <slot />
        <div class="number">{{ number }}</div>
    </ImageLayout>
</template>