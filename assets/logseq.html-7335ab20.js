import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,a as n,b as s,d as t,e}from"./app-98e4d7ff.js";const i={},u={href:"https://logseq.com/",target:"_blank",rel:"noopener noreferrer"},r=e('<p>另外，Logseq 的日记非常强大，也可以自动套用指定模板。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 但其他笔记需要手动启用模板，修改 .env 的设置 <code>{:week &quot;journals&quot;}</code> 被报错。继续尝试设计周记、月报的模板。</p><p>Logseq 劣势，所有页面建立在 pages 下，但可以手动修改位置。双链笔记有个特点，只要名称不变，文档位置更改也不会影响引用。</p><p>我会把远期不安排的任务，往 later 清单中放，随时可以查看提醒，但又不需要每天重复调整时间。</p><h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2><ul><li><code>[[]]</code> 可快速新建页面，<code>All pages</code> 中可删除空页面</li><li>打开右上角的「侧边栏」，使用目录管理主页面</li><li>将页面中内容汇总起来，比如「心理学」标签页面显示所有心理学</li><li>任务时，使用 later 或 now，切换后改变状态，会记录任务持续时间。 <ul><li>如果使用 <code>doing</code> 或者 <code>now</code> 命令，它会更显眼地出现在每天日志的下方（如红框所示），以防当天记录的东西过多，或者到了第二天生成了新的日志后被忽略。<strong>直到你将它完成为止，它才会消失</strong>，算是一种强提醒。</li></ul></li><li>PDF 文档的标注管理一直是个大难题，而用 Logseq 后方便许多，能将注释与标签、笔记、截图统合在一起。</li><li>TOC Generator 插件生成目录：<code>{{renderer :tocgen}}</code>。</li><li><code>shift+左键</code> 将新页面打开在<strong>右侧边栏</strong>中。</li><li>忽略指定文件夹？</li></ul><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h2>',6),d={href:"https://www.bilibili.com/video/BV1eq4y1N7Su",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.logseq.com/#/page/queries",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>首先，在文本后方添加 tag，比如</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>idea <span class="token number">1</span> #idea
find #research
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，使用 query 命令寻找对应结果</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token operator">*</span> and 命令
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>and <span class="token punctuation">[</span><span class="token punctuation">[</span>research<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>idea<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span><span class="token function">and</span> <span class="token punctuation">(</span>task now later done<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token operator">*</span> or 命令
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>or <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token operator">*</span> not 命令
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>not <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token operator">*</span> 罗列为 Later 的 task
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>task later<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token operator">*</span> 一周内的日记，且包含关键词或标签
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token function">and</span> <span class="token punctuation">(</span>between <span class="token operator">-</span>6d today<span class="token punctuation">)</span>  <span class="token string">&quot;#幸福&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,5),m={class:"footnotes"},f={class:"footnotes-list"},h={id:"footnote1",class:"footnote-item"},g={href:"https://thinkstack.club/how-to-set-up-an-automated-daily-template-in-logseq/",target:"_blank",rel:"noopener noreferrer"},b=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function _(q,x){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("p",null,[s("与 Obsidian 相比，"),n("a",u,[s("Logseq"),t(a)]),s(" 罗列内容更方便。Logseq 将所有行都视为节点，因此非常轻松将所需的子节点整合在一个页面，实现关键信息聚合。Logseq 更改页面标题，会同步更改所有标签名。")]),r,n("p",null,[n("a",d,[s("query"),t(a)]),s(" 能按条件精准地找到结果，并动态更新在页面中，公式参考"),n("a",k,[s("官方文档"),t(a)]),s("。")]),v,n("section",m,[n("ol",f,[n("li",h,[n("p",null,[n("a",g,[s("How to Set Up an Automated Daily Template in Logseq"),t(a)]),s(),b])])])])])}const L=o(i,[["render",_],["__file","logseq.html.vue"]]);export{L as default};
