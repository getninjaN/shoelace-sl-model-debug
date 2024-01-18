<script setup>
  import { ref } from "vue"
  import "@shoelace-style/shoelace/dist/components/select/select.js"
  import "@shoelace-style/shoelace/dist/components/option/option.js"

  defineProps({
    msg: {
      type: String,
      required: true
    }
  })

  const stream = ref({ mode: "offline" })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{ stream.mode }}
      <sl-select v-sl-model="stream.mode">
        <small>Select mode</small>
        <sl-option value="pre">Pre live</sl-option>
        <sl-option value="live">Live</sl-option>
        <sl-option value="pause">Pause</sl-option>
        <sl-option value="post">Post live</sl-option>
        <sl-option value="offline">Offline</sl-option>
      </sl-select>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
