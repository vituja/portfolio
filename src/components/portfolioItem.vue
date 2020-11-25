<template>
  <div class="portfolio-item">
    <img class="portfolio-item__preview" :src="itemImage" :alt="itemTitle" />
    <a
      href="https://vibrant-thompson-d88279.netlify.app/"
      target="blank"
      class="portfolio-item__info"
    >
      <div class="portfolio-item__title">
        <h3>{{ itemTitle }}</h3>
      </div>
      <p class="portfolio-item__description" v-if="itemDesc !== null">
        {{ itemDesc }}
      </p>
      <div class="portfolio-item__tags">
        <div class="portfolio-item__tag" v-for="tag in tags" :key="tag">
          <span class="portfolio-item__tag-name">
            {{ tag }}
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    itemImage: String,
    tags: Array,
    itemTitle: {
      type: String,
      default: "Placeholder"
    },
    itemDesc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.portfolio-item {
  overflow: hidden;
  position: relative;
  max-width: 50%;
  height: auto;
}

.portfolio-item__preview {
  max-width: 100%;
}
.portfolio-item__info {
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  opacity: 0;
  cursor: pointer;
  padding: 1.5rem;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: var(--main-dark-color);
  transition: all 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.portfolio-item__title {
  position: relative;
  transform: translateX(-2rem);
  opacity: 0;
  transition: all 0.5s ease;
  h3 {
    font-size: 1.4rem;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: var(--main-dark-color);
  }
}
.portfolio-item__description {
  transform: translateX(2rem);
  opacity: 0;
  transition: all 0.5s ease;
}
.portfolio-item__tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  transform: translateX(2rem);
  opacity: 0;
  transition: all 0.5s ease;
}
.portfolio-item__tag {
  height: fit-content;
  padding: 0.5rem;
  background-color: var(--complementary-light-color);
  border-radius: 5px;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}
.portfolio-item__tag:hover {
  color: var(--main-light-color);
  background-color: var(--main-dark-color);
}
.portfolio-item:hover .portfolio-item__info {
  background: rgba(255, 255, 255, 0.7);
  opacity: 1;
  * {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
