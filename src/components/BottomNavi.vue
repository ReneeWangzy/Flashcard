<script setup lang="ts">
const props = defineProps<{ activeIcon: string }>();
const emit = defineEmits<{ (e: 'iconClicked', icon: string): void }>();
const router = useRouter();

function navigateTo(path: string, icon: string) {
  emit('iconClicked', icon);
  router.push(path);
}
</script>
<template>
  <div class="bottom-navi">
    <div class="folder" @click="navigateTo('/folder', 'folder')">
      <img class="icon" src="/src/assets/folder_line.svg" v-if="props.activeIcon !== 'folder'" />
      <img class="icon" src="/src/assets/folder_fill.svg" v-else />
    </div>
    <div class="add" @click="navigateTo('/add', 'add')">
      <img
        class="icon"
        src="/src/assets/icon-add-line.svg"
        alt="Add"
        v-if="props.activeIcon !== 'add'"
      />
      <img class="icon" v-else src="/src/assets/icon-add-fill.svg" />
    </div>
    <div class="list" @click="navigateTo('/list', 'list')">
      <img class="icon" src="/src/assets/icon-list-line.svg" v-if="props.activeIcon !== 'list'" />
      <img class="icon" src="/src/assets/icon-list-fill.svg" v-else />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bottom-navi {
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 5em;
  align-items: center;
  background-color: #f2f2f7;
}
.icon {
  animation: icon-transition 0.3s forwards;
}

@keyframes icon-transition {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
