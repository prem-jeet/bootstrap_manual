let content_breakpoint = require("./card_content/breakpoint_content");







const card_template = document.querySelector("#cardtemplate")
const main_content_area = document.querySelector("#maincontent")

for(let i=0 ;i <3; i++){
  let new_card = card_template.content.cloneNode(true).children[0]

let new_card_header = new_card.querySelector("[card-header]")
let new_card_body = new_card.querySelector("[card-body]")

new_card_header.innerHTML = content_breakpoint.card_header;
new_card_body.innerHTML = content_breakpoint.card_body + content_breakpoint.code_block;

main_content_area.appendChild(new_card)
}





