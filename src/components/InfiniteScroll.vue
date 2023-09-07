<template>
  <div class="grid-container">
    <div class="grid-item" v-for="post in postsList">
      <img :src="post.thumbnail" alt="">
    </div>
    <div ref="infinitescrolltrigger" id="scoll-trigger" />
    <div class="circle-loader" v-if="showloader" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import getPosts from '../api/getPosts.ts';

export default {
  data: () => {
    return {
      currentPage: 1,
      maxPerPage: 6,
      showloader: false,
      postsList: ref([])
    }
  },
  computed: {
    pageOffset() {
      return this.maxPerPage * this.currentPage;
    }
  },
  methods: {
    async getMorePosts() {
      const newPosts = await getPosts(
        this.maxPerPage,
        this.postsList.length
      );

      this.postsList.push(...newPosts)
    },

    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showloader = true;
            this.currentPage = this.currentPage * this.maxPerPage;
            this.getMorePosts();
            this.showloader = false;
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
    }
  },
  mounted() {
    this.scrollTrigger();
  }
}
</script>

<style scoped lang="scss">
// arreglar tamaño
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;
}

$scrollbar-border: 12px;

.grid-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: transparent;
}

.grid-container::-webkit-scrollbar {
  width: $scrollbar-border;
  background-color: transparent;
}

.grid-container::-webkit-scrollbar-thumb {
  border-radius: $scrollbar-border;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .5);
  background-color: #2c2c2c;
}

#scroll-trigger {
  height: 50px;
}

.circle-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, .2);
  border-top: 5px solid #fff;
  animation: animate 1.5s infinite linear;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
