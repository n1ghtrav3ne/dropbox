<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {PhDropboxLogo, PhImage, PhQuotes, PhSquareLogo} from "@phosphor-icons/vue";

gsap.registerPlugin(ScrollTrigger)

const centerBox = ref<HTMLElement | null>(null)
defineExpose({ centerBox })
const showText = ref(true)
const textWhite=ref(false)

onMounted(() => {
  const sideBoxes = document.querySelectorAll('.the-box')

  // Main timeline that pins the page and handles color + text
  gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: '+=1200', // full scroll range
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress
        textWhite.value = progress >= 0.1
        showText.value = progress < 0.5
      },
    },
  })

  // Animate center box scale and color from 0% to 10%
  if (centerBox.value) {
    // First animation: scale down and change color at 10%
    gsap.to(centerBox.value, {
      backgroundColor: '#2563eb',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: document.body,
        start: '0% top',
        end: '10% top',
        scrub: true,
      },
    })

    // Second animation: further scale down from 60% to 100%
    gsap.to(centerBox.value, {
      scale: 0.2,
      height:'65%',
      width:'50%',
      top:'17%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: '40% top',
        end: '100% top',
        scrub: true,
      },
    })
  }

  // Animate side boxes (same scroll range)
  gsap.from(sideBoxes, {
    x: (i) => ['200%', '-200%', '-200%', '10%'][i % 4],
    y: (i) => ['-10%', '-200%', '10%', '250%'][i % 4],
    scale: 1,
    stagger: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: '20% top',
      end: '100% top',
      scrub: true,
    },
  })
})</script>


<template>
  <div class="relative w-full h-full">
    <TheBox class="the-box absolute !w-[44%] !h-[56%]"
            text="استارت اپ استودیو"
            back-color="#3dd3ee"
            text-color="#055463">
      <PhDropboxLogo :size="100" />
    </TheBox>
    <TheBox class="the-box absolute right-[45%] !w-[55%] !h-[42%]"
            text="استارت اپ استودیو"
            back-color="#fad24b"
            text-color="#684505">
      <PhQuotes :size="100" weight="bold" color="#684505" />
    </TheBox>

    <!-- this is the center box of the page -->
    <div
        ref="centerBox"
        class="center-box origin-center z-50 grid grid-rows-6 absolute top-[2.5%] right-0 left-0 m-auto
         p-4 w-[80%] h-[95%] bg-white border-blue-100
         transition-colors duration-1000"
    >

    <div class="text-center font-bold text-2xl row-span-1 transition-opacity duration-700"
         :class="{ 'opacity-100': showText, 'opacity-0': !showText }"
    >
        بسم الله رحمن رحیم
      </div>

      <div class="text-4xl font-bold w-[75%] row-span-4 transition-opacity duration-700"
           :class="[textWhite ? 'text-white' : 'text-blue-600', showText ? 'opacity-100' : 'opacity-0']"
           >
        <div>
          شرکت توسعه مثلث آفتاب
        </div>

        <div>
          معمار موفقیت شما
        </div>
      </div>

      <div class="row-span-1 flex items-end">
        <slot />
      </div>
    </div>


    <TheBox class="the-box absolute top-[43%] right-[56%] !w-[44%] !h-[57%]"
            text="استارت اپ استودیو"
            back-color="#ff8c19"
            text-color="#6d2e09">
      <PhSquareLogo :size="100" color="#6d2e09" />
    </TheBox>
    <TheBox class="the-box absolute top-[57%] !w-[55%] !h-[43%]"
            text="استارت اپ استودیو"
            back-color="#892055"
            text-color="#ffafa5">
      <PhImage :size="180" color="#ffafa5" />
    </TheBox>
  </div>
</template>
