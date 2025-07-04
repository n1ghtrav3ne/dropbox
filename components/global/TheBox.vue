<script setup lang="ts">
const prop = defineProps({
  text: String,
  textColor: String,
  backColor: String,
})
</script>

<template>
  <div
      class="flex flex-col justify-between p-[23px] w-full h-full"
      :style="{ backgroundColor: backColor }"
  >
    <span
        class="text-4xl text-left font-semibold"
        :style="{ color: textColor }"
    >
      {{ text }}
    </span>
    <slot />
  </div>
</template>
