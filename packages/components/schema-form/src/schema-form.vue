<script setup lang="ts">
defineProps<{ name: string }>()

defineOptions({
  name: 'SchemaForm',
})
</script>

<template>
  <div>
    <button class="test">{{ name || '测试' }}</button>
  </div>
</template>
<style lang="scss">
.test{
  background: antiquewhite;
  display: flex;
  justify-content: center;
  width: 400px;
}
</style>