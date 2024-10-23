<script setup lang="ts"></script>
<template>
  <div class="folder-details">
    <SearchBox></SearchBox>
    <div class="folder-content">
      <p>Saved cards</p>
      <OpenFolder></OpenFolder>
      <FolderListItemBundle></FolderListItemBundle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.folder-details {
  padding-top: 140px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.folder-content {
  width: 90%;
  height: 90%;
  p {
    font-size: 2.5em;
    color: #aeaeb2;
  }
}
</style>
