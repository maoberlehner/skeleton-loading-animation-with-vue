<template>
  <div class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl">
    <h1>Skeleton Loading Animation with Vue.js</h1>

    <section class="App__example o-vertical-spacing o-vertical-spacing--l">
      <data-frame>
        <div slot-scope="{ data: blogPosts, error, loading }">
          <p
            v-if="error"
            class="error"
          >
            There was an error! Please try again.
          </p>
          <ul
            v-else
            class="o-vertical-spacing"
          >
            <template v-if="loading">
              <li
                v-for="n in 3"
                :key="n"
              >
                <blog-post loading/>
              </li>
            </template>
            <template v-else>
              <li
                v-for="blogPost in blogPosts"
                :key="blogPost.id"
              >
                <blog-post>
                  <img
                    slot="figure"
                    :src="blogPost.image"
                    alt=""
                  >
                  <template slot="headline">
                    {{ blogPost.title }}
                  </template>
                  {{ blogPost.snippet }}
                  <span slot="meta">
                    {{ blogPost.date }}
                  </span>
                </blog-post>
              </li>
            </template>
          </ul>
        </div>
      </data-frame>
    </section>
  </div>
</template>

<script>
import BlogPost from './components/BlogPost.vue';
import DataFrame from './components/DataFrame';

export default {
  name: `App`,
  components: {
    BlogPost,
    DataFrame,
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/**/*';
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '~@avalanche/object-media';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l,
  .o-vertical-spacing--xl,
} from ~@avalanche/object-vertical-spacing';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}

.error {
  color: red;
}
</style>
