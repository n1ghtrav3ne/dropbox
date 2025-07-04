<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  PhLineSegment,
  PhLineSegments,
  PhLock,
  PhTextAa
} from "@phosphor-icons/vue"

gsap.registerPlugin(ScrollTrigger)

const centerRef = ref()
const showText = ref(true)
const bgContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const centerBox = centerRef.value?.centerBox
  const sideBoxes = document.querySelectorAll('.the-sideBox')
  const verLines=document.querySelectorAll('.v-line')
  const hoLines=document.querySelectorAll('.h-line')

  // ScrollTrigger for grid tightening
  if (bgContainer.value) {
    gsap.to(bgContainer.value, {
      backgroundSize: '20px 20px', // tighten the grid
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '100% top',
        scrub: true,
      },
    })
  }

  // Animate centerBox shrinking
  if (centerBox) {
    gsap.fromTo(centerBox, { scale: 1 }, {
      scale: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: '60% top',
        end: '100% top',
        scrub: true,
      },
    })
  }

  // Animate side boxes flying in
  gsap.fromTo(sideBoxes,
      {
        x: (i) => ['200%', '200%', '-200%', '-200%'][i % 4],
        y: (i) => ['-200%', '200%', '-200%', '200%'][i % 4],
      },
      {
        x: '0%',
        y: '0%',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: document.body,
          start: '0% top',
          end: '100% top',
          scrub: true,
        },
      }
  )
})
</script>

<template>
  <div ref="bgContainer" class="grid-bg z-10 relative w-full h-screen flex flex-row p-4 gap-[0.5%] overflow-hidden">
    <div class="flex w-[30%] flex-col gap-[1%] h-full">
      <TheBox class="the-sideBox !h-[45%] rounded-tr-lg"
              text="Typography"
              back-color="#fa551e"
              text-color="#4e0119">
        <PhTextAa :size="100" weight="bold" color="#4e0119" />
      </TheBox>

      <TheBox class="the-sideBox !h-[55%] rounded-br-lg"
              text="Motion"
              back-color="#c8aff0"
              text-color="#682760">
        <PhLineSegments :size="100" weight="thin" color="#682760" />
      </TheBox>
    </div>


    <CenterContainer ref="centerRef" />

    <div class="flex flex-col w-[30%] gap-[1%] h-full">
      <TheBox class="the-sideBox !h-[55%] rounded-tl-lg"
              text="Framework"
              back-color="#283750"
              text-color="#b4c8e1">
        <PhLineSegment :size="100" weight="thin" color="#b4c8e1" />
      </TheBox>

      <TheBox class="the-sideBox !h-[45%] rounded-bl-lg"
              text="Iconography"
              back-color="#b4dc19"
              text-color="#175641">
        <PhLock class="mr-auto" :size="100" weight="bold" color="#175641" />
      </TheBox>
    </div>
  </div>

  <!-- Grid overlay -->
  <div class="absolute inset-0 pointer-events-none">
    <!-- Vertical lines -->
    <div class="v-line absolute top-0 bottom-0 left-[25.5%] w-px bg-blue-100"></div>
    <div class="v-line absolute top-0 bottom-0 left-[40%] w-px bg-blue-100"></div>
    <div class="v-line absolute top-0 bottom-0 left-[60%] w-px bg-blue-100"></div>
    <div class="v-line absolute top-0 bottom-0 left-[74.3%] w-px bg-blue-100"></div>

    <!-- Horizontal lines -->
    <div class="h-line absolute left-0 right-0 top-[4%] h-px bg-blue-100"></div>
    <div class="h-line absolute left-0 right-0 top-[35%] h-px bg-blue-100"></div>
    <div class="h-line absolute left-0 right-0 top-[65%] h-px bg-blue-100"></div>
    <div class="h-line absolute left-0 right-0 top-[95.5%] h-px bg-blue-100"></div>
  </div>
</template>

<style scoped>

</style>
