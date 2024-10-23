<script setup lang="ts">
const activeIcon = ref('add');

function handleIconClick(icon: string) {
  activeIcon.value = icon;
}
</script>

<template>
  <PreviousPage></PreviousPage>
  <div class="main">
    <router-view></router-view>
  </div>

  <BottomNavi
    class="bottom-navi"
    :activeIcon="activeIcon"
    @iconClicked="handleIconClick"
  ></BottomNavi>
</template>

<style lang="scss" scoped>
.main {
  height: 80vh;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f2f2f7;
}
</style>
