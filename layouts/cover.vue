<script setup>
import { computed } from 'vue';
import ImageLayout from './image.vue';
import LogoEaviseKUL from '../components/LogoEaviseKUL.vue';

const props = defineProps({
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
    color: String,
    logoColor: String,
})

const colorComputed = computed(() => props.color ? props.color : $slidev.configs?.style == 'minimal' ? undefined : 'var(--slidev-theme-primary)');
const logoColorComputed = computed(() => {
    if (props.logoColor) {
        return props.logoColor == 'undefined' ? undefined : props.logoColor;
    }
    if ($slidev.configs?.style == 'minimal') {
        return undefined;
    }
    return 'white';
});
</script>

<template>
    <ImageLayout :color="colorComputed" :class="$slidev.configs?.style == 'minimal' ? '' : 'initial:text-white'">
        <slot />

        <div class="meta">
            {{ author }}
            <br />
            {{ date }}
        </div>

        <div class="logo">
            <slot name="logo" />
            <LogoEaviseKUL :color="logoColorComputed" />
        </div>
    </ImageLayout>
</template>

<style scoped>
.slidev-layout {
    @apply grid grid-cols-16 grid-rows-12 gap-[20px];
    font-size: 1.75em;

    &> :where(h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child) {
        grid-area: 1 / 1 / span 5 / span 16;
        place-self: end center;
        text-align: center;
        padding: 0 0.2em 0.1em;
        font-weight: 400;
        letter-spacing: 0.01em;
        text-transform: none;
        font-variant: none;
    }

    &> :where(h1:nth-child(2), h2:nth-child(2), h3:nth-child(2), h4:nth-child(2), h5:nth-child(2), h6:nth-child(2)) {
        @apply font-sans;

        grid-area: 6 / 1 / span 3 / span 16;
        place-self: start center;
        text-align: center;
        padding: 0 1.75em;
        margin-top: -1rem;
        font-weight: 100;
        letter-spacing: -0.01em;
    }

    .meta {
        grid-area: 10 / 2 / span 2 / span 7;
        place-self: end start;
        margin-bottom: -25px;
        font-weight: 100;
        line-height: 1.5;
        font-size: 1.25em;
    }

    .logo {
        @apply flex items-center justify-end gap-3;

        grid-area: 10 / 8 / span 2 / span 8;
        place-self: end;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0px 0px -20px;

        &> :slotted(*) {
            min-width: 1rem;
            max-width: 60%;
            flex-grow: 0;
            flex-shrink: 6;
        }

        &>*:last-child {
            min-width: 25%;
            max-width: 60%;
            flex-grow: 0;
            flex-shrink: 5;
        }
    }
}
</style>