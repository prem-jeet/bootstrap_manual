(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const template = document.querySelector("#cardtemplate")
const maincontent = document.querySelector("#maincontent")

let card = template.content.cloneNode(true).children[0]

let card_header = card.querySelector("[card-header]")
let card_body = card.querySelector("[card-body]")


let codeblock = `
<div class="highlight"><pre tabindex="0" class="highlight"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
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
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre></div>
`

card_header.innerHTML = "<h3>Break Points</h3>"

card_body.innerHTML = `
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
    ${codeblock}
`



maincontent.appendChild(card)

},{}]},{},[1]);
