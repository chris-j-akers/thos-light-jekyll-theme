      const table_of_contents_div_id = "toc-panel"
      const table_of_contents_panel_item_class = "toc-panel-item"
      const table_of_contents_panel_item_h2_class = "toc-panel-item-h2"
      const table_of_contents_panel_item_h3_class = "toc-panel-item-h3"

      var toc_panel = document.getElementById('toc-panel')
      var post_content = document.getElementById('post')

      baseUrl = "{{ page.url }}"

      var headings = post_content.querySelectorAll("h2, h3")

      for (var i = 0; i < headings.length; i++) {
        toc_item_link = document.createElement("a")
        toc_item_link.title = headings[i].innerHTML
        toc_item_link.href = baseUrl + '#' + headings[i].id
        toc_item_link_text = document.createTextNode(headings[i].innerHTML)
        toc_item_link.appendChild(toc_item_link_text)

        switch (headings[i].nodeName) {
          case 'H3':
            toc_item_link.classList.add(table_of_contents_panel_item_class,
              table_of_contents_panel_item_h3_class)

            break
          case 'H2':
            toc_item_link.classList.add(table_of_contents_panel_item_class,
              table_of_contents_panel_item_h2_class)
            break
        }

        /* A bit hacky, but we wrap each link up in a DIV so flexbox orders them correctly,
           but as it's just a vanilla div, nothing else, just add it programatically rather than
           put it into css */
           
        toc_item_div = document.createElement('DIV')
        toc_item_div.appendChild(toc_item_link)
        toc_panel.appendChild(toc_item_div)
      }