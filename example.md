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
layout: section
number: 1
image: https://images.unsplash.com/photo-1544636112-21c984350985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
image-filter: grayscale(75%)
color-opacity: 0.6
---

# Layouts


---

# Default

This is the default slide layout !  
We can control the color of the slide, by setting the `color` option.

If you want a smaller header banner, you can use different `<h# />` tags.  
Alternatively, if you do not want a banner, you can either omit a slide title or place everything under the `::content::` slot.


---
color: var(--kul-blue-200)
content-class: flex-(~ col items-center justify-center) text-center gap-10 mb-14 px-5
---

### Content Slot
::content::

We used the `::content::` slot of the default layout  
so that we can place our slide content entirely in the white area of the slide.  
This makes it easier to style the content with eg. grid or flexbox.  
You can style the content div in your slides with the `:deep(.slot-content)` CSS selector or by adding UnoCSS classes to the `content-class` argument of the slide.

<v-click>

Did you notice we changed the color of the slide and the size of the header ?

</v-click>


---
layout: image
image: "https://images.unsplash.com/photo-1682547094964-dd621debede3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
color: var(--slidev-theme-primary)
---

# Image
This layout allows you to set a background image and overlay color.
Look at the documentation for all of the different arguments  
Image slides have no `::content::` slot, as there is no header/footer.

<v-click>

Note that the `cover` and `section` slides are modified image slides and thus takes the same arguments as well!

</v-click>

<style>
  .slidev-layout {
    @apply text-center;
  }
</style>


---
layout: column
content-class: gap-8 p-8 items-start text-1s
---

# Column
::content::

<IconEavise />

<div class="col-span-3">

The column layout is a default variant that allows you to create different columns.
Each element in the `::content::` slot will be its own column.
By default each column takes an equal amount, but you can change individual columns by applying `col-span-X`.

The CSS grid gets added to `.slot-content`, so you can further style it in your slides to match what you want.
The default style centers the content of each column horizontally and vertically.

```html
<style>
  :deep(.slot-content) {
    /* Add gap between columns, padding and `align-items: start`. */
    @apply gap-8 p-8 items-start;
  }
</style>
```

</div>

<style>
  p {
    @apply mb-5;
  }
</style>


---
layout: row
content-class: gap-2 px-8 text-1s text-center
---

# Row
::content::

The row layout is a default layout variant that allows you to create different rows.
Each element in the `::content::` slot will be its own row.
By default each row takes an equal amount, but you can change individual columns by applying `row-span-X`.

This layout gets created with a CSS grid, which gets added to `.slot-content`.
The default style centers the content of each row horizontally and vertically with `place-items: center`, but you can override this by styling your slide:

<div class="row-span-2">

```md
---
layout: row
content-class: gap-2 px-8 text-center
---

# Title
::content::

This row layout has a gap between rows, horizontal padding and centered text.
```

</div>

<style>
  p {
    @apply my-5;
  }
</style>


---
layout: stack
content-class: p-10 mb-5 gap-5 text-center
---

# Stack
::content::

This is another default layout variant that uses flexbox to stack all of its children.
Compared to the `row` layout, the height of each row is variable and defined by the height of the element itself.

By default it applies `align-items: center` and `justify-content: center`, but these can easily be overriden if necessary.
You can also change the orientation of the stack by applying the `flex-row` class.

<Block color='var(--kul-blue-200)' class="rounded-3 text-2s h-full stack" v-click>

**HINT**  
Each of the default layout variants is also available as a CSS class that can be used on any of your elements!
This means you can simply use the *stack* class to center content inside of an element, as is done here.

</Block>


---
layout: cluster
column-width: 300px
content-class: p-15 gap-5 text-center
---

# Cluster
::content::

<Block class="w-full h-full stack">
Grid places all off the children from the content slot in an automatic grid.
</Block>

<Block class="w-full h-full stack">
If the grid is not wide enough to place all of its children, it will automatically wrap and create a row!  
</Block>

<Block class='w-full h-full pile row-span-2'>

<div v-click-hide>

All columns have an equal width, which is defined by the `column-width` argument.  
The width passed here is actually a minimum; if there is more space for the columns to grow, they will.

</div>

<div v-after>

The same goes for rows with the `row-height` argument, though it is usually not necessary to give a value, as the default works pretty well.

</div>

</Block>

<Block color="var(--kul-blue-200)" class="w-full h-full stack col-span-2">

You can change the place allocated to a child with the *col-span-X* and *row-span-X* classes.

</Block>

---
layout: pile
---

# Pile
This is another default layout variant.

All children under `::content::` get placed on top of each other (centered).  
One usecase for this layout is to "uncover" parts of an image whilst clicking through your slide.
Firstly, create different versions of your image where different parts are hidden and then place all of your images in a `v-clicks` element inside of `::content::`.

For simplicity, this is demonstrated with inline SVGs instead of images below.
We added a border around the SVGs.

::content::

<svg width="320" height="100">
</svg>

<v-clicks>

<svg width="320" height="100">
  <rect x="0" y="0" width="100" height="100" style="fill: var(--kul-blue-300)" />
</svg>

<svg width="320" height="100">
  <rect x="110" y="0" width="100" height="100" style="fill: var(--kul-blue-400)" />
</svg>

<svg width="320" height="100">
  <rect x="220" y="0" width="100" height="100" style="fill: var(--kul-blue-500)" />
</svg>

</v-clicks>

<style>
  p { @apply text-center mt-3 text-1s; }
  svg:first-child { outline: 2px solid var(--kul-orange-400); }
</style>


---
layout: section
number: 2
image: https://images.unsplash.com/photo-1557701197-2f99da0922dd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
image-filter: grayscale(75%)
color-opacity: 0.6
---

# Components


---
layout: stack
content-class: flex-row gap-25 mb-14
---

# Icons
::content::

<IconEavise height="50px" />
<LogoEavise height="50px" />
<LogoEaviseKUL height="50px" />


---
layout: stack
content-class: gap-5 py-5
---

# Block
::content::

<Block>
This is a block.
</Block>

<Block color="var(--kul-orange-400)" class="rounded-4 p-5 text-center">
This is another block with a different color and some UnoCSS styling.
</Block>

<Block
  class="p-10 text-center h-[300px] w-[90%] stack"
  image="https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
>

Similarly to the image layout, a block can have a background image and a (transparent) background overlay color.

</Block>
