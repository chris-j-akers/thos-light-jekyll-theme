---
layout: post
title: "tho's light: a jekyll theme"
description: an overview of the 'tho's light' jekyll theme
author: cakers
---
## introduction

Tho's Light is a [Jekyll](http://jekyllrb.com) theme that, by default, places content centrally with a simple sidebar to the left and (for posts) a clickable table of contents fixed to the right. 

![]({{ site.url }}{{ site.baseurl }}site-assets/images/2020-11-10-blog-post-example.png)

For narrow screens content is re-stacked vertically for easier reading.

![]({{ site.url }}{{ site.baseurl }}site-assets/images/2020-11-10-blog-post-example-phone-small.png)

\
Tho's Light was developed specifically for [cakers.io](https://cakers.io) and made available under the MIT licence. It's provided 'as is' because I'm clearly not a professional website developer, I just wanted to create the blog theme myself. 

Feel free to fork and fix where needs be and maybe even let me know!

## download the theme

The theme can be downloaded at the <a href="https://github.com/chris-j-akers/thos-light">GitHub repository</a>

## customising

Although the whole theme can be customised with some knowledge of CSS, some sections are easier to customise than others because they're configured with CSS variables at the top of the [thos-light.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css) file.

### colours

![]({{ site.url }}{{ site.baseurl }}site-assets/images/2020-11-10-configurable-colours.png)

All colour variables are defined at the top of [thos-light.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css).

```css
--background-panel-color: #2e3337;
--background-page-color: #222629;
--background-code-color: #222629;
--code-lineno-colour: #62892f;
--heading-text-color: #86c232;
--highlight-color: #86c232;
--highlight-color-dark: #62892f;
--body-text-color: #d0d2d2;
--side-panel-tag-line-color: #d0d2d2;
--inline-code-color: #cc6666;
--block-quote-text-color: #d0d2d2;
--block-quote-border-color: #d0d2d2;
```

### font
  
The default fonts are [Montserrat](https://fonts.google.com/specimen/Montserrat) for the body and bolded [Inconsolata](https://fonts.google.com/specimen/Inconsolata) for code. Both are freely available from Google Fonts. If you want to add a different font you will need to adjust the link found in `_includes/head.html`.

  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400italic,700|Inconsolata:400,400">
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
  <dd>Although these are plain text by default, they can easily be changed to font-awesome icons by editing the <code>sidebar.html</code> include file and adding the necessary references to the <code>head.html</code> include.</dd> If required, the font-size can be adjusted in the `.side-panel-contacts` css class.
</dl>

## table of contents

For pages using the `post` layout a table of contents panel will appear to the right. This panel will remain fixed in position as the page scrolls down.

Contents are built automatically using a small JavaScript  which scans the post for all `H2` and `H3` tags and builds the relevant links: [toc.js]({{ site.url }}{{ site.baseurl }}site-assets/js/toc.js)

The indents and formats are set using the relevant CSS classes in [thos-light.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css).

## phone screens

If viewing on a narrow tablet or phone the layout will switch to a top-down format. 

The max width for this setting is set at the bottom of [thos-light.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css).

```css
@media (max-width: 68rem)
```

## browser support

The theme has been created only with modern browsers in mind and very little consideration for older ones, so if you want something that will run on IE 5.5 you're out of luck.

## more examples

### pop-out

<div class="pop-out">
  Here, the text has been formatted using the `pop-out` class which allows you to highlight important points.
</div>

### block-quote

> “There are very few moments in a man's existence when he experiences so much ludicrous distress, or meets with so little charitable commiseration, as when he is in pursuit of his own hat.” - CHARLES DICKENS, PICKWICK PAPERS

### general html

A number of html tags have been catered for, but more can easily be added by adjusting the CSS in [thos-light.css]({{ site.url }}{{ site.baseurl }}site-assets/css/thos-light.css). If an html tag isn't there, it's just because I haven't used it, yet.

- **bold text**, use `<strong>`.
- *italics*, use `<em>`.
- Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use `<abbr>` tag.

## code blocks

Code is displayed using the default [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme) theme by Chris Kempson, but a number of other themes taken from [Rouge](https://github.com/rouge-ruby/rouge) have been included and these can be set in the `_config.yml` file.

By default line numbers are enabled (see `_config.yml`). Their font colour is set in the CSS variable: `--code-lineno-colour: #62892f`;

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

### c example

```c
#include <stdio.h>

void main(int argc, char** argv) {
  printf("Hello World!\n");
}
```
### c++ example
```c++
#include <iostream>

int main() {
    std::cout << "Hello World!" << endl;
    return 0;
}
```
### python example
```python
def hello_world():
  return "Hello World\n"

if __name__ == "__main__":
  print(hello_world())
```