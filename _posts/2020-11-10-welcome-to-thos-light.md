---
layout: post
title: welcome to tho's light
description: introducing tho's light jekyll theme
author: cakers
---
## introduction

Tho's Light is a [Jekyll](http://jekyllrb.com) theme that places content centrally, with a simple sidebar to the left and (for posts) a clickable table of contents fixed to the right.

Tho's Light was developed specifically for [In Pursuit of his Own Hat](https://inpursuitofhisownhat.github.io), a blog about technically faffing.

## customising

Although the whole theme can be customised with knowledge of CSS, some sections are easier to customise than others because their configuration is set using CSS variables at the top of the [thos-hat.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css) file.

### colours

```css
--background-panel-color: #2e3337;
--background-page-color: #222629;
--heading-text-color: #86c232;
--highlight-color: #86c232;
--highlight-color-dark: #62892f;
--body-text-color: #d0d2d2;
--side-panel-tag-line-color: #d0d2d2;
--inline-code-color: #b294bb;
--block-quote-text-color: #9095a0;
--block-quote-border-color: #9095a0;
```

### font
  
  The default is Montserrat from Google Fonts. If you want to add a different font you will probably need to adjust the link found in `head.html` include file

  ```html
  <link rel="stylesheet" 
   href="https://fonts.googleapis.com/css?family=Montserrat:400,400italic,700|Inconsolata:400,400">
  ```

## sidebar

The sidebar contains four sections.

<dl>
  <dt>title</dt>
  <dd>Configurable in <code>_config.yml</code></dd>

  <dt>tagline</dt>
  <dd>Configurable in <code>_config.yml</code></dd>

  <dt>navigable list of pages in site</dt>
  <dd>Builds automatically from all site pages based on the <code>page</code> layout</dd>

  <dt>contact links</dt>
  <dd>Based on information in <code>_config.yml</code> (email, github, linkedin) </dd>
  <dd>Although these are plain text by default, they can easily be changed to font-awesome icons by editing the <code>sidebar.html</code> include file and adding the necessary references to the <code>head.html</code> include.</dd>
</dl>

## table of contents

For pages using the `post` layout a table of contents panel will appear to the right. This panel will remain fixed in position as the page scrolls down.

Contents are built using a small JavaScript  which scans the post for all `H2` and `H3` tags and builds the relevant links: [toc.js]({{ site.url }}{{ site.baseurl }}site-assets/js/toc.js)

The indents and formats are set using the relevant CSS classes in [thos-hat.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css).

## phone screens

If viewing on a narrow tablet or phone the layout will switch to a top-down format. 

The minimum width for this is set at the bottom of [thos-hat.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css).

```css
@media (max-width: 48rem) {
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
    html {
        overflow: scroll; /* Hide scrollbars */
    }
    .flexbox-container {
        max-width: 48rem;
    ...
    ...
    ...
```

## browser support

The theme has been created only with modern browsers in mind and very little consideration for older ones, so if you want something that will run on IE 5.5 you're out of luck.

## more examples

### pop-out

<div class="pop-out">
  Here, the text has been formatted using the `pop-out` class which allows you to highlight important points in your text.
</div>

### block-quote

> “There are very few moments in a man's existence when he experiences so much ludicrous distress, or meets with so little charitable commiseration, as when he is in pursuit of his own hat.”

### html

- **bold text**, use `<strong>`.
- *italics*, use `<em>`.
- Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use `<abbr>` tag.
- Citations, like <cite>&mdash; Charles Dickens</cite>, should use `<cite>`.
- <del>Strikethrough text</del>
- Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`.

## code blocks

Code is displayed using the default [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme) theme by Chris Kempson, but a number of other themes have been included and these can be set in the `_config.yml` file.

```yaml
syntax-rouge-theme: tomorrow-night
                    # base16.dark
                    # base16.monokai.dark
                    # base16.solarized.dark
                    # gruvbox.dark
                    # molokai
                    # monokai
                    # thankful_eyes
                    # tulip
```

### c

```c
#include <stdio.h>

void main(int argc, char** argv) {
  
  /* Let's say hello to everyone */
  printf("Hello World!");

}
```
### python
```python
def hello_world():
  return "Hello World\n"

# Now run the function
if __name__ == "__main__":
  print(hello_world())
```
## images

Can be adjusted in [thos-hat.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css) by modifying the `img` tag.

![placeholder](http://placehold.it/800x400 "Large")
![placeholder](http://placehold.it/400x200 "Medium")
![placeholder](http://placehold.it/200x200 "Small")

## tables

Use standard HTML or markdown style for tables.

<table>
  <thead>
    <tr>
      <th>band member</th>
      <th>sing</th>
      <th>play guitar</th>
      <th>play drums</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>john</td>
      <td>yes</td>
      <td>yes</td>
      <td>no</td>
    </tr>
    <tr>
      <td>paul</td>
      <td>yes</td>
      <td>yes</td>
      <td>no</td>
    </tr>
    <tr>
      <td>george</td>
      <td>yes</td>
      <td>yes</td>
      <td>no</td>
    </tr>
    <tr>
      <td>ringo</td>
      <td>yes</td>
      <td>yes</td>
      <td>no</td>
    </tr>
  </tbody>
</table>

## download the theme

The theme can be downloaded at the <a href="https://github.com/inpursuitofhisownhat/thos-light">GitHub repository</a>
