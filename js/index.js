let content_breakpoint = require("./card_content/breakpoint_content");

const card_template = document.querySelector("#cardtemplate");
const main_content_area = document.querySelector("#maincontent");
const code_container_template = document.querySelector(
  "#codecontainertemplate"
);

for (let i = 0; i < 1; i++) {
  let new_card = card_template.content.cloneNode(true).children[0];

  let code_container =
    code_container_template.content.cloneNode(true).children[0];

  let new_card_header = new_card.querySelector("[card-header]");
  new_card_header.setAttribute("data-bs-target", `#${content_breakpoint.name}`)
  let new_card_body = new_card.querySelector("[card-body]");
  new_card_body.setAttribute("id", content_breakpoint.name)
  let code_container_body = code_container.querySelector ("[code-content]")


  new_card_header.innerHTML = content_breakpoint.content.card_header;
  // new_card_body.innerHTML =
    // content_breakpoint.card_body;

    code_container_body.innerHTML = content_breakpoint.content.code_block

    new_card_body.appendChild(code_container)

  main_content_area.appendChild(new_card);
}
