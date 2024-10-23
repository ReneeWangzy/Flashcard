<script setup lang="ts">
const props = defineProps<{ front: string; back: string; id: number }>();
const emit = defineEmits(['delete-card']);
const isVisible = ref(true);
function toggle() {
  isVisible.value = !isVisible.value;
}

function deleteHandler(event: Event) {
  event.stopPropagation();
  emit('delete-card');
}
</script>
<template>
  <div class="folderlist-item" id="props.id">
    <div class="icon" @click="toggle">
      <img src="/src/assets/visibility.svg" alt="on" v-show="isVisible === true" />
      <img src="/src/assets/visibility-off.svg" alt="off" v-show="isVisible === false" />
    </div>
    <div class="content">
      <div class="front">
        <p>{{ props.front }}</p>
      </div>
      <div class="back">
        <p v-if="isVisible === true">{{ props.back }}</p>
        <p v-else>***</p>
      </div>
    </div>
    <div class="delete" @click="deleteHandler">
      <img src="/src/assets/delete_card_red.svg" alt="remove" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.folderlist-item {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid lightgray;

  .icon,
  .delete {
    padding-left: 20px;
    padding-right: 20px;
    color: lightgray;
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    .front,
    .back {
      width: 50%;
      height: 60px;
      font-size: 2em;
      color: black;
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-items: center;
      background-color: white;
    }
    .back {
      border-left: 1px solid lightgray;
    }
  }
}
</style>
