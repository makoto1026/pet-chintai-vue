<template>
  <div class="priority-container">
    <img class="image" :src="imageUrl" alt="Priority Image" />
    <p class="head-title">{{ headTitle }}</p>
    <a v-if="link" :href="link" target="_blank" class="link">
      <span>
        <p class="title"><span class="underline">{{ title }}</span></p>
      </span>
    </a>
    <p v-else class="title"><span class="underline">{{ title }}</span></p>
    <div class="benefits">
      <div class="benefits-title">優待特典</div>
      <div v-if="benefitsNum === 1" class="benefits-container">
        <ul>
          <li>{{ benefitsOne }}</li>
        </ul>
      </div>
      <div v-if="benefitsNum > 1" class="benefits-container">
        <ul>
          <li><span>①</span>{{ benefitsOne }}</li>
          <li v-if="benefitsTwo !== ''"><span>②</span>{{ benefitsTwo }}</li>
        </ul>
      </div>
    </div>
    <p class="description" v-html="description"></p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  imageUrl: String,
  headTitle: String,
  title: String,
  description: String,
  benefitsNum: Number,
  benefitsOne: String,
  benefitsTwo: String,
  link: String,
});
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  margin-bottom: 8px;
}

.head-title {
  font-size: $xs;
  color: $primary;
  line-height: 18px;
  text-align: center;
  margin-bottom: 8px;
  font-family: $font-gothic;
}

.title {
  font-size: $md;
  font-weight: bold;
  color: $primary;
  margin-bottom: 24px;
  line-height: 28px;
  text-align: center;
  font-family: $font-gothic;
}

.link {
  text-decoration: none;
}

.description {
  font-size: $sm;
  color: $text;
  margin-bottom: 16px;
  line-height: 22px;
  font-family: $font-gothic;
}

.benefits {
  padding: 10px 10px 16px 10px;
  margin-bottom: 20px;
  background-color: $white;
  border-radius: 10px;
}

.benefits-title {
  font-size: $xs;
  font-weight: bold;
  color: $secondary;
  margin-bottom: 8px;
  font-family: $font-gothic;
}

ul {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

li {
  font-size: $xs;
  color: $primary;
  font-weight: bold;
  font-family: $font-gothic;
}

li span {
  color: $text;
  margin-right: 4px;
}

.underline {
  padding-bottom: 4px;
  display: inline;
  border-bottom: 1px solid $primary;
}
</style>