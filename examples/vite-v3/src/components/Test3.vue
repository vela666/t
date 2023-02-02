<template>
  <div>
    hello world Tets3 调试
  </div>
</template>

<script setup inheritAttrs name="Test3">
const a = 10
const b = 20
const c = 30

function fn1() {
  let t = 10
  return () => {
    console.log(t)
    debugger
  }
}
fn1()()
</script>
