<script setup lang="ts"></script>
<template>
  <div class="delete-notification">
    <div class="background"><p>The card deleted</p></div>
  </div>
</template>
<style lang="scss" scoped>
.delete-notification {
  position: absolute;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  animation: fadeInOut 800ms ease-in-out forwards;
}

.background {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(251, 106, 227);
  border-radius: 8px;
  padding: 20px;
  p {
    margin-left: 20px;
    font-size: 2.5em;
    color: white;
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translateY(0); /* 渐入并移动到原位 */
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
