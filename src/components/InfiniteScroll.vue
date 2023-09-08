<template>
  <div class="grid-container" id="1">
    <div class="grid-item" v-for="post in postsList">
      <Post :imgId=post.id :imgSrc=post.thumbnail :imgUpVotes=post.price :imgDownVotes=post.stock />
    </div>
    <div ref="infinitescrolltrigger" id="scroll-trigger" />
    <div class="circle-loader" v-if="showloader" />
  </div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue';
</script>

<script lang="ts">
import { ref } from 'vue';
import getPosts from '../api/getPosts.ts';

export default {
  data: () => {
    return {
      currentPage: 1,
      maxPerPage: 8,
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
$scrollbar-border: 12px;

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 600px;
  width: 100%;
  gap: 10px;
  box-sizing: border-box;
  padding: 0px 5px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.grid-item {
  display: flex;
  position: relative;
}

.grid-item .grid-container::-webkit-scrollbar-track {
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
  animation: loading 1.5s infinite linear;
}

@keyframes loading {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
