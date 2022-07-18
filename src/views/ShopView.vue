<template>
  <div class="shop">
    <ShopItems msg="XXX special price on sale"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopItems from '@/components/ShopItems/index.vue'
export default {
  name: 'ShopView',
  components: {
    ShopItems
  }
}
</script>
