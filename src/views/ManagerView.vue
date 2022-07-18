<template>
  <div class="manage">
    <ManagerForm msg="XXX special price on sale"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ManagerForm from '@/components/ManagerForm.vue'
export default {
  name: 'ManageView',
  components: {
    ManagerForm
  }
}
</script>
