<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/12/28
  Time: 10:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="pragma" content="no-cache"/>
    <link href="${ctx}/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="${ctx}/css/vue.css" rel="stylesheet">
    <script src="${ctx}/bootstrap/js/bootstrap.min.js"></script>
    <script src="${ctx}/js/vue/vue.js"></script>
    <title>Title</title>
</head>
<body>
    <div id="vue-app">
        <h1>{{ name }}</h1>
        <p>{{ job }}</p>
        <p>{{ greet('hello java!') }}</p>
        <a v-bind:href="website">{{ website }}</a>
        <input type="text" v-bind:value="website">
        <p v-html="websiteTag"></p>
    </div>

    <div id="vue-app-two">
        <h1> Events</h1>
        <button @click="add(1)">+1</button>
        <button @click="subtract(1)">-1</button>
        <button @dblclick="add(10)">++10</button>
        <button @dblclick="subtract(10)">--10</button>
        <p> age :: {{ age }}</p>

        <div id="canvas" @mousemove="updateXY">
            {{ x }} , {{ y }} - <span @mousemove.stop=""> stop move</span>
        </div>
        <a @click.prevent="alert()" href="http://www.baidu.com">The new step</a>
    </div>

    <div  id="vue-app-three">
        <h1>双向数据绑定 / input / select / textarea</h1>
        <label>姓名</label>
        <input ref="name" type="text" @keyup="logName">
        <span>{{ name }}</span>
        <label>年龄</label>
        <input ref="age" type="text" @keyup="logAge">
        <span>{{ age }}</span>
    </div>

    <div  id="vue-app-four">
        <h1>双向数据绑定(model) / input / select / textarea</h1>
        <label>姓名</label>
        <input ref="name" type="text" v-model="name">
        <span>{{ name }}</span>
        <label>年龄</label>
        <input ref="age" type="text"v-model="age">
        <span>{{ age }}</span>
    </div>

    <script src="${ctx}/js/vuemain.js"></script>
</body>
</html>
