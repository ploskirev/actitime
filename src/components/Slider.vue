<template>
  <div class="slider">
    <div class="slider__page">
      <SliderItem v-for="item of topicsPage" :key="item.id" :item="item"/>
    </div>
    <div class="slider__pagination">
      <button 
        class="slider__button" 
        :class="{slider__button_active: currentPage === btn}" 
        v-for="btn of pages" 
        :key="btn" 
        @click="changeSlide(btn)"
        tabindex="0"
      >
      </button>
    </div>
  </div>
</template>

<script>
import SliderItem from '../components/SliderItem.vue';

export default {
  name: 'Slider',
  components: {
    SliderItem
  },
  data: function() {
    return {
      currentPage: 1,
      windowSize: document.documentElement.clientWidth,
      topics: this.$store.getters.topics,
    }
  },
  computed: {
    postsOnPage: function() {
      return (this.windowSize < 1320) ? 1 : 2;
    },
    pages: function() {
      return this.topics.length / this.postsOnPage;
    },
    topicsPage: function() {
      const startIdx = (this.currentPage - 1) * this.postsOnPage;
      const endIdx = startIdx + this.postsOnPage;
      return this.topics.slice(startIdx, endIdx);
    }
  },
  methods: {
    onResize: function() {
      this.windowSize = document.documentElement.clientWidth;
    },
    changeSlide: function(number) {
      this.currentPage = number;
    }
  },
  mounted: function() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.onResize);
  }
}
</script>

<style lang="scss" scoped>
/* autoprefixer grid: autoplace */

@import '../assets/styles/variables.scss';

.slider {
  width: 1200px;
  margin: 0 auto;
  background-color: $sliderBg;
  border-radius: 50px;
  padding: 97px 120px 60px 60px;

  &__page {
    display: -ms-grid;
    display: grid;
    height: 368px;
    -ms-grid-columns: 450px 90px 450px;
    grid-template-columns: repeat(2, 450px);
    justify-content: end;
    justify-items: end;
    grid-column-gap: 90px;
    margin-bottom: 50px;
  }

  &__pagination {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__button {
    width: 6px;
    height: 6px;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 8.1px;
    cursor: pointer;

    &:focus {
      border: 1px solid $third;
    }

    &_active {
      width: 10px;
      height: 10px;
      background-color: $third;
    }
  }
}

@media (max-width: 1319px) {
  .slider {
    width: 682px;
    padding-left: 52px;

    &__page {
      grid-template-columns: 487px;
      justify-content: start;
    }

    &__button {
      margin: 0 8.1px;
    }
  }
}

@media (max-width: 991px) {
  .slider__page {
    margin-left: 0;
  }
}

@media (max-width: 767px) {
  .slider {
    width: 100%;
    border-radius: 0;
    padding: 38px 20px 36px 20px;

    &__page {
      margin: 0 auto 43px auto;
      grid-template-columns: 1fr;
      justify-content: center;
      justify-items: center;
    }

    &__pagination {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
