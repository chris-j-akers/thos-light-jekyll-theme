---
layout: post
title:  "welcome to tho's light"
date:   2020-11-10 20:25:53 +0000
description: a quick start on the tho's light theme.
---
## introduction

Tho's Light is a dark theme for Jekyll.

It uses few colours (aside from the syntax highlighters), all of which can be modified by adjusting the variables at the top of the css file:

```css
    /* colours */
    --background-panel-color: #2e3337;
    --background-page-color: #222629;
    --heading-text-color: #86c232;
    --highlight-color: #86c232;     /* Used for smaller artefacts */
    --highlight-color-dark: #62892f;
    --body-text-color: #d0d2d2;
    --side-panel-tag-line-color: #d0d2d2;
    --inline-code-color: #b294bb;
    --block-quote-text-color: #9095a0;
    --block-quote-border-color: #9095a0;
```

The font used throughout is Montserrat, freely available from google fonts. It can also be changed by editing the variables at the top of the CSS file.

```css
    /* fonts */
    --body-font-family: Montserrat;
    --heading-font-family: Montserrat;
```

## table of contents
For posts only, an automatically generated table of contents sits to the right which follows you down as you read.

## formatting examples

Below are some examples of html tags used in the theme. All can be modified and more can be added by changing the css file.

### block quote

<blockquote>
The quick, brown fox jumps over the lazy dog. The quick, brown fox jumps over the lazy dog. The quick, brown fox jumps over the lazy dog. 
</blockquote>

### abbreviations

The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.

### tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |


### inline code

Some say `goto` is a dangerous command.

## code snippets

### c

```c
#include <stdio.h>

void main() {

  printf("Hello World!\n");

}
```

### python

```python
print("Hello World!")
```