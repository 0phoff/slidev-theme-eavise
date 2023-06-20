<script setup>
import ImageLayout from './image.vue';
import LogoEaviseKUL from '../components/LogoEaviseKUL.vue';

const props = defineProps({
    image: String,
    imageFilter: String,
    imageTransform: String,
    textColor: {type: String, default: 'white'},
    color: {type: String, default: 'var(--slidev-theme-primary)'},
    colorOpacity: Number,

    author: String,
    date: {
        type: String,
        default() {
          const date = new Date();
          const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
          const m = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
          const d = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
          return `${d} ${m} ${y}`;
        },
    },
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
        class="cover"
    >
        <slot />

        <div class="meta">
            {{ author }}
            <br />
            {{ date }}
        </div>

        <div class="logo">
            <LogoEaviseKUL />
        </div>
    </ImageLayout>
</template>