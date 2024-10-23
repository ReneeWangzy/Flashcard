<script setup lang="ts">
const isFront = ref(true);
const inputValue = ref({ frontValue: '', backValue: '' });
const recordPairs = ref({ front: '', back: '', id: 0 });
const inputArr = useLocalStorage<{ front: string; back: string; id: number }[]>('recordPairs', []);
const isConfirmed = ref(false);

function confirmHandler() {
  if (isFront.value) {
    recordPairs.value.front = inputValue.value.frontValue;
  } else {
    recordPairs.value.back = inputValue.value.backValue;
  }

  if (recordPairs.value.front !== '' && recordPairs.value.back !== '') {
    recordPairs.value.id = Date.now();
    inputArr.value.push({
      front: recordPairs.value.front,
      back: recordPairs.value.back,
      id: recordPairs.value.id,
    });
    inputValue.value.frontValue = '';
    inputValue.value.backValue = '';
    recordPairs.value.front = '';
    recordPairs.value.back = '';
  }

  if (isFront.value === true) {
    setTimeout(() => {
      isFront.value = !isFront.value;
    }, 500);
  }

  if (isFront.value === false) {
    isConfirmed.value = true;

    setTimeout(() => {
      isConfirmed.value = false;
      isFront.value = !isFront.value;
    }, 1000); // 动画持续时间
  }
}
</script>

<template>
  <AddNotification v-show="isConfirmed === true"></AddNotification>

  <div class="cardinput-box">
    <p v-if="isFront" class="front-content">Input front content</p>
    <p v-else class="back-content">Input back content</p>
    <CardInput
      v-if="isFront"
      v-model:model-value="inputValue.frontValue"
      :is-front="isFront"
      class="front"
      @confirm="confirmHandler"
    ></CardInput>

    <CardInput
      v-else
      :is-front="isFront"
      v-model:model-value="inputValue.backValue"
      @confirm="confirmHandler"
      class="back"
    ></CardInput>
  </div>
</template>
<style lang="scss" scoped>
.cardinput-box {
  position: relative;
  flex-direction: column; /* 将元素垂直排列 */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  p {
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    font-size: 3em;
    margin-bottom: 60px;
  }
}
</style>
