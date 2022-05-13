<template>
  <article class="post">
    <a
      :href="postData.user.links.html"
      target="__blank"
      class="post__header user"
    >
      <img class="user__photo" :src="postData.user.profile_image.medium" />
      <div class="user__text-block">
        <h2 class="user__name">{{ postData.user.name }}</h2>
        <p class="user__tag-name">{{ postData.user.username }}</p>
      </div>
    </a>

    <img :src="postData.urls.regular" class="post__img" />

    <div class="post__footer">
      <p class="post__views">{{ postData.likes }}</p>
      <img src="../assets/icons/Eye.svg" alt="views" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  width: 100%;
  max-width: 660px;

  @media screen and (min-width: 768px) {
    max-width: 440px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 320px;
  }

  &__img {
    width: 100%;
    object-fit: cover;
    height: 300px;

    @media screen and (min-width: 768px) {
      height: 230px;
    }
  }

  &__header {
    padding: 10px;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px 10px 8px;
  }

  &__views {
    font-size: 12px;
    font-weight: 700;
    color: #8d8d8d;
    margin-right: 5px;
  }
}

.user {
  display: flex;
  &__photo {
    height: 30px;
    width: 30px;
    object-fit: cover;
    border-radius: 50%;
  }

  &__text-block {
    text-align: start;
    margin-left: 10px;
  }

  &__name {
    font-size: 12px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 4px;
  }

  &__tag-name {
    font-size: 12px;
    color: #8d8d8d;
  }
}
</style>
