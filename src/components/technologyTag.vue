<template>
  <div class="tag" :style="styleObj">
    <div class="tag__icon" v-if="tagIcon">
      <img :src="tagIcon" :alt="iconName" />
    </div>
    <div class="tag__text">
      <span>{{ tagText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styleObj: {
      type: Object,
      default: new Object({
        "--text-color": "#000000",
        "--background-color": "#efefef",
        "--text-color-hover": "#e2e2e2",
        "--background-color-hover": "#1a1c33"
      })
    },
    tagIcon: {
      type: String
    },
    iconName: {
      type: String,
      default: "Placeholder"
    },
    tagText: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.tag {
  position: relative;
  color: var(--text-color);
  background-color: var(--background-color);
  font-size: 0.9rem;
  height: fit-content;
  display: flex;
  align-content: center;
  flex-direction: row;
  border-radius: 5px;
  padding: 0.5em;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
.tag:hover {
  color: var(--text-color-hover);
  background-color: var(--background-color-hover);
}
.tag__icon {
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1ch;
}
.tag__icon img {
  pointer-events: none;
  height: 1em;
}
.tag__text {
  pointer-events: none;
  text-transform: capitalize;
}
</style>
