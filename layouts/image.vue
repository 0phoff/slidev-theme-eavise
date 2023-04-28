<script setup>
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client/layoutHelper.ts'
import { colorMap } from '../logic/colorHelper';

const props = defineProps({
    image: String,
    imageFilter: String,
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
    vars['--text-color'] = props.image ? 'white' : 'inherit';

    // Set image and image-filter
    if (props.image) {
        vars['--image'] = `url("${resolveAssetUrl(props.image)}")`
        if (props.imageFilter) {
            vars['--image-filter'] = props.imageFilter;
        }
    }

    // Set text-color
    if (props.image) {
        vars['--text-color'] = 'white';
    } else if (props.color) {
        let color = props.color.startsWith('var(') ? parseCSSVar(props.color) : props.color;
        color = props.color.startsWith('#') ?
            hexToRgb(props.color) : props.color.startsWith('rgb(') ?
            rgbToRgb(props.color) : nameToRgb(props.color)
        ;

        if (color) {
            const brightness = luminance(...color);
            console.log(brightness)
            vars['--text-color'] = brightness > 0.5 ? 'black' : 'white';
        }
    }

    return vars
})

function parseCSSVar(variable) {
    window.getComputedStyle(document.querySelector('#page-root')).getPropertyValue(variable);
}

function hexToRgb(hex) {
  const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

function rgbToRgb(rgb) {
    const result = /^rgb\(([\d]{3})([\d]{3})([\d]{3})\)$/i.exec(hex);
    return result ? [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])] : null;
}

function nameToRgb(name) {
    return colorMap[name];
}

function luminance(r, g, b) {
    const RED = 0.2126;
    const GREEN = 0.7152;
    const BLUE = 0.0722;
    const GAMMA = 2.4;

    const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA);
    });

  return a[0] * RED + a[1] * GREEN + a[2] * BLUE;
}
</script>

<template>
    <div class="slidev-layout image" :style="style">
        <slot />
    </div>
</template>