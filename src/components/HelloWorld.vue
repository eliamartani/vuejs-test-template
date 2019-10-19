<template>
  <div class="hello-world">
    <h1>
      Testing component
    </h1>
    <!-- Put it here -->
    <div>
      <p>
        {{ count }}
      </p>

      <button @click="setIncrement">
        Increment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    setIncrement () {
      this.count++
    }
  }
}
</script>
