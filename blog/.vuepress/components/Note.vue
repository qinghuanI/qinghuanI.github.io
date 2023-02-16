<template>
  <article itemprop="blogPost" itemscope="itemscope" itemtype="https://schema.org/BlogPosting" class="ui-post">
    <meta itemprop="mainEntityOfPage" content="/2023/03/09/webstorm-%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97-%E4%B8%8B/">
    <header itemprop="name headline" class="ui-post-title"><a
      :href="path" class="nav-link">{{ title }}</a></header>
    <p itemprop="description" class="ui-post-summary"></p>
    <footer>
      <div itemprop="publisher author" itemtype="http://schema.org/Person" itemscope="itemscope"
           class="ui-post-meta ui-post-author">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-navigation">
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </svg>
        <span itemprop="name">qinghuanI</span> <span itemprop="address">
            &nbsp; in wuhan
          </span></div>
      <div class="ui-post-meta ui-post-date">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-clock">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <time pubdate="" itemprop="datePublished" datetime="2023-02-15T00:00:00.000Z">
          {{formatDate}}
        </time>
      </div>
      <div itemprop="keywords" class="ui-post-meta ui-post-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-tag">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7" y2="7"></line>
        </svg>
        <a v-for="tag in tags">
          {{tag}}
        </a></div>
    </footer>
  </article>
</template>

<script>

import dayjs from 'dayjs'

export default {
  name: "Note",
  props: ['title', 'path', 'date', 'tags'],
  computed: {
    formatDate: function () {
      return dayjs(this.date).format('YYYY-MM-DD')
    }
  },
}
</script>

<style scoped>
.ui-post {
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05)
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
  color: rgba(0, 0, 0, 0.54);
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

.ui-post-meta:not(:last-child) {
  margin-bottom: 3px;
  margin-right: 20px;
}

.ui-post-author {
  color: rgba(0,0,0,0.84);
  font-weight: 400;
}

.ui-post-tag a {
  color: inherit;
  font-weight: 200;
  text-decoration: none;
  margin-right: 5px;
}
</style>