<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>該網站使用vue,spring boot開發</p>
    <h3>About project</h3>
    使用vue & spring boot 練習開發，參考halo專案，增進專案經驗

    <h3>function</h3>
    <ul>
      <li>類別與商品CRUD，類別設定cascade操作</li>
      <li>商品分頁與價格排序</li>
      <li>api 使用 filter ，新增修改需登入驗證 token</li>
    </ul>

    <h3>tools</h3>
    <ul>
      <li>vue cli</li>
      <li>GCP VM用docker啟動server</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style-type: none;
  margin: 0 10px;
  color: #42b983;
}
</style>
