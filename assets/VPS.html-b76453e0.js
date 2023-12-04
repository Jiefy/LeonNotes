import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,a as n,b as e,d as a,e as t}from"./app-98e4d7ff.js";const r={},d=n("h2",{id:"环境部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境部署","aria-hidden":"true"},"#"),e(" 环境部署")],-1),p=n("p",null,"部署应用前，为服务器配置好包管理工具，以便节省部署时间。主流的前端包管理工具有 npm、yarn、pnpm、以及国内的镜像 cnpm、tyarn 等，这些包管理器都是基于 nodejs。",-1),u=n("h3",{id:"包管理安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#包管理安装","aria-hidden":"true"},"#"),e(" 包管理安装")],-1),h={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>全局安装 yarn 是 <code>npm i yarn -g</code>，pnpm 是 <code>npm i pnpm -g</code>。如果不想全局安装，则去除 <code>-g</code>。</p><h3 id="包管理源" tabindex="-1"><a class="header-anchor" href="#包管理源" aria-hidden="true">#</a> 包管理源</h3><p>包管理源的修改命令类似，将下方的 npm 替换 yarn 或 pnpm 即可修改包管理源。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看源</span>
<span class="token function">npm</span> config get registry
<span class="token comment">#更换国内源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token comment">#换回默认源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署包" tabindex="-1"><a class="header-anchor" href="#部署包" aria-hidden="true">#</a> 部署包</h3><p>npm、yarn 和 pnpm 的包安装及管理命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#全局安装</span>
<span class="token function">npm</span> i 包 <span class="token parameter variable">-g</span>
<span class="token function">yarn</span> global <span class="token function">add</span> 包
<span class="token function">pnpm</span> <span class="token function">add</span> 包 <span class="token parameter variable">-g</span>

<span class="token comment">#移除全局包</span>
<span class="token function">pnpm</span> remove 包 <span class="token parameter variable">--global</span>
<span class="token comment">#更新全局包</span>
<span class="token function">pnpm</span> upgrade 包 <span class="token parameter variable">--global</span>

<span class="token comment">#升级当前目录的依赖以确保你的项目只包含单个版本的相关包</span>
<span class="token comment">#本方法能解决大部分的部署报错</span>
<span class="token function">npm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> update
<span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> upgrade
<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试" aria-hidden="true">#</a> 本地测试</h3><p>有些静态文件不支持直接打开，可以用 anywhere 架构本地服务器来进行测试。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装静态服务 anywhere</span>
<span class="token function">npm</span> <span class="token function">install</span> anywhere <span class="token parameter variable">-g</span>
<span class="token comment"># 进入静态页面存放目录，执行 anywhere</span>
anywhere <span class="token parameter variable">-p</span> <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器-ecs" tabindex="-1"><a class="header-anchor" href="#服务器-ecs" aria-hidden="true">#</a> 服务器 ECS</h2><p>服务器系统为 Debian 11，配置包管理器 nodejs 和 yarn。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update   <span class="token comment"># 从数据源更新软件包的列表，运行产生软件包数据库</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">sudo</span> <span class="token comment"># 安装 wget 和 sudo</span>

<span class="token comment"># 大版本升级必须先建立快照</span>
<span class="token function">apt-get</span> upgrade  <span class="token comment"># 更新所有软件包（慎用，不要用！）之前 CentOS 系统错误就是使用了 upgrade 命令。</span>

<span class="token comment"># 新建用户，非 root 权限</span>
adduser xxx
<span class="token comment"># 为新用户设置密码</span>
<span class="token function">passwd</span> xxx

<span class="token comment"># 安装 Node.js 18 和 yarn</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_18.x <span class="token operator">|</span> <span class="token function">bash</span> -
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果服务器的 Node.js 安装遇到问题，可以用宝塔面板的 Node.js 版本管理器来进行部署。</p><h3 id="网站重定向" tabindex="-1"><a class="header-anchor" href="#网站重定向" aria-hidden="true">#</a> 网站重定向</h3><p>更改 nginx 配置后，nginx 重载配置后实现网站重定向。<code>$1</code> 表示第一个 <code>()</code> 内的正则匹配内容，<code>$2</code> 为第二个。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p>`,16),v={href:"https://www.jb51.net/article/146957.htm",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">#隐性链接跳转</span>
location /xx1 {proxy_pass &lt;https://xxx.com/;&gt;}

<span class="token comment">#404 前，将旧文章链接格式转为新的，使用绝对路径</span>
location ^~ /p{
    rewrite ^/p/(.*)$  https://newzone.top/posts/$1.html;
}

<span class="token comment"># huginn 设置中 location 添加 301 定向，兼容老路径链接</span>
<span class="token key attr-name">if ( $request_uri</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;/users/1/web_requests/21/guoke.xml&quot; ) {</span>
rewrite ^ http://xxx.com/users/1/web_requests/19/guoke.xml permanent;
}

<span class="token comment">#只匹配主页，将主页跳转为其中一个子页面</span>
<span class="token key attr-name">location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/ {</span>
 rewrite https://xxx.com/ permanent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全新安装服务器" tabindex="-1"><a class="header-anchor" href="#全新安装服务器" aria-hidden="true">#</a> 全新安装服务器</h3>`,2),f={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<li><p>删除阿里云主机监控。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> aegis stop  <span class="token comment">#停止服务</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> aegis  <span class="token comment"># 删除服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),g={href:"https://www.bt.cn/bbs/thread-2897-1-1.html",target:"_blank",rel:"noopener noreferrer"},_=t("<li><p>宝塔上修改默认账号密码，并修改登录 22 的默认 SSH 端口。如果开通了 FTP，修改 FTP 端口。</p></li><li><p>选择「网站」&gt;「添加站点」，将站点根目录放在 /www/wwwroot/xxx，同时新建数据库。</p></li><li><p>上传全站文件并解压，然后按照安装提示重新安装一次，最后导入备份数据库。</p></li><li><p>404.html 起效，宝塔网站配置文件中，删除 <code>error_page 404 /404.html;</code> 中的 <code>#</code>。</p></li><li><p>SSL 证书设置，开启强制 HTTPS；PHP 版本；301 重定向；添加伪静态设置（metinfo 或其他网站后台有代码）。如果 301 设置失败，直接在「伪静态」配置中，放入跳转代码。</p></li>",5),w={href:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bt.cn/bbs/forum.php?mod=viewthread&tid=3117",target:"_blank",rel:"noopener noreferrer"},y=n("ul",null,[n("li",null,"添加计划任务，定期释放内存，建议设置每天释放一次，执行时机为半夜，如：04:00。"),n("li",null,"打开 Linux 工具箱添加 Swap。Swap 推荐与物理内存相同。"),n("li",null,"安装 PHP 缓存扩展，尽量使用更高的 PHP 版本，另外安装 opcache(脚本缓存)、redis(内容缓存)、imagemagick、fileinfo、exif。"),n("li",null,[e("Redis 优化，在/etc/sysctl.conf 中添加 "),n("code",null,"net.core.somaxconn = 2048"),e("，然后终端运行 "),n("code",null,"sysctl -p"),e("。")])],-1),S=n("li",null,[n("p",null,[e("防火墙白名单（自定义），如：添加 url 规则 "),n("code",null,"^/rss.php"),e(" 到防火墙 URL 白名单，防止 rss 服务被屏蔽。")])],-1),C=n("h3",{id:"服务器迁移",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务器迁移","aria-hidden":"true"},"#"),e(" 服务器迁移")],-1),P=n("li",null,"购买按量付费服务器。",-1),q={href:"https://smc.console.aliyun.com/overview",target:"_blank",rel:"noopener noreferrer"},N=n("li",null,"将域名解析到临时系统，确定服务基本正常。",-1),A=n("li",null,"对旧服务器先建立云盘快照，然后更换操作系统，进行全新部署。",-1),T=n("li",null,"对比新旧服务器，确认配置正常。",-1),j=n("h2",{id:"网站设计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网站设计","aria-hidden":"true"},"#"),e(" 网站设计")],-1),L=n("h3",{id:"网站字体",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网站字体","aria-hidden":"true"},"#"),e(" 网站字体")],-1),I=n("p",null,[e("网站为了提高访问速度并保持设计的一致性，通常会选默认字体。这导致网站设计难以突出重点。针对这点，我通常会修改网站的导航栏字体，将其从默认字体改为 "),n("code",null,"思源黑体 - 粗"),e("。")],-1),O={href:"https://www.iconfont.cn/webfont",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,"点击「生成字体」后，在选中字体的下方，点击「本地下载」。",-1),R=n("li",null,"将字体包上传到服务器，修改新字体的位置参数。",-1),E=n("li",null,[e("在导航栏的 "),n("code",null,"class"),e(" 属性中添加 "),n("code",null,"web-font"),e("。")],-1),V=n("h3",{id:"米拓",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#米拓","aria-hidden":"true"},"#"),e(" 米拓")],-1),$=n("p",null,"早期的动态网站通过米拓开发的，记录：",-1),M={href:"https://www.metinfo.cn/download/54.html",target:"_blank",rel:"noopener noreferrer"},B=n("li",null,"metinfo 新版静态页会删除 index.html，后续都改用 index.php。",-1),D=t(`<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="cpu-100" tabindex="-1"><a class="header-anchor" href="#cpu-100" aria-hidden="true">#</a> CPU 100%</h3><p>当服务器 CPU 或内存突然飙升 100% 时，依次排除当前运行进程，检查是否安装更新了插件、应用或服务。</p><p>如果找不到原因，可以临时设置定期任务。每隔 3 小时重启一次 nginx/apache。有时重启不正常，因此重启命令后 10 秒，再启动一次 nginx/apache。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/init.d/nginx restart
<span class="token function">sleep</span> 10s
/etc/init.d/nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssl-证书" tabindex="-1"><a class="header-anchor" href="#ssl-证书" aria-hidden="true">#</a> SSL 证书</h3><p>如果 SSL 证书部署报错，可以按自动生成来部署。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#证书设置修改 /www/server/panel/vhost/nginx</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span>~ <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> <span class="token operator">&lt;</span>https://www.xxx.com<span class="token variable">$1</span><span class="token operator">&gt;</span> permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#证书修改</span>
/www/server/panel/vhost/cert/
<span class="token comment">#证书位置</span>
/www/server/panel/vhost/ssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果同一网站部署了多个域名，并且都需要部署 SSL，则需要在 <code>/www/server/panel/vhost/cert</code> 目录下为每个域名创建独立的证书文件夹。同时，在网站的配置文件中创建两个独立的<code>server</code>配置，确保它们之间有换行。请注意，宝塔面板中的网站配置在重启 Nginx 后有时会被重置，所以请务必进行检查和确认配置的正确性。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><h3 id="cors-跨域" tabindex="-1"><a class="header-anchor" href="#cors-跨域" aria-hidden="true">#</a> CORS 跨域</h3><p>POST 表单等操作需要涉及第三方 API，需要添加扩域域名，避免 CORS 报错。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    add_header Access-Control-Allow-Origin <span class="token string">&quot;*&quot;</span><span class="token punctuation">;</span>
    add_header Access-Control-Allow-Credentials <span class="token string">&quot;true&quot;</span><span class="token punctuation">;</span>
    add_header Access-Control-Allow-Methods <span class="token string">&quot;GET, POST, OPTIONS&quot;</span><span class="token punctuation">;</span>
    add_header Access-Control-Allow-Headers <span class="token string">&quot;DNT,web-token,app-token,Authorization,Accept,Origin,Keep-Alive,User-Agent,X-Mx-ReqToken,X-Data-Type,X-Auth-Token,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&quot;</span><span class="token punctuation">;</span>
    add_header Access-Control-Expose-Headers <span class="token string">&quot;Content-Length,Content-Range&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="piwik-手动升级" tabindex="-1"><a class="header-anchor" href="#piwik-手动升级" aria-hidden="true">#</a> piwik 手动升级</h3><p>Matomo/Piwik 是免费的统计服务。有时无法使用自动安装包，需要手动升级。</p><ol><li>下载最新版应用，并解压到服务器。</li><li>将原目录中的 config/config.ini.php 粘贴到新版中，然后就可以更新数据库进行升级了。</li><li>选择「设置」&gt;「系统」&gt;「地理位置」，拖到页面底部，按页面要求下载 DBIP 包，并重命名保存为 <code>/www/wwwroot/piwik/misc/DBIP-City.mmdb</code>。</li></ol><hr class="footnotes-sep">`,16),X={class:"footnotes"},z={class:"footnotes-list"},U={id:"footnote1",class:"footnote-item"},F={href:"https://nodejs.org/zh-cn/download/package-manager#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages",target:"_blank",rel:"noopener noreferrer"},G=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),K={id:"footnote2",class:"footnote-item"},Q={href:"https://www.w3cschool.cn/nginxsysc/nginxsysc-rewrite.html",target:"_blank",rel:"noopener noreferrer"},W=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),Y={id:"footnote3",class:"footnote-item"},J={href:"https://cloud.tencent.com/developer/article/2220049?areaSource=102001.7&traceId=SwSyuKeYOHVCQ_bcIFnkh",target:"_blank",rel:"noopener noreferrer"},Z=n("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function nn(en,sn){const s=i("ExternalLinkIcon");return l(),c("div",null,[d,p,u,n("p",null,[e("通过集成了 npm 的 "),n("a",h,[e("Node.js"),a(s)]),e(" 来安装 npm，然后执行 npm i 命令安装其他。")]),m,n("p",null,[n("a",v,[e("网站重定向"),a(s)])]),b,n("ol",null,[n("li",null,[n("p",null,[e("安装"),n("a",f,[e("宝塔面板"),a(s)]),e("。")])]),k,n("li",null,[n("p",null,[e("配置"),n("a",g,[e("阿里云端口开放"),a(s)]),e("，导入安全规则。")])]),_,n("li",null,[n("p",null,[e("服务器设置参考 "),n("a",w,[e("NginxConfig"),a(s)]),e(" 适合新手配置高性能、安全、稳定的 NGINX 服务器的最简单方法。")])]),n("li",null,[n("p",null,[n("a",x,[e("ECS 宝塔设置优化"),a(s)]),e("：")]),y]),S]),C,n("ol",null,[P,n("li",null,[e("用"),n("a",q,[e("服务器迁移中心 SMC"),a(s)]),e(" 将旧服务器同步到临时服务器。")]),N,A,T]),j,L,I,n("ol",null,[n("li",null,[e("进入 "),n("a",O,[e("iconfont‑webfont"),a(s)]),e("，输入导航栏内所有文字，并设置所需字体。")]),H,R,E]),V,$,n("ul",null,[n("li",null,[e("后台忘记密码，使用 "),n("a",M,[e("Metinfo 米拓重置工具"),a(s)]),e("。")]),B]),D,n("section",X,[n("ol",z,[n("li",U,[n("p",null,[n("a",F,[e("通过包管理器方式安装 Node.js"),a(s)]),e(),G])]),n("li",K,[n("p",null,[n("a",Q,[e("Nginx rewrite 设置"),a(s)]),e(),W])]),n("li",Y,[n("p",null,[n("a",J,[e("针对宝塔面板一个站点多个域名使用 SSL 证书的解决方案"),a(s)]),e(),Z])])])])])}const on=o(r,[["render",nn],["__file","VPS.html.vue"]]);export{on as default};
