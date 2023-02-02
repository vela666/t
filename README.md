# vite-plugin-vue-setup-expand

Make setup syntax sugar support names and other attributes

## Install (pnpm or npm or yarn)
```bash
pnpm i vite-plugin-vue-setup-expand
```
## Usage

- Configure in vite.config.js|ts. 
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExpand from 'vite-plugin-vue-setup-expand'

export default defineConfig({
  plugins: [vue(), vueSetupExpand()],
})
```

- SFC

```vue
<template>
  <div>hello world {{ a }}</div>
</template>

<script setup inheritAttrs lang="ts" name="App" >
  const a = 1
</script>
```
or
```vue
<template>hello world</template>
<script setup inheritAttrs="false" name="LayoutContainer"></script>
```
## License

MIT
