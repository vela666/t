<template>
  <div>
    hello world {{ a }}
  </div>
</template>

<script setup inheritAttrs name="Test2">
import {
  ref,
} from 'vue'

const a = ref('Test2')

</script>
