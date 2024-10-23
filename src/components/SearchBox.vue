<script setup lang="ts"></script>
<template>
  <div class="search-box">
    <input type="text" placeholder="Search for cards..." />
  </div>
</template>
<style lang="scss" scoped>
.search-box {
  width: 90%;
  height: 80px;
  background-color: white;
  border-radius: 16px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 2em;
    padding-left: 12px;
    border: 0.5px solid lightgray;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    &::placeholder {
      color: #aeaeb2;
    }
  }
}
</style>
