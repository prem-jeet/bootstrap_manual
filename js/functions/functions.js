module.exports = {
  // create card
  create_card: () => {
      return card_template.content.cloneNode(true).children[0]
  },
  // if content type == title
  create_title: () => {
    return title_template.content.cloneNode(true).children[0];
  },
  // if content type == paragraph
  create_paragraph: () => {
    return paragraph_template.content.cloneNode(true).children[0];
  },
  // if content type == code
  create_code: () => {
    return code_template.content.cloneNode(true).children[0];
  },
  // if content type == table
  create_table: () => {
    return table_template.content.cloneNode(true).children[0];
  },
};
