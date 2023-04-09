# ChatGPT Web VIP 版

使用 express 和 vue3 搭建的 ChartGPT 演示网页

### 功能

- 登录注册，管理后台可以设置首次登录赠送免费提问次数
- key轮询池
- 卡券套餐管理
- 对话管理
- 敏感词管理
- 自定义回复管理
- 提示词prompt管理
- 卡密套餐管理、卡密生成和核销

## 部署
> 服务器无需安装任何环境，直接运行静态资源 和 二进制打包文件即可，如果需要绑定域名，只需要安装nginx

将数据库文件 `db.sql` 文件导入到mysql，修改 `.env` 数据库配置信息和邮箱配置信息

在服务器上运行 `nohup ./goravel &` 启动后端服务

将用户端绑定到 `chatgpt` 目录，如 chat.baidu.com，nginx 配置如下：
```shell
location /api/{
    proxy_pass http://127.0.0.1:3000;
}
```
访问 chat.baidu.com 即可访问前台

将管理端域名绑定到 `admin` 目录，如 admin.baidu.com，`nginx` 配置如下：
访问 chat.baidu.com 即可访问管理后台，默认账号 `245629560@qq.com`, 密码 `123456` 
```shell
location /backend/{
    proxy_pass http://127.0.0.1:3000/backend/;
}
```
