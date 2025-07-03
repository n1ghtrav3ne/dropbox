<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const centerRef = ref()
const showText = ref(true)

onMounted(() => {
  const centerBox = centerRef.value?.centerBox
  const sideBoxes = document.querySelectorAll('.the-sideBox')

  gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: '+=1000',
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress
        if (centerBox) centerBox.style.backgroundColor = progress >= 0.1 ? '#2563eb' : '#ffffff'
        showText.value = progress < 0.6
      }
    }
  })

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

  gsap.fromTo(sideBoxes,
      {
        x: (i) => ['200%', '200%', '-200%', '-200%'][i % 4],
        y: (i) => ['-200%', '200%', '-200%', '200%'][i % 4],
        scale: 1.3,
        opacity: 0,
      },
      {
        x: '0%',
        y: '0%',
        scale: 1,
        opacity: 1,
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
  <div class="relative w-full h-screen gap-[0.5%] flex flex-row p-4">
    <div class="flex w-[30%] flex-col gap-[1%] h-full">
      <TheBox class="the-sideBox" text="Typography" back-color="#fa551e" />
      <TheBox class="the-sideBox" text="Typography" back-color="#c8aff0" />
    </div>

    <CenterContainer ref="centerRef" />

    <div class="flex flex-col w-[30%] gap-[1%] h-full">
      <TheBox class="the-sideBox" text="Typography" back-color="#283750" />
      <TheBox class="the-sideBox" text="Typography" back-color="#b4dc19" />
    </div>
  </div>
</template>

