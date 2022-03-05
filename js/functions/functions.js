module.exports = {
  // create card
  create_card: function (template) {
    return template.content.cloneNode(true).children[0];
  },
  // if content type == title
  create_title: (template, value) => {
    let title = template.content.cloneNode(true).children[0];
    title.innerText = value;
    return title;
  },

  // if content type == paragraph
  create_paragraph: (template, value) => {
    let paragraph = template.content.cloneNode(true).children[0];
    paragraph.innerHTML = value;
    return paragraph;
  },
  
  // if content type == code
  create_code: (template, value) => {
    let code = template.content.cloneNode(true).children[0];
    let code_display_area = code.querySelector("[code-display-area]");
    code_display_area.innerHTML = value;
    return code;
  },
  
  // if content type == table
  create_table: (template, value) => {
    let table = template.content.cloneNode(true).children[0];
    table.innerHTML = value;
    return table;
  },


  // run button control
  run_button_control: (element, output_area) => {
    let code = element.parentNode.querySelector("[code-display-area]");
    code = code.textContent;
    output_area.innerHTML = code;
  },

  // copy button logic
  copy_button_control: (element) => {
    element.addEventListener("click", () => {
      // select the code display area
      let code_display_area = element.parentNode.querySelector(
        "[code-display-area]"
      );

      // extract the text from the code display area
      let copied_text = code_display_area.textContent;

      // copy the text to the clipboard
      navigator.clipboard.writeText(copied_text);

      // change the button from dark to success
      element.classList.remove("btn-outline-dark");
      element.classList.add("btn-success");
      

      // reset the button from success to dark
      setTimeout(() => {
        // rechange the button from success to dark
        element.classList.remove("btn-success");
        element.classList.add("btn-outline-dark");
      }, 800);
    });
  },

  // appends the child to the parent
  append_child: (parent, child) => {
    parent.appendChild(child);
  },
};
