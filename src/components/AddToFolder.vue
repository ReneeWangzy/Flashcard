<script setup lang="ts">
const props = defineProps<{ isChooseFolder: boolean; isSelectedFolder: string }>();
const emit = defineEmits(['choose-folder', 'selected-folder']);
const folderSelected = ref(false);

function chooseFolder(event: Event) {
  event.stopPropagation(); // 阻止事件冒泡
  emit('choose-folder', props.isChooseFolder);
}

function selectedFolder(event: Event, color: string) {
  event.stopPropagation();
  folderSelected.value = true;
  emit('selected-folder', color);
}
</script>
<template>
  <div class="add-to-folder">
    <div v-if="!folderSelected">
      <div class="add-folder" v-if="isChooseFolder === false" @click="chooseFolder">
        <p>Add to folder</p>
        <img src="/src/assets/folder-add.svg" alt="add to folder" />
      </div>
      <div class="choose-folder" v-else>
        <p>Choose folder</p>
        <div class="img">
          <img
            class="blue-folder"
            src="/src/assets/full_circle_folder_blue.svg"
            alt="blue folder"
            @click="selectedFolder($event, 'blue')"
          />
          <img
            class="orange-folder"
            src="/src/assets/full_circle_folder_orange.svg"
            alt="orange folder"
            @click="selectedFolder($event, 'orange')"
          />
          <img
            class="purple-folder"
            src="/src/assets/full_circle_folder_purple.svg"
            alt="purple folder"
            @click="selectedFolder($event, 'purple')"
          />
        </div>
      </div>
    </div>

    <div v-else class="selected-folder">
      <img
        v-if="isSelectedFolder === 'purple'"
        src="/src/assets/full_circle_folder_purple.svg"
        alt="selected folder"
      />
      <img
        v-else-if="isSelectedFolder === 'blue'"
        src="/src/assets/full_circle_folder_blue.svg"
        alt="selected folder"
      />
      <img
        v-else-if="isSelectedFolder === 'orange'"
        src="/src/assets/full_circle_folder_orange.svg"
        alt="selected folder"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add-to-folder {
  position: absolute;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  bottom: 80px;
  right: 60px;
  p {
    font-size: 32px;
    color: #7c7c7c;
    padding-right: 20px;
  }
}

.add-folder {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.img {
  display: flex;
  justify-content: space-between;
}

.selected-folder {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
