(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  name: "breakpoint",
  content: {
    card_header: "<h3>Break Points</h3>",
    card_body: {
      p1: {
        type: "paragraph",
        content:
          "Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.",
      },

      p2: {
        type: "paragraph",
        content: "Bootstrap have six default breakpoints",
      },

      t1: {
        type: "table",
        content: `
        <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Class</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-Small</td>
              <td><em>None</em></td>
              <td>&lt;576px</td>
            </tr>
            <tr>
              <td>Small</td>
              <td><code>sm</code></td>
              <td>≥576px</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td><code>md</code></td>
              <td>≥768px</td>
            </tr>
            <tr>
              <td>Large</td>
              <td><code>lg</code></td>
              <td>≥992px</td>
            </tr>
            <tr>
              <td>Extra large</td>
              <td><code>xl</code></td>
              <td>≥1200px</td>
            </tr>
            <tr>
              <td>Extra extra large</td>
              <td><code>xxl</code></td>
              <td>≥1400px</td>
            </tr>
          </tbody>
        `
      },
      
      c1:{
        type:"code",
        content:`
        <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
            Column
          <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
            Column
          <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
          <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
            Column
          <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      }
    },
  },
};

/*
`
    <p>
          Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.
          </p>
         <p>
          Bootstrap have six default breakpoints
         </p>
         <table class="table">
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Class</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-Small</td>
              <td><em>None</em></td>
              <td>&lt;576px</td>
            </tr>
            <tr>
              <td>Small</td>
              <td><code>sm</code></td>
              <td>≥576px</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td><code>md</code></td>
              <td>≥768px</td>
            </tr>
            <tr>
              <td>Large</td>
              <td><code>lg</code></td>
              <td>≥992px</td>
            </tr>
            <tr>
              <td>Extra large</td>
              <td><code>xl</code></td>
              <td>≥1200px</td>
            </tr>
            <tr>
              <td>Extra extra large</td>
              <td><code>xxl</code></td>
              <td>≥1400px</td>
            </tr>
          </tbody>
        </table>
    `,
    code_block: `
    <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
        Column
      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
        Column
      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
        Column
      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
    `,
*/

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
// fetching functions
const {create_card, create_title, create_paragraph, create_code, create_table} = require("./functions/functions")

console.log(create_card());

let breakpoint_content = require("./card_content/breakpoint_content");

let cards = [];

cards.push(breakpoint_content);

// fetching the main content area where cards will go
const main_content_area = document.querySelector("#maincontent");

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










/*
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
  new_card_header.setAttribute("data-bs-target", `#${breakpoint_content.name}`);
  let new_card_body = new_card.querySelector("[card-body]");
  new_card_body.setAttribute("id", breakpoint_content.name);
  let code_container_body = code_container.querySelector("[code-content]");

  new_card_header.innerHTML = breakpoint_content.content.card_header;
  // new_card_body.innerHTML =
  // breakpoint_content.card_body;

  code_container_body.innerHTML = breakpoint_content.content.code_block;

  new_card_body.appendChild(code_container);

  main_content_area.appendChild(new_card);
}
*/

},{"./card_content/breakpoint_content":1,"./functions/functions":2}]},{},[3]);
