---
title: elementUI 组件
---
## el-form 与 el-form-item
![Snipaste_2023-04-20_09-06-08](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-06-08.66xmcbftbi40.webp)

el-form 组件结构应用实例(一)

使用 `el-form` 组件进行用户信息的收集，通过它的 *model* 属性收集表单数据，以及 *rules* 进行表单验证。而 `el-form` 组件通常在内部搭配 `el-form-item` 组件。
```html
<el-form 
    ref="loginForm" 
    :model="loginForm" 
    :rules="loginRules" 
    class="login-form" 
    auto-complete="on" 
    label-position="left">

    <el-form-item></el-form-item>
</el-form>
```
el-form-item 组件结构应用实例(一)

在 `el-form-item` 组件内部，用 `el-input` 组件实现用户名和密码的输入。通过 *v-model* 属性收集用户名和密码。

用户名的收集
```html
<el-form-item prop="username">
    <span class="svg-container">
        <svg-icon icon-class="user" />
    </span>
    <el-input
        ref="username"
        v-model="loginForm.username"
        placeholder="Username"
        name="username"
        type="text"
        tabindex="1"
        auto-complete="on"
    />
</el-form-item>
```
密码的收集
```html
<el-form-item prop="password">
    ...
    <el-input
        :key="passwordType"
        ref="password"
        v-model="loginForm.password"
        :type="passwordType"
        placeholder="Password"
        name="password"
        tabindex="2"
        auto-complete="on"
        @keyup.enter.native="handleLogin"
    />
    ...
</el-form-item>
```
## el-button 
![Snipaste_2023-04-20_09-06-08](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-06-08.66xmcbftbi40.webp)

el-button 应用实例(一)

收集完用户名和密码，需要通过点击 `el-button` 登录按钮，提交收集的用户数据，实现登录功能。
```html
<el-button 
    :loading="loading" 
    type="primary" 
    style="width:100%;margin-bottom:30px;" 
    @click.native.prevent="handleLogin">
    点击登录
</el-button>
```
## el-table 与 el-table-column
![Snipaste_2023-04-20_09-09-04](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-09-04.3zskbshx0qe0.webp)

el-table 与 el-table-column 应用实例(一)

`el-table-column` 组件是以列来展示的。
- `el-table-column` 组件的 `prop` 属性表示对应列内容的字段名

关于上面两个组件的具体说明，可前往 [table 表格](https://element.eleme.cn/#/zh-CN/component/table#table-attributes) 查看
```html
<el-table :data="list" style="width: 100%" border>
  <!-- 展示品牌数据 -->
  <el-table-column
    label="序号"
    type="index"
    width="80px"
    align="center"
  ></el-table-column>
  <el-table-column
    label="品牌名称"
    prop="tmName"
    width=""
  ></el-table-column> 
</el-table>
```
## row 与 template 
![Snipaste_2023-04-20_09-09-04](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-09-04.3zskbshx0qe0.webp)

row 与 template 应用实例(一)

对于操作品牌数据，则需要 `template` 模板来获取当前行的数据对象 `row` (`$index` 表示当前遍历的序列值)，以下是一个示例
```html
...
<el-table-column label="操作" prop="prop" width="">
  <template slot-scope="{ row }">
    <el-button
      type="warning"
      icon="el-icon-edit"
      size="mini"
      @click="updateTradeMark(row)"
    >
      修改
    </el-button>
  </template>
</el-table-column>
```
该例中，将当前行的数据对象 `row`传入到事件回调函数 updateTradeMark 中，通过回调函数修改 `row` 的值，实现修改按钮的功能

## el-pagination
![Snipaste_2023-04-20_09-09-04](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-09-04.3zskbshx0qe0.webp)

el-pagination 应用实例(一)

`el-pagination` 分页组件主要包含以下内容：
- 属性：当前页码数 `current-page`、总页数 `total`、每页展示的条数 `page-size`、以及可选每页条数 `page-sizes`、按钮的数量 `pager-count`
- 事件：`@current-change` (自定义事件，默认传入当前点击页码page的值。) 、`@size-change` (自定义事件，当分页器某一页需要展示数据的条数发生改变时会触发)

下面是分页组件结构的代码：
```html
<el-pagination
  style="margin-top: 20px; text-align: center"
  @size-change="handleSizeChange"
  @current-change="getPageList"
  :current-page="page"
  :pager-count="7"
  :page-sizes="[3, 5, 10]"
  :page-size="limit"
  layout=" prev, pager, next, jumper,->, sizes,total"
  :total="total"
>
</el-pagination>
```
## el-dialog 
![Snipaste_2023-04-20_09-21-08](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-21-08.5a67vj31t440.webp)

el-dialog 应用实例(一)

el-dialog 组件是对话框组件，通常搭配 el-form 与 el-form-item 进行表单数据的收集
- el-dialog 的 visible.sync 是数据双向绑定，值为布尔类型，需要在data 中对值进行初始化。它用来控制对话框的显示与隐藏
```html
<el-dialog
    :title="tmForm.id ? '修改品牌' : '添加品牌'"
    :visible.sync="dialogFormVisible"
>
    <el-form>
        <el-form-item></el-form-item>
        ...
    <el-form>
    <div slot="footer" class="dialog-footer">
    <el-button @click="clearTradeMarkInfo">取 消</el-button>
    <el-button type="primary" @click="addOrUpdateTradeMark"
        >确 定</el-button
    >
    </div>
</el-dialog>
```
## el-upload 
![Snipaste_2023-04-20_09-53-01](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-20_09-53-01.7063onjkzgw0.webp)

el-upload 应用实例(一)
- action 图片上传的地址
- show-file-list 是否展示图片列表
- on-success 上传成功的回调
- before-upload 上传之前的回调
```html
<el-upload
    class="avatar-uploader"
    action="/dev-api/admin/product/upload"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    >
    <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
    </div>
</el-upload>
```