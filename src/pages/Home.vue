<template>
  <div>
    <Pagination
      @onChange="onPaginationChange"
      :currentPage="currentPage"
      :total="total"
    />

    <div class="posts">
      <Post v-for="item of posts" :key="item.id" :postData="item" />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Home",
  components: {
    Post,
    Pagination,
  },
  data() {
    return {
      posts: [],
      currentPage: 3,
      total: null,
    };
  },
  methods: {
    async getPosts(currentPage) {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${currentPage}&per_page=30&client_id=KnTs6o_US3peNB04mAj4042SkAGYoaO4SSwaEQ4cee8`
      );

      if (!response.ok) {
        const errorText =
          response.status === 403
            ? "Похоже, что превышено допустимое количество запросов. Пожалуйста, попробуйте через час"
            : "Что-то пошло не так, обратитесь к администратору";

        alert(errorText);

        return;
      }

      this.total = response.headers.get("x-total");
      this.currentPage = currentPage;

      const data = await response.json();
      this.posts = data;
    },
    onPaginationChange(currentPage) {
      this.getPosts(currentPage);
    },
  },
  created() {
    this.getPosts(this.currentPage);
  },
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 72px;

  @media screen and (min-width: 480px) {
    padding: 0 20px 72px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
