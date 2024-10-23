<script setup lang="ts">
const router = useRouter();

function navigateTo(color: string) {
  router.push({ path: '/folder/details', query: { color: color } });
}
</script>
<template>
  <div class="cards-folder">
    <div class="folder-detail" @click="navigateTo('all')">
      <img src="/src/assets/folder-fill-all.svg" alt="folder" id="purple" />
      <p>All cards</p>
    </div>
    <div class="folder-detail" @click="navigateTo('purple')">
      <img src="/src/assets/folder-fill-purple.svg" alt="folder" id="purple" />
      <p>Purple folder</p>
    </div>
    <div class="folder-detail" @click="navigateTo('blue')">
      <img src="/src/assets/folder-fill-blue.svg" alt="folder" id="blue" />
      <p>Blue folder</p>
    </div>
    <div class="folder-detail" @click="navigateTo('orange')">
      <img src="/src/assets/folder-fill-orange.svg" alt="folder" id="orange" />
      <p>Orange folder</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cards-folder {
  border-bottom: 0.5px solid darkgray;
  padding-bottom: 24px;
  padding-top: 24px;
}

.folder-detail {
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    margin-left: 24px;
    font-size: 2.5em;
  }
}
</style>
