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
