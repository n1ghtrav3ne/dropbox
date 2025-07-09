<!-- File: components/ScrollEffect.vue -->
<template>
  <section ref="container" class="h-[200vh] relative bg-white">
    <!-- Sticky Center Element -->
    <div ref="centerBox" class="sticky top-0 h-screen flex justify-center items-center z-10">
      <div ref="mainBox" class="w-64 h-64 bg-blue-500 rounded-xl shadow-lg scale-100">
        <!-- Main Content -->
        <p class="text-white text-center text-xl p-4">Main Box</p>
      </div>
    </div>

    <!-- Side Elements -->
    <div ref="sideItems" class="absolute inset-0 flex justify-between items-center px-16 z-0">
      <div class="w-32 h-32 bg-red-500 opacity-0 translate-y-10 rounded-lg" />
      <div class="w-32 h-32 bg-green-500 opacity-0 translate-y-10 rounded-lg" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Register GSAP plugin
const {$gsap:gsap}=useNuxtApp();

const container = ref()
const mainBox = ref()
const sideItems = ref()

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
    },
  })

  // Shrink center box
  tl.to(mainBox.value, {
    scale: 0.5,
    duration: 1,
    ease: 'power2.out',
  })

  // Fade + move in side items
  tl.to(
      sideItems.value.children,
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
      },
      '<' // Start at same time as shrink
  )
})
</script>

<style scoped>
/* Optional smooth transitions for better appearance */
</style>
