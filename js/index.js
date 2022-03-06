// fetching functions
const {
  create_card,
  create_title,
  create_paragraph,
  create_code,
  create_table,
  copy_button_control,
  append_child,
  run_button_control,
} = require("./functions/functions");

// fetching content for cards
let cards = require("./content");

// dom element fetching
// fetching the main content area where cards will go
const main_content_area = document.querySelector("#main_content");
// fetching the code out put area
const code_output_area = document.querySelector(
  "#outputmodal [code-output-area]"
);
// fetching search fields
let search_box = document.querySelectorAll("input[search]");

// fetching templates
// fetching the card template
const card_template = document.querySelector("#card_template");
// fetching title template
const title_template = document.querySelector("#title_template");
// fetching paragraph template
const paragraph_template = document.querySelector("#paragraph_template");
// fetching the code container template
const code_template = document.querySelector("#code_template");
// fetching table template
const table_template = document.querySelector("#table_template");

// iterate over the content and add add cards to display
cards.forEach((e) => {
  // extract the newly created card and save
  e.element = insert_card(e.name, e.content.card_header, e.content.card_body);
});

// add event listents to the input boxes
search_box.forEach((item) => {
  item.addEventListener("input", (e) => {
    // extract the input and turn into lowercase
    let value = e.target.value.toLowerCase();

    // iterate over the card
    cards.forEach((card) => {
      // extract card text content and turn into lower case
      let card_content = card.element.textContent.toLowerCase();

      // if the string is in the card then make it visible
      // else applt display none to it
      let isVisible = card_content.includes(value);
      card.element.classList.toggle("d-none", !isVisible);
    });
  });
});

// function inserts card to the display area
// arguments
// name of the card for the toggle to work, this name will become the includes
// card header content
//  and the card body contents in the format specified in the *_content.js files
function insert_card(name, card_header_content, card_body_content) {
  // create a new card
  let new_card = create_card(card_template);

  // get the card header
  let new_card_header = new_card.querySelector("[card-header]");

  // get the card body
  let new_card_body = new_card.querySelector("[card-body]");

  // set the card header
  new_card_header.innerHTML = card_header_content;

  // set data-bs-target attribute on card header
  // so the collapsing of body will work
  new_card_header.setAttribute("data-bs-target", `#${name}`);

  // setting an id to the body for the collapsing to target innerHTML
  new_card.querySelector(".collapse").setAttribute("id", name);

  for (data in card_body_content) {
    let value = card_body_content[data].content;
    let type = card_body_content[data].type;

    if (type == "title") {
      let new_title = create_title(title_template, value);
      append_child(new_card_body, new_title);
    } else if (type == "paragraph") {
      let new_paragraph = create_paragraph(paragraph_template, value);
      append_child(new_card_body, new_paragraph);
    } else if (type == "table") {
      let new_table = create_table(table_template, value);
      append_child(new_card_body, new_table);
    } else if (type == "code") {
      let new_code_element = create_code(code_template, value);

      // adding functionality to copy button
      let copy_button = new_code_element.querySelector("[copy-button]");
      copy_button_control(copy_button);

      // adding functionality to run button
      let run_button = new_code_element.querySelector("[run-button]");
      run_button_control(run_button, code_output_area);

      append_child(new_card_body, new_code_element);
    }
  }

  // adding event listener

  // scroll to the header position when clicked
  new_card_header.addEventListener("click", (e) => {
    setTimeout(() => {
      // e.clientY == the point of click w.r.t the document
      // e.target.getBoundingClientRect().top == position of the header from the top
      // element_click_pos == position of click w.r.t the header
      // let element_click_pos = e.clientY - e.target.getBoundingClientRect().top;
      // let scroll_distance = e.clientY - element_click_pos;
      let scroll_distance = e.target.getBoundingClientRect().top - 10;
      window.scrollBy({
        top: scroll_distance,
        behaviour: "smooth",
      });
    }, 390);
  });

  // add the card to the display area
  append_child(main_content_area, new_card);

  return new_card;
}
