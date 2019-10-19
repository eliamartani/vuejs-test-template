<template>
  <div class="hello-world">
    <h1>
      Testing component
    </h1>
    <!-- Put it here -->
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          :src="item.url"
          :alt="item.id"
        >
      </li>
    </ul>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          :src="item.url"
          :alt="item.id"
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: []
  }),
  async created () {
    await this.loadCatApi()
  },
  methods: {
    async loadCatApi () {
      try {
        const { data } = await this.$http.get('https://api.thecatapi.com/v1/images/search')

        this.list = data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="css">
img {
  width: 500px;
}
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>