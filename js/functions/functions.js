module.exports = {
  // create card
  create_card: function () {
      return card_template.content.cloneNode(true).children[0]
  },
  // if content type == title
  create_title: (value) => {
    let title = title_template.content.cloneNode(true).children[0];
    title.innerText = value;
    return title;
  },

  // if content type == paragraph
  create_paragraph: (value) => {
    let paragraph =  paragraph_template.content.cloneNode(true).children[0];
    paragraph.innerHTML = value;
    return paragraph
  },
  // if content type == code
  create_code: (value) => {
    let code = code_template.content.cloneNode(true).children[0];
    let code_display_area= code.querySelector("[code-display-area]")
    code_display_area.innerHTML = value;
    return code
  },
  // if content type == table
  create_table: (value) => {
    let table =  table_template.content.cloneNode(true).children[0];
    table.innerHTML = value;
    return table;
  },
  append_child: (parent, child) => {
        parent.appendChild(child)
  }
};
