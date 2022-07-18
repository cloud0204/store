<template>
  <transition name="fade">
    <div
      class="col-md-12"
      id="messageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="$store.state.requestMessage.show"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
              v-if="$store.state.requestMessage.status == 200"
            >
              Success !!
            </h5>
            <h5 class="modal-title" id="exampleModalLabel" v-else>Fail !!</h5>
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              @click="showHandler"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            class="modal-body text-left"
            v-if="$store.state.requestMessage.status == 200"
          >
            <h6>{{ $store.state.requestMessage.message }}</h6>
          </div>
          <div class="modal-body text-left" v-else>
            <h6>{{ $store.state.requestMessage.message }}</h6>
            <ul
              v-for="(i, index) in $store.state.requestMessage.data"
              :key="i.index"
            >
              <li>{{ index }}:{{ i }}</li>
            </ul>
          </div>
          <div class="modal-footer">
            <!-- <button
              class="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancel
            </button> -->
            <a class="btn btn-primary" @click="showHandler">confirm</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
#messageModal {
  position: fixed;
  z-index: 999;
}
.modal-content{
  background-color: #3e3e3e !important; 
}
.modal-dialog {
  border: 1px solid #c49b63;
  background: transparent;
  color: #c49b63;
}
.fade-enter-from {
  transform: translate(0px, -100px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s;
}
.fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
<script>
export default {
  data() {
    return {
      //   show: true,
    };
  },
  methods: {
    showHandler() {
      this.$store.state.requestMessage.show =
        !this.$store.state.requestMessage.show;
    },
  },
};
</script>
