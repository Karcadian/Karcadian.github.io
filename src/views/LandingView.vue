<template>
    <section class="min-h-[calc(100vh*0.80)] w-full flex flex-col items-center mb-52" id="landing-page">        
        <!-- Transparent Card -->
        <div class="relative flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-7 flex-col md:flex-row m-auto p-4 bg-white dark:bg-slate-900 bg-opacity-70 rounded-lg shadow-lg">
            <!-- University Logo -->
            <div v-if="content.logo.link" class="absolute top-4 right-4 w-20 h-20">
                <img
                    :src="getImageUrl(content.logo.link)"
                    class="logo w-full h-full object-contain dark:invert dark:grayscale dark:contrast-100"
                    alt="University Logo"
                />
            </div>
            <div class="relative w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden rounded-full">
                <img
                    :class="['w-full h-full object-cover rounded-full transition-all motion-reduce:transition-none duration-500 delay-[400ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']"
                    :src="getImageUrl(content.portraitLink)"
                    alt="Profile Picture"
                    class="object-cover object-center"
                />
            </div>
            <div class="flex flex-col space-y-2">
                <p :class="['text-lg lg:text-xl transition-all motion-reduce:transition-none duration-500 delay-[500ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.intro }}</p>
                <h1 :class="['text-2xl lg:text-4xl font-bold transition-all motion-reduce:transition-none duration-500 delay-[550ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.name }}</h1>
                <p :class="['text-sm lg:text-base text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.message }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    content: Object,
    showTransition: Boolean
})

// Static Images
const showIntro = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}
</script>

<style scoped>
/* Ensure the section is positioned correctly */
section {
    position: relative;
}

.adjust-image {
    position: relative;
    top: -20%; /* Adjust as needed */
}
</style>
