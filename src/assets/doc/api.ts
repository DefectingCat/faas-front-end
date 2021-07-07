const api = `
## API 接口

后端使用 Koa 作为主要框架，接口根据路由划分。

路径规范：除了返回\`'Hello!'\`的根路径外，其他所有的接口都带有\`/api\`。根路径后直接带函数名称为访问函数。

### 根

地址：\`/\`

方法：GET

固定返回：\`Hello!\`

示例：

\`\`\`bash
curl https://api.defectink.com/faas/
# hello!
\`\`\`

### 获取用户 UUID

地址：\`/api/user\`

方法：GET

返回：

\`\`\`json
{"userId":"992ddcc4-4c3c-42d4-b549-342cd1868b2e"}
\`\`\`

示例：

\`\`\`bash
curl https://api.defectink.com/faas/api/user/
# {"userId":"992ddcc4-4c3c-42d4-b549-342cd1868b2e"}
\`\`\`

### 创建函数

地址：\`/api/create\`

方法：POST

参数：

* userId：用户 UUID；
* funcName：函数名称；
* funContext：函数内容；

返回：

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "state": "ok"
}
\`\`\`

示例：

POST: \`https://api.defectink.com/faas/api/create/\`

body: 

\`\`\`json
{
    "userId":"992ddcc4-4c3c-42d4-b549-342cd1868b2e",
    "funcName":"apitest",
    "funContext":"module.exports = (event, ctx) => {return \`<h1>Hello, World</h1>\`;};"
}
\`\`\`

return:

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "state": "ok"
}
\`\`\`

### 函数列表

地址：\`/api/list\`

方法：POST

参数：

* userId：用户 UUID；
  
返回：

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "list": [
    "apitest.js"
  ]
}
\`\`\`

示例：

POST: \`https://api.defectink.com/faas/api/list/\`

body: 

\`\`\`json
{
    "userId":"992ddcc4-4c3c-42d4-b549-342cd1868b2e"
}
\`\`\`

return:

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "list": [
    "apitest.js"
  ]
}
\`\`\`

### 删除函数

地址：\`/api/list\`

方法：DELETE

参数：

* userId：用户 UUID；
* funcName：函数名称
  
返回：

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "state": "ok"
}
\`\`\`

示例：

DELETE: \`https://api.defectink.com/faas/api/list/\`

body: 

\`\`\`json
{
    "userId":"992ddcc4-4c3c-42d4-b549-342cd1868b2e",
    "funcName":"apitest"
}
\`\`\`

return:

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "state": "ok"
}
\`\`\`

### 读取函数内容

地址：\`/api/edit\`

方法：POST

参数：

* userId：用户 UUID；
* funcName：函数名称
  
返回：

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "funContext": "module.exports = (event, ctx) => {return \`<h1>Hello, World</h1>\`;};"
}
\`\`\`

示例：

POST: \`https://api.defectink.com/faas/api/edit/\`

body: 

\`\`\`json
{
    "userId":"992ddcc4-4c3c-42d4-b549-342cd1868b2e",
    "funcName":"apitest"
}
\`\`\`

return:

\`\`\`json
{
  "userId": "992ddcc4-4c3c-42d4-b549-342cd1868b2e",
  "funContext": "module.exports = (event, ctx) => {return \`<h1>Hello, World</h1>\`;};"
}
\`\`\`

### 访问函数

地址：\`/{funcName}\`

方法：GET / POST

参数：POST 方法下可以传递 JSON，并作为函数的 event 参数传递给函数。
  
返回：函数的 return 值。

示例：

POST: \`https://api.defectink.com/faas/func\`

body: 

\`\`\`json
{
    "hello":"world!"
}
\`\`\`

return:

\`\`\`json
{
  "message": "it works!",
  "status": "ok ",
  "event": {
    "hello": "world!"
  },
  "ctx": {
    //...
  }
}
\`\`\`
`;

export default api;
