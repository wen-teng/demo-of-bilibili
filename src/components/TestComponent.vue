<script setup lang="ts">
import { ref } from 'vue'

// 定义props和设置props的默认值
withDefaults(
  defineProps<{ msg: string, msgOptional?: string }>(),
  {
    msgOptional: 'hello - world',
  },
)

// 定义emits
const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

// 数量的统计
const count = ref(0)
const increment = () => {
  count.value += 1
  emit('click', count.value)
}

</script>

<template>
  <div>this is test component</div>
  <button @click="increment">
    递增 {{ count }}
  </button>
  <h1>the value of msg = {{ msg }}</h1>
  <h2>the value of msgOptional = {{ msgOptional }}</h2>
</template>

<style scoped lang="scss">
</style>
