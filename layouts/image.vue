<script setup>
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client/layoutHelper.ts'

const props = defineProps({
    image: String,
    imageFilter: String,
    imageTransform: String,
    textColor: String,
    color: String,
    colorOpacity: {
        type: Number,
        default: 0.75,
    },
})

const style = computed(() => {
    const vars = {};      
    
    vars['--color'] = props.color ? props.color : 'transparent';
    vars['--color-opacity'] = props.image ? props.colorOpacity : 1;
    vars['--text-color'] = props.textColor ? props.textColor : props.image ? 'white' : 'inherit';

    // Set image and image-filter
    if (props.image) {
        vars['--image'] = `url("${resolveAssetUrl(props.image)}")`
        if (props.imageFilter) {
            vars['--image-filter'] = props.imageFilter;
        }
        if (props.imageTransform) {
            vars['--image-transform'] = props.imageTransform;
        }
    }

    return vars
})
</script>

<template>
    <div class="slidev-layout image" :style="style">
        <slot />
    </div>
</template>
