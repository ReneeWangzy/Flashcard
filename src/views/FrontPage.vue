<script setup lang="ts">
const router = useRouter();

function navigateTo() {
  router.push('/add');
}
</script>
<template>
  <div class="front-page">
    <div class="display" @click="navigateTo">
      <p>Tap to input words in flashcard</p>
      <img src="/src/assets/flashcard_logo.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.front-page {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .display {
    background-color: white;
    color: #aeaeb2;
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 8px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
    p {
      font-size: 2em;
      color: black;
    }
  }
}
</style>
