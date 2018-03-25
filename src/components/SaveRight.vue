<template>
  <el-container>
	  <el-button type="info" ><router-link to="/">返回</router-link></el-button>
    <el-header class="header"><div class="headerIn">{{ headMessage }}</div></el-header>
    <el-aside></el-aside>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <div class="box one">
              <div class="left"></div>
              <div class="right">我是站位的 ^-^</div>
            </div>
            <div class="content">
              <h4>1.处理父容器为 flex 弹性盒子</h4>
              <p>要自适应的子元素设置 flex-grow 和 flex-shrink 为1</p>
              <pre>
    .box.one {
        display: flex;
    }
    .box.one .left {
        background: rebeccapurple;
        height: 200px;
        flex: 1;
    }
    .box.one .right {
        background: red;
        height: 200px;
        width: 100px;
    }
              </pre>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div class="box two">
              <div class="left"></div>
              <div class="right">我是站位的 ^-^</div>
            </div>
            <div class="content">
              <h4>2.绝对定位</h4>
              <p>绝对定位要求左右高度固定</p>
              <pre>
    .two {
        position: relative;
        color: white;
    }
    .two .left {
        margin-right: 200px;
        background: red;
        height: 100px;
    }
    .two .right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100px;
        /* float: right; */
        width: 200px;
        background: rebeccapurple;
    }
              </pre>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '固定右边使左边自适应',
      headMessage: '这里收集了一固定右边使左边自适应'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #409eff;
  line-height: 60px;
  color: white;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  padding: 2px 6px;
}
.headerIn {
  border: 2px solid white;
  border-radius: 20px 20px 0 0;
  height: 80%;
  margin-top: 4px;
  line-height: 48px;
  text-align: center;
}
.box {
  position: relative;
  width: 100%;
  background: #e6effb;
}
.item {
  width: 80px;
  height: 80px;
  background: #5e6d82;
}
.el-row {
  margin: 20px 0;
}

h4 {
  color: #333;
}
pre {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
  padding-top: 12px;
  color: #666;
}
.el-button.el-button--info {
    margin-bottom: 10px;
}
.el-button a {
  display: block;
  color: white;

}
.box.one {
    display: flex;
}
.box.one .left {
    background: rebeccapurple;
    flex: 1;
    min-width: 20px;
}
.box.one .right {
    background: red;
    width: 100px;
    padding: 12px;
    color: white;
}



.two {
    position: relative;
    color: white;
}
.two .left {
    margin-right: 200px;
    background: red;
    height: 100px;
}
.two .right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100px;
    /* float: right; */
    width: 200px;
    background: rebeccapurple;
}
</style>
