<template src="./template.html"></template>
<style src="./style.css"></style>
<script>
import ManagerForm from "@/components/ManagerForm.vue";
import {
  // apiItemUpdate,
  // apiItemAdd,
  apiItemRemove,
  apiCategory,
  apiCategoryOne,
  apiCategoryRemove,
  apiCategoryAdd,
  apiCategoryEdit,
} from "@/api";

export default {
  data() {
    return {
      category: [],
      children: [],
      indexActive: 0,
      page: 0,
      isOrderByPriceDes: null,
      input: {
        category: {
          id: null,
          name: "",
          show: false,
        },
        item: {
          id: null,
          show: false,
        },
      },
    };
  },
  name: "ShopItems",
  props: {
    msg: String,
  },
  components: {
    ManagerForm,
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      apiCategory()
        .then((response) => {
          // handle success
          console.log("all ok");
          console.log(response);
          this.category = response.data;
          this.children = response.data[0].children;
          this.indexActive = 0;
        })
        .catch(function (error) {
          // handle error
          console.log(error.response.data);
        });
    },
    getChildren(id, index) {
      apiCategoryOne(id)
        .then((response) => {
          // handle success
          console.log("children ok");
          console.log(response.data);
          this.children = response.data.children;
          this.isOrderByPriceDes = null;
        })
        .catch(function (error) {
          // handle error
          console.log(error.response.data);
        });
      console.log("id" + id);
      this.indexActive = index;
      this.page = 0;
    },
    isActive(index) {
      // console.log(index);
      // console.log(this.indexActive);
      if (this.indexActive == index) return true;
      // return false;
      return false;
    },
    getOrderByPriceDes(boolean) {
      this.children = this.children.sort((a, b) => {
        if (boolean) return a.price - b.price;
        if (!boolean) return b.price - a.price;
      });
    },
    async removeItemHandler(id) {
      let requestMessage = await apiItemRemove(id, this.$store.getters.config)
        .then((response) => {
          // handle success
          console.log("remove ok");
          console.log(response.data);
          // this.$router.push('/#/')
          return {
            status: 200,
            message: "資料刪除成功",
            data: {},
            show: true,
          };
        })
        .catch(function (error) {
          // handle error
          let { data, message, status } = error.response.data;

          return {
            status: status,
            message: message,
            data: data,
            show: true,
          };
        });
      this.$store.state.requestMessage = requestMessage;
      this.initData();
      // console.log(window.location.pathname);
    },
    async removeCategoryHandler(id) {
      console.log(this.$store.getters.config);
      let requestMessage = await apiCategoryRemove(
        id,
        this.$store.getters.config
      )
        .then((response) => {
          // handle success
          console.log("remove ok");
          console.log(response.data);
          // this.$router.push('/#/')
          return {
            status: 200,
            message: "資料刪除成功",
            data: {},
            show: true,
          };
        })
        .catch(function (error) {
          // handle error
          let { data, message, status } = error.response.data;

          return {
            status: status,
            message: message,
            data: data,
            show: true,
          };
        });
      this.$store.state.requestMessage = requestMessage;
      this.initData();
      this.page = 0;
    },
    async createCategoryHandler() {
      let requestMessage = await apiCategoryAdd(
        this.$store.getters.config
      ).catch(function (error) {
        // handle error
        let { data, message, status } = error.response.data;

        return {
          status: status,
          message: message,
          data: data,
          show: true,
        };
      });
      this.$store.state.requestMessage = requestMessage;
      this.initData();
    },
    editCategoryHandler(id) {
      this.input.category.id = id;
      let dom1 = document.getElementById(`category${id}`);
      let dom2 = document.getElementById(`inputCategory${id}`);
      if (this.input.category.show == false) {
        console.log(dom1);
        dom1.style.display = "none";
        dom2.style.display = "block";
        this.input.category.show = true;
      } else {
        dom1.style.display = "block";
        dom2.style.display = "none";
        this.input.category.id = null;
        this.input.category.name = "";
        this.input.category.show = false;
      }
      console.log(id);
    },
    async updateCategoryData() {
      let data = this.input.category;
      await apiCategoryEdit(data, this.$store.getters.config).catch(function (
        error
      ) {
        // handle error
        let { data, message, status } = error.response.data;

        return {
          status: status,
          message: message,
          data: data,
          show: true,
        };
      });
      this.editCategoryHandler(data.id);
      // this.input.category.show=false;
      // this.input.category.id=null;
      // this.input.category.name="";
      this.initData();
    },
    showItemForm(id) {
      this.input.item.show = !this.input.item.show;
      this.input.item.id = id;
      // getItemData(9);
    },
  },
  computed: {
    getChildrenPage() {
      let page = [[]];
      let i = 0;
      this.children.forEach((item, index) => {
        page[i].push(item);
        if (
          index > 0 &&
          (index + 1) % 8 == 0 &&
          this.children.length % 8 !== 0
        ) {
          i++;
          page.push([]);
        }
      });
      return page;
    },
    getItemId() {
      return this.input.item.id;
    },
  },
};
</script>