import{p as l,c as a,a0 as n,j as t,o as s}from"./chunks/framework.Dvj3iZjQ.js";const o={class:"demo"},d={key:0},h={key:1},g=JSON.parse('{"title":"i-if","description":"","frontmatter":{"0":"i","1":"-","2":"i","3":"f"},"headers":[],"relativePath":"i-if.md","filePath":"i-if.md"}'),r={name:"i-if.md"},f=Object.assign(r,{setup(c){const i=l(!1);return(p,e)=>(s(),a("div",null,[e[1]||(e[1]=n(`<h1 id="i-if" tabindex="-1">i-if <a class="header-anchor" href="#i-if" aria-label="Permalink to &quot;i-if&quot;">​</a></h1><h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>In <code>Olova.js</code>, the <code>i-if</code> and <code>i-else</code> directives work together to conditionally render elements based on the value of a reactive variable.</p><ul><li>i-if displays an element if the condition is true.</li><li>i-else acts as a fallback and renders another element when the condition is false.</li></ul><p>This guide demonstrates how to toggle between two pieces of content using <code>i-if</code> and <code>i-else</code>, controlled by a reactive boolean variable (<code>isTrue</code>).</p><p>In this example, we demonstrate how to use the <code>i-if</code> directive to show or hide an element based on a boolean variable <code>(isTrue)</code>. Additionally, a button is provided to toggle this variable and control the visibility of the element.</p><h2 id="example-code" tabindex="-1">Example Code <a class="header-anchor" href="#example-code" aria-label="Permalink to &quot;Example Code&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;//unpkg.com/olova&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isTrue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initial boolean value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1 i-if=&quot;isTrue&quot;&gt;It will be shown when isTrue = true&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;h1 i-else&gt;It will be shown when isTrue = false&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;button @click=&quot;isTrue = !isTrue; console.log(isTrue)&quot;&gt;Toggle&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="in-this-example" tabindex="-1">In this example: <a class="header-anchor" href="#in-this-example" aria-label="Permalink to &quot;In this example:&quot;">​</a></h3><p>Clicking the &quot;Toggle Visibility&quot; button triggers the <code>toggleCondition</code> method, which flips the value of <code>isTrue</code>. The content of the <code>&lt;h1&gt;</code> element changes depending on the value of isTrue, using <code>i-if</code> and <code>i-else</code> to control which element is displayed.</p>`,10)),t("div",o,[i.value?(s(),a("h1",d,"It will be shown when isTrue = true")):(s(),a("h1",h,"It will be shown when isTrue = false")),t("p",null,[t("button",{onClick:e[0]||(e[0]=u=>{i.value=!i.value,console.log(i.value)})},"Toggle")])]),e[2]||(e[2]=n('<h2 id="breakdown" tabindex="-1">Breakdown <a class="header-anchor" href="#breakdown" aria-label="Permalink to &quot;Breakdown&quot;">​</a></h2><h3 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data&quot;">​</a></h3><p>The <code>data</code></p><p><code>isTrue</code>: This reactive boolean value controls the conditional rendering of the two <code>&lt;h1&gt;</code> elements. It is initially set to false.</p><h3 id="i-if-directive" tabindex="-1">i-if Directive <a class="header-anchor" href="#i-if-directive" aria-label="Permalink to &quot;i-if Directive&quot;">​</a></h3><ul><li><code>i-if</code> is a conditional rendering directive that allows elements to appear or disappear based on a condition. If the condition evaluates to <code>true</code>, the element is rendered. If <code>false</code>, the element is removed from the DOM entirely.</li></ul><h3 id="i-else-directive" tabindex="-1">i-else Directive <a class="header-anchor" href="#i-else-directive" aria-label="Permalink to &quot;i-else Directive&quot;">​</a></h3><ul><li><code>i-else</code> renders the second <code>&lt;h1&gt;</code> element if the <code>i-if</code> condition is <code>false</code>.</li><li>If <code>isTrue</code> is <code>false</code>, the text &quot;It will be shown when isTrue = false&quot; appears.</li></ul><h3 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;template&quot;">​</a></h3><p>The template consists of:</p><ul><li><p>An <code>&lt;h1&gt;</code> with <code>i-if</code> to conditionally display content when <code>isTrue</code> is <code>true</code>.</p></li><li><p>Another <code>&lt;h1&gt;</code> with i-else to show alternative content when <code>isTrue</code> is <code>false</code>.</p></li><li><p>A <code>&lt;button&gt;</code> that toggles the <code>isTrue</code> value between <code>true</code> and <code>false</code>, which switches the content rendered between the two <code>&lt;h1&gt;</code> elements.</p></li></ul><h2 id="key-features" tabindex="-1">Key Features <a class="header-anchor" href="#key-features" aria-label="Permalink to &quot;Key Features&quot;">​</a></h2><ul><li><p>Conditional Rendering with <code>i-if</code> and <code>i-else</code>: Using these two directives, you can toggle between two different pieces of content based on a reactive condition.</p></li><li><p>Reactiveness: The <code>isTrue</code> variable is reactive, so changes to its value automatically update the DOM, toggling between the two states.</p></li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>The <code>i-if</code> and <code>i-else</code> directives in <code>Olova.js</code> provide a powerful way to conditionally render elements in your application based on reactive state. This allows you to manage different content views based on specific conditions in a clean and declarative manner.</p><ul><li><p>Efficient DOM Updates: Only one of the two elements is rendered at any given time, ensuring efficient DOM manipulation.</p></li><li><p>Seamless User Interaction: Users can toggle between different content states with the click of a button, and the framework automatically handles updating the view based on the new state.</p></li></ul><p>Additional Use Cases</p><ul><li><p>Combine i-if and i-else with other directives like i-for for more dynamic and complex conditional rendering.</p></li><li><p>Extend the logic with more reactive state variables to handle multiple conditions.</p></li></ul>',18))]))}});export{g as __pageData,f as default};