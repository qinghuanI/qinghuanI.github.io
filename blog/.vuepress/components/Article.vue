<template>
  <article itemprop="blogPost" itemscope="itemscope" itemtype="https://schema.org/BlogPosting" class="ui-post">
    <meta itemprop="mainEntityOfPage" content="/2023/03/09/webstorm-%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97-%E4%B8%8B/">
    <header itemprop="name headline" class="ui-post-title"><a
      :href="path" class="nav-link">《{{title}}》</a></header>
    <p itemprop="description" class="ui-post-summary"></p>
    <footer><!---->
      <div class="ui-post-meta ui-post-date">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-clock">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <time pubdate="" itemprop="datePublished">
          {{formatDate}}
        </time>
      </div> <!----></footer>
  </article>
</template>

<script>

import dayjs from 'dayjs'
export default {
  name: "Article",
  props: ['title', 'path', 'date'],
  computed: {
    formatDate: function () {
      return dayjs(this.date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
.ui-post {
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(0,0,0,0.05)
}

.ui-post-title {
  font-family: PT Serif, Serif;
  font-size: 28px;
  border-bottom: 0;
}

.ui-post-title a {
  cursor: pointer;
  color: #000;
  transition: all 0.2s;
  text-decoration: none;
}

.ui-post-date {
  color: rgba(0,0,0,0.54);
  font-weight: 200;
}

.ui-post-meta {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
}

.ui-post-meta svg {
  margin-right: 5px;
  width: 14px;
  height: 14px;
}

</style>