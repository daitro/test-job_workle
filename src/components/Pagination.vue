<template>
  <div class="pagination">
    <div class="pagination__list">
      <button
        :class="{
          pagination__item: true,
          'pagination__item--active': currentPage === item,
        }"
        @click="changeOfPage(item)"
        v-for="(item, index) in allPages"
        :key="index"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
    },
    total: {
      type: String,
    },
  },
  methods: {
    changeOfPage(item) {
      if (item === "...") return;

      this.$emit("onChange", item);
    },
  },
  computed: {
    allPages() {
      const maxPage = Math.ceil(Number(this.total) / 30);
      const meanPage = this.currentPage;

      const pages = [meanPage];

      if (meanPage + 1 <= maxPage) {
        pages.push(meanPage + 1);
      }
      if (meanPage + 2 <= maxPage) {
        pages.push("...");
        pages.push(maxPage);
      }
      if (meanPage - 1 > 0) {
        pages.unshift(meanPage - 1);
      }
      if (meanPage - 2 > 0) {
        pages.unshift("...");
        pages.unshift(1);
      }

      return pages;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  height: 60px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  bottom: 0;

  &__list {
    text-align: center;
    margin-top: calc(60px / 2 - 12px);
  }

  &__item {
    font-size: 14px;
    line-height: 24px;
    color: white;
    cursor: pointer;

    &:not(&:last-child) {
      margin-right: 10px;
    }

    &--active {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
