---
transition: fade
theme: ./

author: Tanguy Ophoff
image: https://images.unsplash.com/photo-1522943854798-7ea1c5464eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80
imageFilter: blur(3px) saturate(1.5)
---

# Eavise Theme
### Created With Love

---

# Default Layout

This is the default slide layout !  
We can control the color of the slide, by setting the `color` option.

If you want a smaller header banner, you can use different `<h# />` tags.  
Alternatively, if you do not want a banner, you can either omit a slide title or place everything under the `::content::` slot.

- alpha
- beta
- charlie

---
color: var(--kul-blue-400)
---

### Content Slot

::content::

We use the `::content::` slot of the default layout  
so that we can place our slide content entirely in the white area of the slide.  
This makes it easier to style the content with eg. grid or flexbox.

Did you notice we changed the color of the slide and the size of the header ?

#### Components
<div class="flex-(~ row justify-around) w-full mt-5">
  <IconEavise height="50px" />
  <LogoEavise height="50px" />
  <LogoEaviseKUL height="50px" />
</div>

<style>
  :deep(.slot-content) {
    @apply flex-(~ col items-center justify-center) text-center -mt-14;
  }
</style>


---
layout: section
number: 1
image: https://images.unsplash.com/photo-1544636112-21c984350985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
image-filter: grayscale(75%)
color-opacity: 0.6
---

# Special Layouts

---
layout: image
image: "https://images.unsplash.com/photo-1682547094964-dd621debede3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
color: var(--slidev-theme-primary)
---

# Image Slide

<style>
  .slidev-layout {
    @apply flex flex-col flex-items-center flex-justify-center;
  }
</style>
