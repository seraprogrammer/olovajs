import{p as n,c as h,a0 as t,j as i,o as p}from"./chunks/framework.Dvj3iZjQ.js";const r={class:"demo"},c={class:"demo",style:{display:"flex",gap:"20px"}},E=JSON.parse('{"title":"i-ref","description":"","frontmatter":{"0":"i","1":"-","2":"r","3":"e","4":"f"},"headers":[],"relativePath":"i-ref.md","filePath":"i-ref.md"}'),d={name:"i-ref.md"},y=Object.assign(d,{setup(k){const e=n(null),a=n(null),l=()=>{e.value&&(e.value.style.color="red")},o=()=>{a.value&&a.value.focus()};return(u,s)=>(p(),h("div",null,[s[0]||(s[0]=t(`<h1 id="i-ref" tabindex="-1">i-ref <a class="header-anchor" href="#i-ref" aria-label="Permalink to &quot;i-ref&quot;">​</a></h1><p>The <code>i-ref</code> directive in Olova is a powerful way to reference DOM elements directly in your component. It works similarly to <code>id</code> attributes, but it’s designed to integrate seamlessly with Olova&#39;s reactivity system. Using <code>i-ref</code>, you can access DOM elements after they have been rendered, allowing you to perform dynamic actions on those elements, such as changing styles or adding event listeners.</p><h2 id="how-i-ref-works" tabindex="-1">How i-ref Works ? <a class="header-anchor" href="#how-i-ref-works" aria-label="Permalink to &quot;How i-ref Works ?&quot;">​</a></h2><ul><li><p><code>i-ref</code> allows you to create a reference to any DOM element within your template.</p></li><li><p>Once the component is rendered, you can access the referenced element using <code>this.$refs</code> in your methods.</p></li><li><p>It is useful for directly manipulating the DOM, such as changing styles, modifying content, or focusing an input field.</p></li></ul><h2 id="change-text-color-with-i-ref" tabindex="-1">Change Text Color with <code>i-ref</code> <a class="header-anchor" href="#change-text-color-with-i-ref" aria-label="Permalink to &quot;Change Text Color with \`i-ref\`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;//unpkg.com/olova&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    chnageColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Access the referenced element and change its color</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$refs.chnageColor.style.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1 i-ref=&quot;chnageColor&quot;&gt;Hello world!&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;button @click=&quot;chnageColor&quot;&gt;Change Color!&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,6)),i("div",r,[i("h1",{ref_key:"headingRef",ref:e},"Hello world!",512),i("button",{onClick:l},"Change Color!")]),s[1]||(s[1]=t(`<h2 id="explanation" tabindex="-1">Explanation: <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation:&quot;">​</a></h2><ol><li><p>No <code>data</code> Property: Since there&#39;s no need for reactive state in this example, the <code>data</code> object has been removed.</p></li><li><p>Methods: <code>chnageColor</code>: This method is still used to change the color of the text by referencing the element using <code>this.$refs.chnageColor</code>.</p></li><li><p>Template:</p></li></ol><p>The <code>i-ref</code> directive in <code>&lt;h1&gt;</code> assigns a reference to the heading, allowing you to manipulate it when the button is clicked.</p><h2 id="key-features-of-i-ref" tabindex="-1">Key Features of <code>i-ref</code>: <a class="header-anchor" href="#key-features-of-i-ref" aria-label="Permalink to &quot;Key Features of \`i-ref\`:&quot;">​</a></h2><ol><li>Direct Access to DOM Elements:</li></ol><p>The <code>i-ref</code> directive is similar to using an <code>id</code>, but it integrates better with Olova&#39;s reactivity system. It lets you interact with the element after rendering by referring to <code>this.$refs</code>.</p><ol start="2"><li>Ideal for Manipulating the DOM:</li></ol><p>Use <code>i-ref</code> for cases where you need to change the DOM element directly, such as changing styles, focusing an input, or scrolling to a specific section.</p><ol start="3"><li>Dynamic Updates:</li></ol><p>You can modify any property of the referenced element (e.g., <code>style</code>, <code>class</code>, t<code>extContent</code>, <code>innerHTML</code>) dynamically in your methods.</p><h1 id="practical-example" tabindex="-1">Practical Example: <a class="header-anchor" href="#practical-example" aria-label="Permalink to &quot;Practical Example:&quot;">​</a></h1><h2 id="focus-input-with-i-ref" tabindex="-1">Focus Input with i-ref <a class="header-anchor" href="#focus-input-with-i-ref" aria-label="Permalink to &quot;Focus Input with i-ref&quot;">​</a></h2><p>Here’s a practical example of using <code>i-ref</code> to focus an input field when a button is clicked:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;//unpkg.com/olova&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    focusInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$refs.myInput.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">focus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;input i-ref=&quot;myInput&quot; placeholder=&quot;Click the button to focus here&quot; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;button @click=&quot;focusInput&quot;&gt;Focus Input&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,14)),i("div",c,[i("input",{ref_key:"myInput",ref:a,placeholder:"Click the button to focus here"},null,512),i("button",{onClick:o},"Focus Input")]),s[2]||(s[2]=t('<h3 id="in-this-example" tabindex="-1">In this example: <a class="header-anchor" href="#in-this-example" aria-label="Permalink to &quot;In this example:&quot;">​</a></h3><ul><li><p>The <code>input</code> field has an <code>i-ref=&quot;myInput&quot;</code> directive, allowing us to reference it with this.<code>$refs.myInput.</code></p></li><li><p>The <code>focusInput</code> method is triggered when the button is clicked, which focuses on the input field.</p></li></ul><h2 id="conclusion" tabindex="-1">Conclusion: <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion:&quot;">​</a></h2><p>The <code>i-ref</code> directive in Olova provides a powerful way to reference and manipulate DOM elements within your component. Whether you&#39;re changing styles, focusing inputs, or interacting with any other DOM element, <code>i-ref</code> gives you the flexibility and control you need. It works much like the <code>id</code> attribute but is more integrated into Olova&#39;s system, making it a handy tool for dynamic UI interactions.</p>',4))]))}});export{E as __pageData,y as default};