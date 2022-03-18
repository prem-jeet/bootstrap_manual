(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  name: "breakpoint",
  content: {
    card_header: "Break Points",
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

      tb1: {
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
        `,
      },
    },
  },
};


},{}],2:[function(require,module,exports){
module.exports = {
  name: "columns",
  content: {
    card_header: "Columns",
    card_body: {
      p1: {
        type: "paragraph",
        content: `Modify columns with a handful of options for alignment, ordering, and offsetting thanks to our <b><i>flexbox grid system<i></b>.`,
      },
      p2: {
        type: "paragraph",
        content: `<b><i>Flexbox</i></b> means we have options for changing individual columns and modifying groups of columns at the row level. You choose how columns grow, shrink, or otherwise change.`,
      },
      p3: {
        type: "paragraph",
        content: `The hierarchy of Bootstrap’s grid goes from container to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.`,
      },
      title1: {
        type: "title",
        content: `Alignment`,
      },
      subtext1: {
        type: "subtext",
        content:
          "Use flexbox alignment utilities to vertically and horizontally align columns.",
      },
      subtitle1: {
        type: "subtitle",
        content: `Vertical alignment (applying at row level)`,
      },
      subtext2: {
        type: "subtext",
        content: `<code>.align-items-{*}</code> &rarr; {start, center, end}.`,
      },
      code1: {
        type: "code",
        content: `<pre ><code class="language-html" data-lang="html">
<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row align-items-start"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row align-items-center"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row align-items-end"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>`,
      },
      subtitle2: {
        type: "subtitle",
        content: `Vertical alignment (applying at col level)`,
      },
      subtext3: {
        type: "subtext",
        content: `<code>.align-self-{*}</code> &rarr; {start, center, end}.`,
      },
      code2: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col align-self-start"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col align-self-center"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col align-self-end"</span><span class="p">&gt;</span>
      One of three columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle3: {
        type: "subtitle",
        content: "Horizontal alignment",
      },
      subtext4: {
        type: "subtext",
        content: `<code>.justify-content-{*}</code> &rarr; {start, center, end, around, between, evenly}.`,
      },
      code3: {
        type: "code",
        content: `
        <pre ><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row justify-content-start"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row justify-content-center"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row justify-content-end"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row justify-content-around"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row justify-content-between"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row justify-content-evenly"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>
      One of two columns
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle4: {
        type: "subtitle",
        content: "Column wrapping",
      },
      subtext5: {
        type: "subtext",
        content:
          "If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.",
      },
      code4: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-9"</span><span class="p">&gt;</span>.col-9<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-4"</span><span class="p">&gt;</span>.col-4<span class="p">&lt;</span><span class="nt">br</span><span class="p">&gt;</span>Since 9 + 4 = 13 <span class="ni">&amp;gt;</span> 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-6"</span><span class="p">&gt;</span>.col-6<span class="p">&lt;</span><span class="nt">br</span><span class="p">&gt;</span>Subsequent columns continue along the new line.<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `,
      },
      title2: {
        type: "title",
        content: "Reordering",
      },
      subtitle5: {
        type: "subtitle",
        content: "Order classes",
      },
      subtext6: {
        type: "subtext",
        content: `Use <code>.order-{*}</code> classes for controlling the <b>visual order</b> of your content. These classes are responsive, so you can set the order by breakpoint <b>(e.g., .order-1.order-md-2)</b>. Includes support for 1 through 5 across all six grid tiers.`,
      },
      code5: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      First in DOM, no order applied
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col order-5"</span><span class="p">&gt;</span>
      Second in DOM, with a larger order
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col order-1"</span><span class="p">&gt;</span>
      Third in DOM, with an order of 1
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtext7: {
        type: "subtext",
        content:
          "There are also responsive <code>.order-first</code> and <code>.order-last</code> classes that change the order of an element by applying <b>order: -1</b> and <b>order: 6</b>, respectively. These classes can also be intermixed with the numbered <code>.order-*</code> classes as needed.",
      },
      code6:{
        type:"code",
        content:`
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col order-last"</span><span class="p">&gt;</span>
      First in DOM, ordered last
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      Second in DOM, unordered
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col order-first"</span><span class="p">&gt;</span>
      Third in DOM, ordered first
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      },
      title3:{
        type:"title",
        content: "Offsetting columns "
      },
      subtext8:{
        type: "subtext",
        content: "You can offset grid columns in two ways: responsive <code>.offset-</code> grid classes and margin utilities."
      },
      subtitle6:{
        type:"subtitle",
        content: "Offset classes"
      },
      subtext9:{
        type: "subtext",
        content:"Move columns to the right using <code>.offset-*</code> classes. These classes increase the left margin of a column by <b>*</b> columns. For example, <code>.offset-4</code> moves <code>.col-4</code> over four columns. <code>offset-*</code> can be combined with bootstrap breakpoints{sm, md etc} to make them responsive."
      },
      code7:{
        type:"code",
        content:`
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-4"</span><span class="p">&gt;</span>.col-md-4<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-4 offset-md-4"</span><span class="p">&gt;</span>.col-md-4 .offset-md-4<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-3 offset-md-3"</span><span class="p">&gt;</span>.col-md-3 .offset-md-3<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-3 offset-md-3"</span><span class="p">&gt;</span>.col-md-3 .offset-md-3<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-6 offset-md-3"</span><span class="p">&gt;</span>.col-md-6 .offset-md-3<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      },
      subtitle7:{
        type: "subtitle",
        content: "Margin utilities"
      },
      subtext10:{
        type:"subtext",
        content: "You can use margin utilities like <code>.me-auto</code> to force sibling columns away from one another."
      },
      code8:{
        type: "code",
        content:`
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-4"</span><span class="p">&gt;</span>.col-md-4<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-4 ms-auto"</span><span class="p">&gt;</span>.col-md-4 .ms-auto<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-3 ms-md-auto"</span><span class="p">&gt;</span>.col-md-3 .ms-md-auto<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-md-3 ms-md-auto"</span><span class="p">&gt;</span>.col-md-3 .ms-md-auto<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-auto me-auto"</span><span class="p">&gt;</span>.col-auto .me-auto<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-auto"</span><span class="p">&gt;</span>.col-auto<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      }
    },
  },
};

},{}],3:[function(require,module,exports){
module.exports = {
  name: "gridsystem",
  content: {
    card_header: "Grid System",
    card_body: {
      p1: {
        type: "paragraph",
        content: `Powerful mobile-first flexbox grid to build layouts of all shapes and
                sizes using twelve column system and six default responsive tiers
                xtra-small(default, no class prefix required), sm, md, lg, xl, xxl`,
      },
      p2: {
        type: "paragraph",
        content: `Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.`,
      },
      code1: {
        type: "code",
        content: `
          <pre tabindex="0" ><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
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
      },
      subtext1: {
        type: "subtext",
        content: `
          The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent <code>.container</code>.
          `,
      },
      p3:{
        type: "paragraph",
        content: "There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., <code>col-4</code> spans four)."
      },
      subtext2: {
        type: "subtext",
        content: `
        <strong>Rows are wrappers for columns.</strong> Each column has horizontal <code>padding</code> (called a gutter) for controlling the space between them. This <code>padding</code> is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side.
          `,
      },
      title1:{
        type: "title",
        content: "Gutters"
      },
      p4: {
        type: "paragraph",
        content: "Gutters are the padding between  columns, used to responsively space and align content in the Bootstrap grid system."
      },
      subtext3:{
        type:'subtext',
        content: "Gutter classes are available across all breakpoints. Change horizontal gutters with <code>.gx-*</code> classes, vertical gutters with <code>.gy-*</code>, or all gutters with <code>.g-*</code> classes. <code>.g-0</code> is also available to remove gutters. {*} &rarr; {1,2,3,4,5} &larr; same as points available for marging and padding classes "
      },
      subtitle1:{
        type: "subtitle",
        content: "Horizontal gutter"
      },
      code2:{
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row gx-5"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
     <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>
     Custom column padding
     <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>
      Custom column padding
      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      },
      subtitle2:{
        type: "subtitle",
        content: "Vertical gutter"
      },
      code3: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container overflow-hidden"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row gy-5"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-6"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Custom column padding<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-6"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Custom column padding<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-6"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Custom column padding<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col-6"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Custom column padding<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      },
      title2:{
        type: "title",
        content: "Row columns"
      },
      p5: {
        type: "paragraph",
        content: "Use the responsive <code>.row-cols-*</code> classes to quickly set the number of columns that best render your content and layout. Whereas normal <code>.col-*</code> classes apply to the individual columns (e.g., <code>.col-md-4</code>), the row columns classes are set on the parent <code>.row</code> as a shortcut. With <code>.row-cols-auto</code> you can give the columns their natural width."
      },
      code4:{
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row row-cols-1 row-cols-sm-2 row-cols-md-4"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>Column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>Column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>Column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>Column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      },
      subtext4:{
        type: "subtext",
        content: "Gutter classes can also be added to row columns. In the following example, we use responsive row columns and responsive gutter classes."
      },
      code5:{
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"container"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"row row-cols-2 row-cols-lg-5 g-2 g-lg-3"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"col"</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"p-3 border bg-light"</span><span class="p">&gt;</span>Row column<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        `
      }
    },
  },
};


},{}],4:[function(require,module,exports){
module.exports = {
  name: "typography",
  content: {
    card_header: "Typography",
    card_body: {
      title1: {
        type: "title",
        content: "Headings",
      },
      table1: {
        type: "table",
        content: `
        
  <thead>
  <tr>
    <th>Heading</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <code>&lt;h1&gt;&lt;/h1&gt;</code>
    </td>
    <td><span class="h1">h1. Bootstrap heading</span></td>
  </tr>
  <tr>
    <td>
      <code>&lt;h2&gt;&lt;/h2&gt;</code>
    </td>
    <td><span class="h2">h2. Bootstrap heading</span></td>
  </tr>
  <tr>
    <td>
      <code>&lt;h3&gt;&lt;/h3&gt;</code>
    </td>
    <td><span class="h3">h3. Bootstrap heading</span></td>
  </tr>
  <tr>
    <td>
      <code>&lt;h4&gt;&lt;/h4&gt;</code>
    </td>
    <td><span class="h4">h4. Bootstrap heading</span></td>
  </tr>
  <tr>
    <td>
      <code>&lt;h5&gt;&lt;/h5&gt;</code>
    </td>
    <td><span class="h5">h5. Bootstrap heading</span></td>
  </tr>
  <tr>
    <td>
      <code>&lt;h6&gt;&lt;/h6&gt;</code>
    </td>
    <td><span class="h6">h6. Bootstrap heading</span></td>
  </tr>
</tbody>

        `,
      },
      subtext1: {
        type: "subtext",
        content: `<code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.`,
      },
      code1: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"h1"</span><span class="p">&gt;</span>h1. Bootstrap heading<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"h2"</span><span class="p">&gt;</span>h2. Bootstrap heading<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"h3"</span><span class="p">&gt;</span>h3. Bootstrap heading<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"h4"</span><span class="p">&gt;</span>h4. Bootstrap heading<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"h5"</span><span class="p">&gt;</span>h5. Bootstrap heading<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"h6"</span><span class="p">&gt;</span>h6. Bootstrap heading<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle1: {
        type: "subtitle",
        content: `Customizing headings`,
      },
      subtext2: {
        type: "subtext",
        content:
          "use the <code>.text-muted</code> class to create small secondary heading text",
      },
      code2: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">h3</span><span class="p">&gt;</span>
  Fancy display heading
  <span class="p">&lt;</span><span class="nt">small</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-muted"</span><span class="p">&gt;</span>With faded secondary text<span class="p">&lt;/</span><span class="nt">small</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">h3</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle2: {
        type: "subtitle",
        content: "Display headings",
      },
      subtext3: {
        type: "subtext",
        content:
          "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.",
      },
      code3: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">h1</span> <span class="na">class</span><span class="o">=</span><span class="s">"display-1"</span><span class="p">&gt;</span>Display 1<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">h1</span> <span class="na">class</span><span class="o">=</span><span class="s">"display-2"</span><span class="p">&gt;</span>Display 2<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">h1</span> <span class="na">class</span><span class="o">=</span><span class="s">"display-3"</span><span class="p">&gt;</span>Display 3<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">h1</span> <span class="na">class</span><span class="o">=</span><span class="s">"display-4"</span><span class="p">&gt;</span>Display 4<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">h1</span> <span class="na">class</span><span class="o">=</span><span class="s">"display-5"</span><span class="p">&gt;</span>Display 5<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">h1</span> <span class="na">class</span><span class="o">=</span><span class="s">"display-6"</span><span class="p">&gt;</span>Display 6<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
</code></pre>
        `,
      },
      title2: {
        type: "title",
        content: "Lead",
      },
      subtext4: {
        type: "subtext",
        content: "Make a paragraph stand out by adding <code>.lead</code>.",
      },
      code4: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>
This is a normal paragraph.
<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"lead"</span><span class="p">&gt;</span>
  This is a lead paragraph. It stands out from regular paragraphs.
<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      title3: {
        type: "title",
        content: "Inline text elements",
      },
      subtext5: {
        type: "subtext",
        content: "Styling for common inline HTML5 elements.",
      },
      code5: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>You can use the mark tag to <span class="p">&lt;</span><span class="nt">mark</span><span class="p">&gt;</span>highlight<span class="p">&lt;/</span><span class="nt">mark</span><span class="p">&gt;</span> text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">del</span><span class="p">&gt;</span>This line of text is meant to be treated as deleted text.<span class="p">&lt;/</span><span class="nt">del</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">s</span><span class="p">&gt;</span>This line of text is meant to be treated as no longer accurate.<span class="p">&lt;/</span><span class="nt">s</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">ins</span><span class="p">&gt;</span>This line of text is meant to be treated as an addition to the document.<span class="p">&lt;/</span><span class="nt">ins</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">u</span><span class="p">&gt;</span>This line of text will render as underlined.<span class="p">&lt;/</span><span class="nt">u</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">small</span><span class="p">&gt;</span>This line of text is meant to be treated as fine print.<span class="p">&lt;/</span><span class="nt">small</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">strong</span><span class="p">&gt;</span>This line rendered as bold text.<span class="p">&lt;/</span><span class="nt">strong</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;&lt;</span><span class="nt">em</span><span class="p">&gt;</span>This line rendered as italicized text.<span class="p">&lt;/</span><span class="nt">em</span><span class="p">&gt;&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtext6: {
        type: "subtext",
        content: "Beware that those tags should be used for semantic purpose:",
      },
      subtext7: {
        type: "subtext",
        content: `
        <ul>
<li><code>&lt;mark&gt;</code> represents text which is marked or highlighted for reference or notation purposes.</li>
<li><code>&lt;small&gt;</code> represents side-comments and small print, like copyright and legal text.</li>
<li><code>&lt;s&gt;</code> represents element that are no longer relevant or no longer accurate.</li>
<li><code>&lt;u&gt;</code> represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.</li>
</ul>
        `,
      },
      subtext8: {
        type: "subtext",
        content:
          "If you want to style your text, you should use the following classes instead:",
      },
      subtext9: {
        type: "subtext",
        content: `
        <ul>
<li><code>.mark</code> will apply the same styles as <code>&lt;mark&gt;</code>.</li>
<li><code>.small</code> will apply the same styles as <code>&lt;small&gt;</code>.</li>
<li><code>.text-decoration-underline</code> will apply the same styles as <code>&lt;u&gt;</code>.</li>
<li><code>.text-decoration-line-through</code> will apply the same styles as <code>&lt;s&gt;</code>.</li>
</ul>
        `,
      },
      title4: {
        type: "title",
        content: "Text Utility",
      },
      par1: {
        type: "paragraph",
        content:
          "common text utilities to control alignment, wrapping, weight, and more.",
      },
      subtitle3: {
        type: "subtitle",
        content: "Text alignment",
      },
      subtex10: {
        type: "subtext",
        content:
          "Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
      },
      code6: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-start"</span><span class="p">&gt;</span>Start aligned text on all viewport sizes.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-center"</span><span class="p">&gt;</span>Center aligned text on all viewport sizes.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-end"</span><span class="p">&gt;</span>End aligned text on all viewport sizes.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>

<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-sm-center"</span><span class="p">&gt;</span>Start aligned text on viewports sized SM (small) or wider.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-md-center"</span><span class="p">&gt;</span>Start aligned text on viewports sized MD (medium) or wider.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-lg-center"</span><span class="p">&gt;</span>Start aligned text on viewports sized LG (large) or wider.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-xl-center"</span><span class="p">&gt;</span>Start aligned text on viewports sized XL (extra-large) or wider.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle4: {
        type: "subtitle",
        content: "Text wrapping and overflow",
      },
      subtext11: {
        type: "subtext",
        content: `Wrap text with a <code>.text-wrap</code> class. Prevent text from wrapping with a <code>.text-nowrap</code> class.`,
      },
      code7: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"badge bg-primary text-wrap"</span> <span class="na">style</span><span class="o">=</span><span class="s">"width: 6rem;"</span><span class="p">&gt;</span>
  This text should wrap.
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-nowrap bg-info mt-2"</span> <span class="na">style</span><span class="o">=</span><span class="s">"width: 8rem;"</span><span class="p">&gt;</span>
  This text should overflow the parent.
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>

        `,
      },
      subtitle5: {
        type: "subtitle",
        content: "Text transform",
      },
      subtext12: {
        type: "subtext",
        content:
          "Transform text in components with text capitalization classes.",
      },
      code8: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-lowercase"</span><span class="p">&gt;</span>Lowercased text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-uppercase"</span><span class="p">&gt;</span>Uppercased text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-capitalize"</span><span class="p">&gt;</span>capitalized text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle6: {
        type: "subtitle",
        content: "Font size",
      },
      subtext13: {
        type: "subtext",
        content:
          "Quickly change the font-size of text. While the heading classes <code>.h1-.h6</code> apply <code>font-size</code>, <code>font-weight</code>, and <code>line-height</code>, these utilities only apply <code>font-size</code>. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.",
      },
      code9: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fs-1"</span><span class="p">&gt;</span>.fs-1 text<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fs-2"</span><span class="p">&gt;</span>.fs-2 text<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fs-3"</span><span class="p">&gt;</span>.fs-3 text<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fs-4"</span><span class="p">&gt;</span>.fs-4 text<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fs-5"</span><span class="p">&gt;</span>.fs-5 text<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fs-6"</span><span class="p">&gt;</span>.fs-6 text<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle7: {
        type: "subtitle",
        content: "Font weight and italics",
      },
      subtext14: {
        type: "subtext",
        content:
          "Quickly change the <code>font-weight</code> or <code>font-style</code> of text with these utilities. <code>font-style</code> utilities are abbreviated as <code>.fst-*</code> and <code>font-weight</code> utilities are abbreviated as <code>.fw-*</code>.",
      },
      code10: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fw-bold"</span><span class="p">&gt;</span>Bold text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fw-bolder"</span><span class="p">&gt;</span>Bolder weight text (relative to the parent element).<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fw-normal"</span><span class="p">&gt;</span>Normal weight text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fw-light"</span><span class="p">&gt;</span>Light weight text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fw-lighter"</span><span class="p">&gt;</span>Lighter weight text (relative to the parent element).<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fst-italic"</span><span class="p">&gt;</span>Italic text.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"fst-normal"</span><span class="p">&gt;</span>Text with normal font style<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle8: {
        type: "subtitle",
        content: "Colors",
      },
      subtext15: {
        type: "subtext",
        content:
          "Colorize text with color utilities. If you want to colorize links, you can use the<code>.link-*</code> helper classes</a> which have <code>:hover</code> and <code>:focus</code> states.",
      },
      code11: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-primary"</span><span class="p">&gt;</span>.text-primary<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-secondary"</span><span class="p">&gt;</span>.text-secondary<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-success"</span><span class="p">&gt;</span>.text-success<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-danger"</span><span class="p">&gt;</span>.text-danger<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-warning bg-dark"</span><span class="p">&gt;</span>.text-warning<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-info bg-dark"</span><span class="p">&gt;</span>.text-info<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-light bg-dark"</span><span class="p">&gt;</span>.text-light<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-dark"</span><span class="p">&gt;</span>.text-dark<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-body"</span><span class="p">&gt;</span>.text-body<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-muted"</span><span class="p">&gt;</span>.text-muted<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-white bg-dark"</span><span class="p">&gt;</span>.text-white<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-black-50"</span><span class="p">&gt;</span>.text-black-50<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-white-50 bg-dark"</span><span class="p">&gt;</span>.text-white-50<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span></code></pre>
        `,
      },
      title5: {
        type: "title",
        content: "Blockquotes",
      },
      subtext16: {
        type: "subtext",
        content: `For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class="blockquote"&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.`,
      },
      code12: {
        type: "code",
        content: `<pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">blockquote</span> <span class="na">class</span><span class="o">=</span><span class="s">"blockquote"</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>A well-known quote, contained in a blockquote element.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">blockquote</span><span class="p">&gt;</span></code></pre>`,
      },
      subtitle9: {
        type: "subtitle",
        content: "Naming a source",
      },
      subtext17: {
        type: "subtext",
        content: `The HTML spec requires that blockquote attribution be placed outside the <code>&lt;blockquote&gt;</code>. When providing attribution, wrap your <code>&lt;blockquote&gt;</code> in a <code>&lt;figure&gt;</code> and use a <code>&lt;figcaption&gt;</code> or a block level element (e.g., <code>&lt;p&gt;</code>) with the <code>.blockquote-footer</code> class. Be sure to wrap the name of the source work in <code>&lt;cite&gt;</code> as well.
        <br>Use text utilities <code>.text-center</code>, <code>.text-end</code> as needed to change the alignment of your blockquote.`,
      },
      code13: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">figure</span> <span class="na">class</span><span class="o">=</span><span class="s">"text-center"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">blockquote</span> <span class="na">class</span><span class="o">=</span><span class="s">"blockquote"</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>A well-known quote, contained in a blockquote element.<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">blockquote</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">figcaption</span> <span class="na">class</span><span class="o">=</span><span class="s">"blockquote-footer"</span><span class="p">&gt;</span>
    Someone famous in <span class="p">&lt;</span><span class="nt">cite</span> <span class="na">title</span><span class="o">=</span><span class="s">"Source Title"</span><span class="p">&gt;</span>Source Title<span class="p">&lt;/</span><span class="nt">cite</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">figcaption</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">figure</span><span class="p">&gt;</span></code></pre>
        `,
      },
      title6: {
        type: "title",
        content: "Lists",
      },
      subtitle10: {
        type: "subtitle",
        content: "Unstyled",
      },
      subtext18: {
        type: "subtext",
        content:
          "Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.",
      },
      code14: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">"list-unstyled"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>This is a list.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>It appears completely unstyled.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>Structurally, it's still a list.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>However, this style only applies to immediate child elements.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>Nested lists:
    <span class="p">&lt;</span><span class="nt">ul</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>are unaffected by this style<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>will still show a bullet<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>and have appropriate left margin<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;</span>This may still come in handy in some situations.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></code></pre>
        `,
      },
      subtitle11: {
        type: "subtitle",
        content: "Inline",
      },
      subtext19: {
        type: "subtext",
        content:
          "Remove a list’s bullets and apply some light <code>margin</code> with a combination of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.",
      },
      code15: {
        type: "code",
        content: `
        <pre><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">"list-inline"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">"list-inline-item"</span><span class="p">&gt;</span>This is a list item.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">"list-inline-item"</span><span class="p">&gt;</span>And another one.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">"list-inline-item"</span><span class="p">&gt;</span>But they're displayed inline.<span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></code></pre>
        `,
      },
    },
  },
};

},{}],5:[function(require,module,exports){
let content = []

content.push(require("./card_content/breakpoint_content"))
content.push(require("./card_content/gridsystem_content"))
content.push(require("./card_content/column_content"))
content.push(require("./card_content/typography_content"))



module.exports = content;
},{"./card_content/breakpoint_content":1,"./card_content/column_content":2,"./card_content/gridsystem_content":3,"./card_content/typography_content":4}],6:[function(require,module,exports){
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
    element.addEventListener("click", () => {
      let code = element.parentNode.querySelector("[code-display-area]");
      code = code.textContent;
      console.log(code);
      output_area.innerHTML = code;
    })
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

},{}],7:[function(require,module,exports){
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
// fetching sub title template
const subtitle_template = document.querySelector("#subtitle_template");
// fetching paragraph template
const paragraph_template = document.querySelector("#paragraph_template");
// fetching sub text template
const subtext_template = document.querySelector("#subtext_template");
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
    }else if (type == "subtitle") {
      let new_subtitle = create_title(subtitle_template, value);
      append_child(new_card_body, new_subtitle);
    }else if (type == "subtext") {
      let new_subtext = create_paragraph(subtext_template, value);
      append_child(new_card_body, new_subtext);
    }
     else if (type == "paragraph") {
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

},{"./content":5,"./functions/functions":6}]},{},[7]);
