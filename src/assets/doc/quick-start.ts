const context = `
## 快速开始

前往 [编写函数](/#/create) 中创建新的函数，并在 [函数列表](/#/list) 中查看刚刚创建的函数！

## 函数格式

函数模拟 ServerLess 函数样式，必须满足如下格式：

\`\`\`js
module.exports = (event, ctx) => {
  return { message: 'it works!', status: 'ok ', event, ctx };
};
\`\`\`

### 参数

每个函数都会接收两个参数：\`event\`与\`ctx\`。\`event\`是在 POST 请求下传递的 body 参数，它会在 POST 请求中被直接传递到函数中，在 GET 或其他任何请求中为空。\`ctx\`是每次 HTTP 请求时 Koa 的 ctx 上下文，它在任何请求中都会被传递到函数中。

目前函数不接收除 POST 请求外的任何参数。

### 返回值

函数返回值没有限制，可以返回任意值。包括但不限于 HTML、JSON 等。

### 限制

为了避免事件循环乃至任务队列的死循环，函数同步异步执行都有超时时间限制。目前为 3000ms，暂时无法修改。

## 性能

创建函数中使用了 [Monaco editor](https://microsoft.github.io/monaco-editor/)，它本质上就是 VSCode 的简化版，并且利用了 Web worker，在第一次运行是可能会比较缓慢。

本页面使用了 [markdown-it](https://github.com/markdown-it/markdown-it) 来对 markdown 文件进行渲染，由于是实时渲染，所以性能在某些极低配置的机器上发挥可能没有那么良好。

### 函数性能

后端运行在我的 1C 2G 的 ECS 服务器上，出口带宽高达 1Mbps。

~~能跑起来就是个奇迹（~~

## 前端

本页面不支持移动端，最小 CSS 像素 768px。

`;

export default context;
