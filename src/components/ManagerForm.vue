<template>
  <div class="form">
    <div class="container">
      <div class="section-header text-center">
        <h2>item's form</h2>
      </div>
      <div class="form-form">
        <div id="success"></div>
        <form name="sentMessage" id="form" novalidate="novalidate">
          <h3 v-if="requestData.id != null">item id:{{ requestData.id }}</h3>
          <div class="control-group">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="item title"
              required="required"
              data-validation-required-message="Please enter item title"
              v-model.trim="requestData.title"
            />
            <p class="help-block text-danger"></p>
          </div>
          <div class="control-group">
            <textarea
              class="form-control"
              id="description"
              placeholder="item description"
              required="required"
              data-validation-required-message="Please enter description"
              v-model.trim="requestData.description"
            ></textarea>
            <p class="help-block text-danger"></p>
          </div>
          <div class="control-group">
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="item price"
              required="required"
              data-validation-required-message="Please enter your item price"
              v-model.trim="requestData.price"
            />
            <p class="help-block text-danger"></p>
          </div>
          <div class="control-group">
            <div class="form-group">
              <label for="status">select item status</label>
              <select
                class="form-control"
                name="status"
                id="status"
                v-model.trim="requestData.status"
              >
                <option>PUBLISHED</option>
                <option>DRAFT</option>
                <option>RECYCLE</option>
              </select>
            </div>
            <p class="help-block text-danger"></p>
          </div>
          <div class="control-group">
            <div class="form-group">
              <label for="categoryId">select a category name</label>
              <select
                class="form-control"
                name="categoryId"
                id="categoryId"
                v-model.trim="requestData.categoryId"
                @change="showTypeArea"
              >
                <option
                  v-for="i in category"
                  :key="i.id"
                  :value="i.id"
                  :selected="requestData.categoryId == i.id"
                >
                  {{ i.name }}
                </option>
                <option value="null">create a new category</option>
              </select>
              <input
                type="text"
                class="form-control"
                id="categoryName"
                placeholder="Please type new category name"
                data-validation-required-message="Please type new category name"
                v-model.trim="requestData.categoryName"
                :disabled="requestData.categoryId != null"
              />
            </div>
            <p class="help-block text-danger"></p>
          </div>
          <div>
            <button
              class="btn btn-custom"
              id="sendMessageButton"
              @click="requestData.id == null ? add() : update()"
            >
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.contact .contact-form .btn.btn-custom {
  width: 100%;
}
.btn.btn-custom {
  padding: 12px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #777777;
  border-radius: 0;
  border: 2px solid #fdbe33;
  box-shadow: inset 0 0 0 0 #fdbe33;
  transition: ease-out 0.3s;
  -webkit-transition: ease-out 0.3s;
  -moz-transition: ease-out 0.3s;
}

.contact .contact-form .btn.btn-custom {
  width: 100%;
}
.btn.btn-custom:hover {
  color: #20212b;
  box-shadow: inset 0 0 0 30px #fdbe33;
}
/* #categoryId[value="null"]{
  border: 2px solid red;
}
#categoryName{
  display: none;
} */
</style>
<script>
import { apiCategory, apiItemUpdate, apiItemAdd, apiItemGetOne } from "@/api";
export default {
  data() {
    return {
      category: [],
      requestData: {
        id: null,
        title: "",
        description: "",
        price: 1,
        status: null,
        categoryId: null,
        categoryName: null,
      },
      // requestMessage: {
      //   status: 0,
      //   message: "",
      //   data: {},
      //   show: false,
      // },
    };
  },
  props: {
    itemId: Number,
  },
  mounted() {
    this.initData();
    this.getItemData();
    // console.log(this.$props.itemId)
  },
  methods: {
    async add() {
      if(this.requestData.categoryId==null&&this.requestData.categoryName==null){
        this.requestData.categoryName="default name"
      }
      let requestMessage = await apiItemAdd(this.requestData,this.$store.getters.config)
        .then((response) => {
          // handle success
          // console.log("apiItemAdd ok");
          console.log(response.data);
          this.requestData = {
            id: null,
            title: "",
            description: "",
            price: 1,
            status: null,
            categoryId: null,
            categoryName: null,
          };
          // this.$router.push("/shop");
          return {
            status: 200,
            message: "資料新增成功",
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
    },
    async update() {
      if(this.requestData.categoryId==null&&this.requestData.categoryName==null){
        this.requestData.categoryName="default name"
      }
      let requestMessage = await apiItemUpdate(this.requestData,this.$store.getters.config)
        .then((response) => {
          // handle success
          // console.log("apiItemAdd ok");
          console.log(response.data);
          this.requestData = {
            id: null,
            title: "",
            description: "",
            price: 1,
            status: null,
            categoryId: null,
            categoryName: null,
          };
        //  this.$router.push("/shop");
          return {
            status: 200,
            message: "資料修改成功",
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
    },
    initData() {
      apiCategory()
        .then((response) => {
          // handle success
          console.log("all ok");
          console.log(response.data);
          this.category = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error.response.data);
        });
    },
    showTypeArea() {
      let dom = document.getElementById("categoryName");
      console.log("showTypeArea");
      if (
        this.requestData.categoryId == null ||
        this.requestData.categoryId == "null"
      ) {
        dom.removeAttribute("disabled");
        dom.style.display = "block";
        this.requestData.categoryId = null;
        console.log(dom.value);
        return;
      }
      this.requestData.categoryName = null;
      console.log("2222");
      dom.setAttribute("disabled", "true");
      dom.style.display = "none";
    },
    getItemData() {
      if (!this.$props.itemId) return;
      apiItemGetOne(this.$props.itemId)
        .then((response) => {
          // handle success
          // console.log("apiItemAdd ok");
          console.log(response.data);
          let { id, title, description, price, status, categoryId } =
            response.data;
          this.requestData = {
            id: id,
            title: title,
            description: description,
            price: price,
            status: status,
            categoryId: categoryId,
            categoryName: null,
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
    },
  },
};
</script>
