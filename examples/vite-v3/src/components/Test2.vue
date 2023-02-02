<template>
  hello world {{ a }}
</template>

<script setup inheritAttrs name="Test2">
import {
  ref,
} from 'vue'

const a = ref('Test2')

</script>
