<script setup lang="ts">
const props = defineProps<{
  front: string;
  back: string;
  id: number;
  isFront: boolean;
  folder?: string;
}>();
const isChooseFolder = ref(false);
const selectFolderColor = ref<string>('');
const emit = defineEmits(['toggle-display', 'delete-card']);

function chooseFolder() {
  isChooseFolder.value = !isChooseFolder.value;
}

function selectFolder(color: string) {
  selectFolderColor.value = color;
  console.log('select' + selectFolderColor.value);
  const storedPairs = JSON.parse(localStorage.getItem('recordPairs')!);
  const updatedPairs = storedPairs.map((pair: any) => {
    if (props.id === pair.id) {
      return { ...pair, folder: color };
    }
    return pair;
  });

  localStorage.setItem('recordPairs', JSON.stringify(updatedPairs));
}

function clickHandler() {
  emit('toggle-display');
  console.log(props.folder);
}

function deleteHandler(event: Event) {
  event.stopPropagation();
  emit('delete-card');
}
</script>

<template>
  <div class="display-card" @click="clickHandler">
    <div class="inner-card" :class="{ flipped: !isFront }">
      <div class="front" v-show="isFront">
        <div class="display_front">{{ props.front }}</div>
        <div class="folder-status" v-if="props.folder === undefined">
          <AddToFolder
            :isChooseFolder="isChooseFolder"
            :isSelectedFolder="selectFolderColor"
            @choose-folder="chooseFolder"
            @selected-folder="selectFolder"
          ></AddToFolder>
        </div>
        <div class="folder" v-else>
          <img
            v-if="props.folder === 'purple'"
            src="/src/assets/full_circle_folder_purple.svg"
            alt="selected folder"
          />
          <img
            v-else-if="props.folder === 'blue'"
            src="/src/assets/full_circle_folder_blue.svg"
            alt="selected folder"
          />
          <img
            v-else-if="props.folder === 'orange'"
            src="/src/assets/full_circle_folder_orange.svg"
            alt="selected folder"
          />
        </div>
      </div>
      <div class="back" v-show="!isFront">
        <div class="display_back">{{ props.back }}</div>
        <div class="delete_card" @click="deleteHandler">
          <img src="/src/assets/delete_card.svg" alt="delete" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.display-card {
  width: 70%;
  height: 50%;
  perspective: 1000px;
  position: relative;
}

.inner-card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.front {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  background-color: white;
  color: black;
  border-radius: 24px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
}

.back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  background-color: #007afe;
  color: white;
  border-radius: 24px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
  transform: rotateY(180deg);
  .display_back {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
}

.inner-card.flipped {
  transform: rotateY(180deg); /* 当翻转时，整个卡片旋转 */
}

.folder {
  position: absolute;
  bottom: 80px;
  right: 60px;
}
</style>
