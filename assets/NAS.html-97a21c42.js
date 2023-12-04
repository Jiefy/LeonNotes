const e=JSON.parse('{"key":"v-1b2d4c91","path":"/services/NAS.html","title":"NAS","lang":"zh-CN","frontmatter":{"article":false,"title":"NAS","icon":"process","order":1,"description":"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。 SSD 缓存对家用的 NAS 性能提升不大，没必要加。 群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？ NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。 升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/NAS.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"NAS"}],["meta",{"property":"og:description","content":"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。 SSD 缓存对家用的 NAS 性能提升不大，没必要加。 群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？ NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。 升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-04T09:09:34.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-12-04T09:09:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"NAS\\",\\"description\\":\\"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。 SSD 缓存对家用的 NAS 性能提升不大，没必要加。 群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？ NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。 升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。\\"}"]]},"headers":[{"level":2,"title":"NAS 套件","slug":"nas-套件","link":"#nas-套件","children":[]},{"level":2,"title":"Docker 容器","slug":"docker-容器","link":"#docker-容器","children":[{"level":3,"title":"常用","slug":"常用","link":"#常用","children":[]},{"level":3,"title":"资讯","slug":"资讯","link":"#资讯","children":[]},{"level":3,"title":"娱乐","slug":"娱乐","link":"#娱乐","children":[]},{"level":3,"title":"自动化","slug":"自动化","link":"#自动化","children":[]},{"level":3,"title":"待了解","slug":"待了解","link":"#待了解","children":[]}]},{"level":2,"title":"影视整理","slug":"影视整理","link":"#影视整理","children":[]},{"level":2,"title":"NAS 硬盘","slug":"nas-硬盘","link":"#nas-硬盘","children":[]}],"git":{"createdTime":1701680974000,"updatedTime":1701680974000,"contributors":[{"name":"Jiefy","email":"47217870+Jiefy@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.99,"words":2397},"filePathRelative":"services/NAS.md","localizedDate":"2023年12月4日","excerpt":"<p>NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：</p>\\n<ul>\\n<li>选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。</li>\\n<li>选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。</li>\\n<li>SSD 缓存对家用的 NAS 性能提升不大，没必要加。</li>\\n<li>群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？</li>\\n<li>NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。</li>\\n<li>升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。</li>\\n</ul>","autoDesc":true}');export{e as data};
