<script>
  export default {
    inheritAttrs: false,
  }
</script>

<script setup>
import { useAttrs, computed } from 'vue'
import Block from './Block.vue';

const props = defineProps({
    x: Number,
    y: Number,
    size: String,
    type: String,
    aspect: { type: Number, default: 1 },
    horizontalClip: { type: Number, default: 0 },
    verticalClip: {type: Number, default: 0 },
    margin: { String, default: '0px' },
});

const attrs = useAttrs();

const numShapes = computed(() => props.x * props.y - Math.floor(props.y / 2));
const styles = computed(() => {
    let style;

    switch (props.type) {
        case 'hexagon':
        case 'hexagon-horizontal':
            style = {
                aspect: 1.1547,
                horizontalClip: 0.25,
                verticalClip: 0.5,
            };
            break;

        case 'hexagon-vertical':
            style = {
                aspect: 1 / 1.1547,
                horizontalClip: 0.5,
                verticalClip: 0.25,
            };
            break;

        case 'octagon':
            style = {
                aspect: 1,
                horizontalClip: 0.2929,
                verticalClip: 0.2929,
            };
            break;

        case 'rhombus':
            style = {
                aspect: 1,
                horizontalClip: 0.5,
                verticalClip: 0.5,
            };
            break

        default:
            style = {
                aspect: props.aspect,
                horizontalClip: props.horizontalClip,
                verticalClip: props.verticalClip,
            };
    }

    if (style.verticalClip >= 0.5 && style.horizontalClip < 0.5 && style.horizontalClip > 0) {
        style.marginTDelta = '-' + props.margin;
        style.marginHDelta = '1px';
    } else {
        style.marginTDelta = '0px';
        style.marginHDelta = '0px';
    }

    return style;
});

function getBlockAttrs(number) {
    const baseAttrs = {};
    const basePrefix = 'block--';
    const numAttrs = {};
    const numPrefix = `block-${number}--`;

    for (const [key, value] of Object.entries(attrs)) {
        if (key.startsWith(numPrefix)) {
            numAttrs[key.substring(numPrefix.length)] = value;
        }
        else if (key.startsWith(basePrefix)) {
            baseAttrs[key.substring(basePrefix.length)] = value;
        }
    }

    return {...baseAttrs, ...numAttrs};
}

function getFallthroughAttrs() {
    const fallthrough = {};
    const prefix = 'shape-';

    for (const [key, value] of Object.entries(attrs)) {
        if (!key.startsWith(prefix)) {
            fallthrough[key] = value;
        }
    }

    return fallthrough;
}
</script>

<template>
    <div class="shapegrid" v-bind="getFallthroughAttrs()">
        <template v-for="num in numShapes">
            <div class="shape" :class="`shape-${num}`">
                <Block v-bind="getBlockAttrs(num)">
                    <slot :name="`block-${num}`" />
                </Block>
            </div>
        </template>
    </div>
</template>

<style scoped>
.shapegrid {
    --shape-size: v-bind('props.size');
    --shape-aspect: v-bind('styles.aspect');
    --shape-horizontal-clip: calc(clamp(0, v-bind('styles.horizontalClip'), 0.5) * var(--shape-size));
    --shape-vertical-clip: calc(clamp(0, v-bind('styles.verticalClip'), 0.5) * var(--shape-size) / var(--shape-aspect));
    --margin-horizontal: calc(v-bind('props.margin') + (var(--shape-size) - 2 * var(--shape-horizontal-clip)) / 2 + v-bind('styles.marginHDelta'));
    --margin-top: calc(v-bind('props.margin') + v-bind('styles.marginTDelta'));
    --margin-bottom: calc(v-bind('props.margin') - var(--shape-vertical-clip));
    --offset: calc(2 * var(--shape-size) / var(--shape-aspect) + 4 * var(--margin-top) - 2 * v-bind('styles.marginTDelta') - 2 * var(--shape-vertical-clip) - 2px);

    width: calc(v-bind('props.x') * (var(--shape-size) + 2 * var(--margin-horizontal)));
    height: calc(v-bind('props.y') * (var(--shape-size) / var(--shape-aspect) + var(--margin-top) + var(--margin-bottom)) - var(--margin-bottom));
    font-size: 0;

    & > div {
        display: inline-block;
        font-size: 2rem;
        margin-left: var(--margin-horizontal);
        margin-right: var(--margin-horizontal);
        margin-top: var(--margin-top);
        margin-bottom: var(--margin-bottom);
        overflow: hidden;

        & > div {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        float: left;
        width: calc(var(--shape-size) / 2 + var(--margin-horizontal));
        height: calc(v-bind('props.y') * (var(--shape-size) / var(--shape-aspect) + var(--margin-top) + var(--margin-bottom)) + 2px);
        shape-outside: repeating-linear-gradient(#0000 0 calc(var(--offset) - 2px), #000 0 var(--offset));
    }
}
</style>