<script setup lang="ts">
const props = defineProps<{ modelValue: string; isFront: boolean }>();
const emit = defineEmits(['update:modelValue', 'confirm']);

const noInput = computed(() => modelValue.value.trim() === '');
const isCheckActivated = ref(false);

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(text: string) {
    emit('update:modelValue', text);
  },
});

function clickInputHandler(event: MouseEvent) {
  event.stopPropagation(); // 阻止事件冒泡

  if (!noInput.value) {
    isCheckActivated.value = true;
    setTimeout(() => {
      emit('update:modelValue', modelValue.value);
      emit('confirm');
    }, 500);
  } else {
    alert('please input first');
  }
}
</script>

<template>
  <div class="input">
    <textarea type="text" v-model="modelValue"></textarea>
    <div class="check-confirm" @click="clickInputHandler">
      <div v-if="isCheckActivated === false">
        <img src="/src/assets/check_circle_deactivated.svg" alt="deactivated" />
      </div>
      <div v-else>
        <img src="/src/assets/check_circle_activated.svg" alt="activated" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: none;
  width: 70%;
  height: 50%;
  border-radius: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
  margin: 10px;
  textarea {
    width: 80%;
    height: 60%;
    text-align: center;
    background-color: transparent;
    font-size: 4rem;
    resize: none;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    border: none;
    background-color: white;
    width: 100px;
    height: 36px;
    border-radius: 4px;
    font-size: 1rem;
  }
}

.svg-icon {
  width: 1.5em;
  height: 1.5em;
}
.back {
  background-color: #007afe;
  textarea {
    color: white;
    background-color: transparent;
  }
}
</style>
