<script setup>
import { computed } from 'vue';
import ImageLayout from './image.vue';

const props = defineProps({
    number: Number,
    color: String,
})

const colorComputed = computed(() => props.color ? props.color : $slidev.configs?.style == 'minimal' ? undefined : 'var(--slidev-theme-primary)');
</script>

<template>
    <ImageLayout :color="colorComputed" :class="[number ? 'numbered-section' : '', $slidev.configs?.style == 'minimal' ? '' : 'initial:text-white']">
        <slot />
        <div class="number">{{ number }}</div>
    </ImageLayout>
</template>

<style scoped>
.slidev-layout {
    @apply grid grid-cols-16 grid-rows-12 grid-gap-[20px];
    font-size: 1.75em;

    &.numbered-section > :where(h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child) {
        grid-area: 1 / 5 / span 10 / span 11;
        place-self: end left;
    }

    & > :where(h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child) {
        grid-area: 1 / 1 / span 6 / span 16;
        place-self: end center;
        text-align: center;
        padding: 0 4px;
        margin: 0;
        font-weight: 400;
        line-height: 75%;
        letter-spacing: 0.01em;
        text-transform: none;
        font-variant: none;
    }

    .number {
        @apply font-serif;

        grid-area: 4 / 2 / span 7 / span 3;
        place-self: end center;
        font-size: 400px;
        font-weight: 400;
        line-height: 65%;
        letter-spacing: 0.01em;
    }
}
</style>