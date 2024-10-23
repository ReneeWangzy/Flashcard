<script setup lang="ts">
const recordPairs = ref<{ front: string; back: string; id: number; folder?: '' }[]>([]);
const currentPage = ref(1);
const itemsPerPage = 12;
const route = useRoute();
const folderPath = route.query.color;

const filteredPairs = computed(() =>
  recordPairs.value.filter((pair) => pair.folder === folderPath),
);

onMounted(() => {
  const savedPairs = localStorage.getItem('recordPairs');
  if (savedPairs) {
    recordPairs.value = JSON.parse(savedPairs);
  }
});

const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const cardsData = folderPath === 'all' ? recordPairs.value : filteredPairs.value;
  return cardsData.slice(start, start + itemsPerPage);
});

function deleteCard(index: number) {
  const deleteID = currentItems.value[index].id;
  recordPairs.value = recordPairs.value.filter((pair) => pair.id != deleteID);
  localStorage.setItem('recordPairs', JSON.stringify(recordPairs.value));
}

function nextPage(dataLength: number) {
  if (currentPage.value * itemsPerPage < dataLength) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
</script>

<template>
  <div class="item-bundle">
    <div>
      <p class="total-count">
        Number of cards: {{ folderPath === 'all' ? recordPairs.length : filteredPairs.length }}
      </p>
      <div class="list" v-for="(pair, index) in currentItems" :key="index">
        <div>
          <FolderListItem
            :id="pair.id"
            :back="pair.back"
            :front="pair.front"
            @delete-card="deleteCard(index)"
          ></FolderListItem>
        </div>
      </div>
    </div>
    <div class="total"></div>
    <div v-show="currentItems.length != 0" class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span
        >Page {{ currentPage }} of
        {{
          folderPath === 'all'
            ? Math.ceil(recordPairs.length / itemsPerPage)
            : Math.ceil(filteredPairs.length / itemsPerPage)
        }}</span
      >
      <button
        @click="nextPage(recordPairs.length)"
        :disabled="currentPage * itemsPerPage >= recordPairs.length"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-bundle {
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
}

.total-count {
  font-size: 2em;
}
.list {
  background-color: white;
}

.total {
  width: 100%;
  margin-right: 40px;
  display: flex;
  justify-content: right;
  p {
    color: lightgray;
    font-size: 2.5em;
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pagination {
  padding-top: 40px;
  span {
    font-size: 1.5em;
    color: darkblue;
  }
  button {
    border: 1px solid;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    font-size: 1.5em;
  }
}
</style>
