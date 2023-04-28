# slidev-theme-eavise

[![NPM version](https://img.shields.io/npm/v/slidev-theme-eavise?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-eavise)

A [Slidev](https://github.com/slidevjs/slidev) theme for the [EAVISE](www.eavise.be) research group.

## Install

This theme has not yet been pushed to NPMJS.  
In order to use it, you should clone this repository and point your theme configuration to this folder in your `slides.md`.

```yaml
---
theme: /path/to/eavise-theme
---
```

---

## Layouts

### cover
<img alt="cover layout" src="screenshots/01.png" width="30%" />

The cover slide page for starting your presentations.

If the first two elements are `<h# />` tags, they get placed in the center of the screen.
This can be used to set a title and subtitle.

| Property      | Default                     | Description |
|:-------------:|:---------------------------:|:------------|
| author        | undefined                   | Author name. |
| date          | Today's date (DD MMM YYYY)  | Date. |
| image         | undefined                   | Background image (can be url or local file). |
| image-filter  | undefined                   | [CSS filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) which is applied to the image only. |
| color         | var(--slidev-theme-primary) | Color applied on top of the image. Note that it is applied as a CSS `background` and thus can also contain eg. gradients. |
| color-opacity | 0.75                        | Opacity of the color layer (only used if there is an image). |

### default
<img alt="default layout" src="screenshots/02.png" width="30%" />

The default slide layout with a header and footer.

If the first element of the slide is an `<h# />`, it will be placed in the header.  
Additionally, you can place your content in the `::content::` slot, which will take all the remaining space after the title.
This allows you to eg. center content on the page.  
Finally, the `::content::` slot also allows you to use an `<h# />` element without it becoming a preconfigured header block.

| Property      | Default                     | Description |
|:-------------:|:---------------------------:|:------------|
| color         | var(--slidev-theme-primary) | Base color for header and footer. |

### image
<img alt="image layout" src="screenshots/05.png" width="30%" />

A slide with a fullscreen image.

The content in this slide is not positioned.  
We recommend using a `<style />` tag where you can position the content by eg. adding a grid/flexbox to your `.slidev-layout`.

| Property      | Default                     | Description |
|:-------------:|:---------------------------:|:------------|
| image         | undefined                   | Background image (can be url or local file). |
| image-filter  | undefined                   | [CSS filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) which is applied to the image only. |
| color         | undefined                   | Color applied on top of the image. Note that it is applied as a CSS `background` and thus can also contain eg. gradients. |
| color-opacity | 0.75                        | Opacity of the color layer (only used if there is an image). |

### section
<img alt="section layout" src="screenshots/04.png" width="30%" />

A slide to separate sections.

This is a simple image layout, with special positioning for the first element (if it is a `<h# />` tag).  
This allows you to easily create an image slide with a short title.

| Property      | Default                     | Description |
|:-------------:|:---------------------------:|:------------|
| number        | ''                          | Section number. |
| image         | undefined                   | Background image (can be url or local file). |
| image-filter  | undefined                   | [CSS filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) which is applied to the image only. |
| color         | undefined                   | Color applied on top of the image. Note that it is applied as a CSS `background` and thus can also contain eg. gradients. |
| color-opacity | 0.75                        | Opacity of the color layer (only used if there is an image). |


## Components

### IconEavise
The EAVISE icon as an inline SVG.

### LogoEavise
The EAVISE logo as an inline SVG.

### LogoEaviseKUL
The EAVISE + KU Leuven logo as an inline SVG.

---

## Contributing

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate the preview PNG
