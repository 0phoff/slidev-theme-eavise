<script setup>
import ImageLayout from './image.vue';

const props = defineProps({
    image: String,
    imageFilter: String,
    color: {type: String, default: 'var(--slidev-theme-primary)'},
    colorOpacity: Number,
    textColor: {type: String, default: 'white'},

    number: Number,
})
</script>

<template>
    <ImageLayout
    :image="props.image"
    :imageFilter="props.imageFilter"
    :color="props.color"
    :colorOpacity="props.colorOpacity"
    :textColor="props.textColor"
    :class="['section', number ? 'numbered-section' : '']"
    >
        <slot />
        <div class="number">{{ number }}</div>
    </ImageLayout>
</template>