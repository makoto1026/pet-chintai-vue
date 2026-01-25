<template>
  <section class="news-section">
    <h2>News</h2>
    <ul>
      <li v-for="(news, index) in newsList" :key="index">
        <span class="date">{{ news.date }}</span>
        <span class="content">{{ news.content }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      newsList: [
        { date: '2024-12-01', content: 'お知らせ①' },
        { date: '2024-11-15', content: 'お知らせ②' },
        { date: '2024-11-01', content: 'お知らせ③' },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.news-section {
  padding: 60px;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #343a40;

    @media screen and (max-width: 500px) {
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    li {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.5);
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      color: #343a40;

      @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 10px;
        justify-content: start;
        align-items: baseline;
        padding: 1rem;
      }

      .date {
        font-weight: bold;
      }

      .content {
        color: #343a40;
      }
    }
  }
}
</style>
