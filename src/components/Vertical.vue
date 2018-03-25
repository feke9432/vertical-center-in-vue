<template>
  <el-container>
	  <el-button type="info" ><router-link to="/">返回</router-link></el-button>
    <el-header class="header"><div class="headerIn">{{ headMessage }}</div></el-header>
    <el-aside></el-aside>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <div class="box">
              <div class="item center01"></div>
            </div>
            <div class="content">
              <h4>1.使用定位加transform位移</h4>
              <pre>
    .center01 {
      position  : absolute;
      top       : 50%;
      left      : 50%;
      transform : translate(-50%,-50%);
    }
              </pre>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div class="box center02">
              <div class="item "></div>
            </div>
            <div class="content">
              <h4>2.父元素flex布局</h4>
              <pre>
    .center02 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
              </pre>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <div class="box center03">
              <div class="item center03son"></div>
            </div>
            <div class="content">
              <h4>3.父元素flex，子元素margin：auto</h4>
              <pre>
    .center03 {
      display: flex;
    }
    .center03son {
      margin: auto;
    }
              </pre>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div class="box center04">
              <div class="item center04son">
                <span >sss</span>
              </div>
            </div>
            <div class="content">
              <h4>4.模拟表格</h4>
              <p>这里需要三层结构，具体居中的是 table-cell 中的内容</p>
              <pre>
    .center04 {
      display: table;
      
    }
    .center04son {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
              </pre>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card>
            <div class="box center05">
              <div class="item">
                
              </div>
            </div>
            <div class="content">
              <h4>5.4 零魔法</h4>
              <p>4 零绝对定位加margin：auto</p>
              <pre>
    .center04 {
      display: table;
      
    }
    .center04son {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
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
      msg: '垂直居中方法收集',
      headMessage: '这里收集了一些垂直居中的方法'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    background: #409EFF;
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
    height: 200px;;
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
  .center01 {
    position  : absolute;
    top       : 50%;
    left      : 50%;
    transform : translate(-50%,-50%);
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
  
  .center02 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center03 {
    display: flex;
  }
  .center03son {
    margin: auto;
  }

  .center04 {
    display: table;
    
  }
  .center04son {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .el-button a {
	  display: block;
	  color: white;
  }

  .center05 {
    position: relative;
  }
  .center05 .item {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  
</style>
