<script setup lang="ts">
import MainDiv from '~/components/global/MainDiv.vue'
</script>

<template>
  <div class="relative w-full h-screen bg-white overflow-hidden">
    <!-- vertical lines -->
    <div class="absolute inset-0 flex justify-between pointer-events-none">
      <div class="relative h-full w-full flex justify-between px-[28%]">
        <template v-for="i in 4" :key="'v-'+i">
          <div
              :class="[
              'bg-blue-100 w-px',
            ]"
          ></div>
        </template>
      </div>
    </div>

    <!-- horizontal lines -->
    <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
      <div class="relative w-full h-full flex flex-col justify-between py-[2%]">
        <template v-for="i in 4" :key="'h-'+i">
          <div
              :class="[
              'bg-blue-100 h-px'
            ]"
          ></div>
        </template>
      </div>
    </div>

    <div class="relative w-full h-screen flex justify-center items-center z-10">
      <MainDiv>
        <!-- put the icon here -->
      </MainDiv>
    </div>
  </div>
</template>
