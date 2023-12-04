import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as t,a as e,b as n,d as l,e as c}from"./app-98e4d7ff.js";const i={},d=e("p",null,"我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。",-1),p=e("h2",{id:"本地-mysql-使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地-mysql-使用","aria-hidden":"true"},"#"),n(" 本地 MySQL 使用")],-1),m={href:"https://downloads.mysql.com/archives/installer/",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="数据库恢复" tabindex="-1"><a class="header-anchor" href="#数据库恢复" aria-hidden="true">#</a> 数据库恢复</h2><p>数据库备份是至关重要的工作，一旦数据丢失，恢复起来会非常困难。如果你只想恢复特定的数据库，可以复制数据库的字段内容。在 phpMyAdmin 中，选择你需要的数据库，点击 &quot;SQL&quot;，然后将你的 SQL 代码粘贴到执行窗口，最后点击 &quot;Go&quot; 按钮以运行代码。字段的分隔通常以 <code>-- Table structure for table xxx</code> 开始。</p><p>如果出现错误 <code>#1217 - Cannot delete or update a parent row: a foreign key constraint fails</code>，这意味着你尝试删除或更新表中的记录，但是这个记录在另一个表中作为外键被引用。如果确实需要进行恢复，可以使用以下命令暂时关闭 MySQL 的外键约束检查：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 禁用外键约束检查</span>
<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">-- 执行您的操作...</span>

<span class="token comment">-- 启用外键约束检查</span>
<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库启动失败或损坏" tabindex="-1"><a class="header-anchor" href="#数据库启动失败或损坏" aria-hidden="true">#</a> 数据库启动失败或损坏</h2><ol><li>在 MySQL 配置文件中，找到 <code>mysqld</code> 行并添加 <code>innodb_force_recovery=4</code>。这个值可以在 0-6 之间调整，数值越大对数据库的损害就越大。在成功启动 MySQL 后，备份所有数据库和管理密码，并将它们下载到本地。</li><li>在宝塔面板的「数据库」选项中删除所有数据库，然后卸载并重新安装 MySQL。</li><li>重新导入数据库。</li></ol>`,6);function h(_,v){const a=o("ExternalLinkIcon");return r(),t("div",null,[d,p,e("p",null,[n("在 Windows 平台上，你需要首先安装 "),e("a",m,[n("MySQL Server"),l(a)]),n("，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：右键点击菜单栏最左侧，依次选择「计算机管理」>「服务和应用程序」>「服务」>「MYSQL57」，然后双击以启动。")]),u])}const S=s(i,[["render",h],["__file","MySQL.html.vue"]]);export{S as default};
