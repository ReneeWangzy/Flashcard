<script setup lang="ts">
const router = useRouter();
function clickHandler() {
  router.back();
}
</script>
<template>
  <div class="previous-page" @click="clickHandler">
    <img src="/src/assets/arrow_back.svg" alt="back" />
  </div>
</template>
<style lang="scss" scoped>
.previous-page {
  position: absolute;
  margin-top: 100px;
  margin-left: 40px;
}
</style>
