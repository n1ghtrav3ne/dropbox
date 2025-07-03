<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const centerBox = ref<HTMLElement | null>(null)
defineExpose({ centerBox })
const showText = ref(true)

onMounted(() => {
  const sideBoxes = document.querySelectorAll('.the-box')

  // Main timeline that pins the page and handles color + text
  gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: '+=1000', // full scroll range
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress

        // Color transition
        if (centerBox.value) {
          centerBox.value.style.backgroundColor = progress >= 0.1 ? '#2563eb' : '#ffffff'
          if(progress >= 0.1){
            centerBox.value.style.scale='0.8'
          }
        }

        // Show/hide text at 60%
        showText.value = progress < 0.6
      },
    },
  })

  // Animate center box from scale 1 to 0.2 from 60% to 100% (percentage-based)
  if (centerBox.value) {
    gsap.fromTo(
        centerBox.value,
        { scale: 1 },
        {
          scale: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: '60% top', // when scroll is at 60%
            end: '100% top',  // complete by 100%
            scrub: true,
          },
        }
    )
  }

  // Animate side boxes (same scroll range)
  gsap.from(sideBoxes, {
    x: (i) => ['200%', '-200%', '-200%', '200%'][i % 4],
    y: (i) => ['0%', '200%', '200%', '200%'][i % 4],
    scale: 1.1,
    stagger: 0.1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: '+=1000',
      scrub: true,
    },
  })
})
</script>


<template>
  <div class="relative w-full h-full">
    <TheBox class="the-box absolute !w-[44%] !h-[56%]" text="Typography" back-color="#3dd3ee" />
    <TheBox class="the-box absolute right-[45%] !w-[55%] !h-[42%]" text="Typography" back-color="#fad24b" />

    <div
        ref="centerBox"
        class="center-box origin-center grid grid-rows-6 absolute right-0 left-0 m-auto
         p-4 min-w-[60%] min-h-[92%] bg-white border border-blue-100
         transition-colors duration-500"
    >


    <div v-if="showText" class="text-center font-bold text-2xl row-span-1">
        بسم الله رحمن رحیم
      </div>

      <div v-if="showText" class="text-blue-600 text-4xl font-bold w-[75%] row-span-4">
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


    <TheBox class="the-box absolute top-[43%] right-[56%] !w-[44%] !h-[57%]" text="Typography" back-color="#ff8c19" />
    <TheBox class="the-box absolute top-[57%] !w-[55%] !h-[43%]" text="Typography" back-color="#892055" />
  </div>
</template>
