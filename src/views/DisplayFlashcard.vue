<script setup lang="ts">
const recordPairs = ref<{ front: string; back: string; id: number; folder?: '' }[]>([]);
const currentIndex = ref(0);
const isFront = ref(true);
const isDeleted = ref(false);

function toggleDisplay() {
  isFront.value = !isFront.value;
}

function showNext() {
  if (recordPairs.value.length >= 2 && currentIndex.value < recordPairs.value.length - 1) {
    currentIndex.value = currentIndex.value + 1;
    isFront.value = true;
  } else {
    alert('last card already');
  }
}

function showPrevious() {
  if (currentIndex.value > 0) {
    currentIndex.value = currentIndex.value - 1;
    isFront.value = true;
  } else {
    alert('first card already');
  }
}

let startX = 0;

function touchStart(event: TouchEvent) {
  startX = event.touches[0].clientX;
}

function touchEnd(event: TouchEvent) {
  const endX = event.changedTouches[0].clientX;

  if (endX - startX > 30) {
    showPrevious();
    console.log('show previous');
  } else if (endX - startX < -30) {
    showNext();
    console.log('show next');
  }
}

function deleteCard() {
  const deleteID = recordPairs.value[currentIndex.value].id;
  recordPairs.value = recordPairs.value.filter((pair) => pair.id != deleteID);
  localStorage.setItem('recordPairs', JSON.stringify(recordPairs.value));
  isDeleted.value = true;

  new Promise((resolve) => {
    setTimeout(() => {
      isDeleted.value = false;
      resolve('');
    }, 1000); // 动画持续时间
  }).then(() => {
    isFront.value = true; // 确保在动画结束后再设置 isFront
  });
}

onMounted(() => {
  const displayPairs = localStorage.getItem('recordPairs');
  if (displayPairs) {
    recordPairs.value = JSON.parse(displayPairs);
  }
});
</script>
<template>
  <DeleteNotification v-show="isDeleted === true"></DeleteNotification>
  <div class="display-card-box" @touchstart="touchStart" @touchend="touchEnd">
    <div
      v-for="(pair, index) in recordPairs"
      :key="pair.id"
      class="all-card"
      v-show="index === currentIndex"
    >
      <p>Swipe left or right to change cards</p>
      <DisplayCard
        :front="pair.front"
        :back="pair.back"
        :id="pair.id"
        :folder="pair.folder"
        :isFront="isFront"
        @toggle-display="toggleDisplay"
        @delete-card="deleteCard"
      ></DisplayCard>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.display-card-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.all-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3em;
    margin-bottom: 60px;
    color: gray;
  }
}
</style>
