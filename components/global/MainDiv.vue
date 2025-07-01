<script setup lang="ts">

</script>
<template>
  <div class="grid grid-rows-6 w-[44%] p-4 min-h-[92%] bg-white border border-blue-100">
    <div class="text-center font-bold text-2xl row-span-1">
      بسم الله رحمن رحیم
    </div>

    <h1 class="text-blue-600 text-4xl font-bold w-[75%] row-span-4">
      <div>
        شرکت توسعه مثلث آفتاب
      </div>

      <div>
        معمار موفقیت شما
      </div>
    </h1>

    <div class="row-span-1 flex items-end">
      <slot />
    </div>
  </div>
</template>