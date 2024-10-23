<script setup lang="ts">
const route = useRoute();
const folder = route.query.color || 'default';
</script>
<template>
  <div class="cards-folder">
    <div class="folder-detail">
      <img v-if="folder === 'all'" src="/src/assets/folder-open-fill-all.svg" alt="folder" />
      <img
        v-else-if="folder === 'purple'"
        src="/src/assets/folder-open-fill-purple.svg"
        alt="folder"
      />
      <img v-else-if="folder === 'blue'" src="/src/assets/folder-open-fill-blue.svg" alt="folder" />
      <img
        v-else-if="folder === 'orange'"
        src="/src/assets/folder-open-fill-orange.svg"
        alt="folder"
      />
      <p>My words folder</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cards-folder {
  border-bottom: 0.5px solid darkgray;
  padding-bottom: 20px;
}

.folder-detail {
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    margin-left: 24px;
    font-size: 2em;
  }
}
</style>
