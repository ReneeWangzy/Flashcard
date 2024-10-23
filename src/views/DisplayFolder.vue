<script setup lang="ts"></script>
<template>
  <div class="saved-items">
    <SearchBox></SearchBox>
    <div class="list-content">
      <p>Saved cards</p>
      <CardsFolder></CardsFolder>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.saved-items {
  padding-top: 180px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-content {
  width: 90%;
  height: 100%;
  margin-top: 20px;

  p {
    font-size: 2.5em;
    color: #aeaeb2;
  }
}
</style>
