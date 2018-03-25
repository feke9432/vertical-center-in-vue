<template>
    <article id="home">
        <h1>html 常见样式收集</h1>
        <el-row>
            <el-col :span="24"><router-link class="grid-content bg-purple-dark" to="/vertical">垂直居中</router-link></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><router-link class="grid-content bg-purple-dark" to="/SaveRight">固定右边使左边自适应</router-link></el-col>
        </el-row>
    </article>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
    display: block;
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
  color: white;
  font-weight: bold;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
