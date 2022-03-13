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
      c1: {
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
      p3: {
        type: "paragraph",
        content: `
          The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent <code>.container</code>.
          `,
      },
      p4: {
        type: "paragraph",
        content: `
          <ul>
        <li>
        <p><strong>Rows are wrappers for columns.</strong> Each column has horizontal <code>padding</code> (called a gutter) for controlling the space between them. This <code>padding</code> is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to uniformly apply column sizing and gutter classes to change the spacing of your content.</p>
        </li>
        <li>
        <p><strong>Columns are incredibly flexible.</strong> There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., <code>col-4</code> spans four). <code>width</code>s are set in percentages so you always have the same relative sizing.</p>
        </li>
        <li>
        <p><strong>Gutters are also responsive and customizable.</strong> Gutter classes are available across all breakpoints, with all the same sizes as our margin and padding spacing. Change horizontal gutters with <code>.gx-*</code> classes, vertical gutters with <code>.gy-*</code>, or all gutters with <code>.g-*</code> classes. <code>.g-0</code> is also available to remove gutters.</p>
        </li>
        </ul>
          `,
      },
    },
  },
};
