      
      /* 
       * we need to remove any # links from the end of the url or the toc might not work if 
       * someone has returned to the page either using the back-button or using a url with
       * hash in it directly.
      */
      
      history.pushState(null, null, ' ')

      /* toc will be a pseudo bullet-list so need to state what to use as each bullet */
      const toc_item_bullet = '-'

      const toc_div_id = "toc-panel"
      const toc_panel_item_class = "toc-panel-item"
      const toc_panel_item_h2_class = "toc-panel-item-h2"
      const toc_panel_item_h3_class = "toc-panel-item-h3"

      var toc_panel = document.getElementById('toc-panel')
      var post_content = document.getElementById('post')

      baseUrl = window.location.href

      /* only interested in h2, h3 headings as h1 is used for page titles.*/
      var headings = post_content.querySelectorAll("h2, h3")
      
      var toc_item_link

      for (var i = 0; i < headings.length; i++) {

        toc_item_link = document.createElement("a")
        toc_item_link.title = headings[i].innerHTML
        toc_item_link.href = baseUrl + '#' + headings[i].id
        toc_item_link_text = document.createTextNode(toc_item_bullet + ' ' + headings[i].innerHTML)
        toc_item_link.appendChild(toc_item_link_text)

        switch (headings[i].nodeName) {
          case 'H2':
            toc_item_link.classList.add(toc_panel_item_class,
              toc_panel_item_h2_class)
            break
          case 'H3':
            toc_item_link.classList.add(toc_panel_item_class,
              toc_panel_item_h3_class)
            break
        }
        /*
         * Flexibox needs the items wrapped in DIV tags to order them correctly
        */ 
        toc_item_div = document.createElement('DIV')
        toc_item_div.appendChild(toc_item_link)
        toc_panel.appendChild(toc_item_div)
      }