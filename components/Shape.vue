<script setup>
import { computed } from 'vue'
import Block from './Block.vue';

const props = defineProps({
    size: String,
    type: String,
    aspect: Number,
    horizontalClip: Number,
    verticalClip: Number,
})

const styles = computed(() => {
    switch (props.type) {
        case 'hexagon':
        case 'hexagon-horizontal':
            return {
                aspect: 1.1547,
                horizontalClip: 0.25,
                verticalClip: 0.5,
            };

        case 'hexagon-vertical':
            return {
                aspect: 1 / 1.1547,
                horizontalClip: 0.5,
                verticalClip: 0.25,
            };

        case 'octagon':
            return {
                aspect: 1,
                horizontalClip: 0.2929,
                verticalClip: 0.2929,
            };

        case 'rhombus':
            return {
                aspect: 1,
                horizontalClip: 0.5,
                verticalClip: 0.5,
            };

        default:
            return {
                aspect: props.aspect,
                horizontalClip: props.horizontalClip,
                verticalClip: props.verticalClip,
            };
    }
});
</script>

<template>
    <Block class="shape">
        <slot />
    </Block>
</template>

<style scoped>
.shape {
    --shape-size: v-bind('props.size');
    --shape-aspect: v-bind('styles.aspect');
    --shape-horizontal-clip: calc(clamp(0, v-bind('styles.horizontalClip'), 0.5) * 100%);
    --shape-vertical-clip: calc(clamp(0, v-bind('styles.verticalClip'), 0.5) * 100%);
}
</style>