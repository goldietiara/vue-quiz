<script setup>
import { RouterLink } from "vue-router";

const { quiz } = defineProps(["quiz"]);
</script>
<template>
  <RouterLink :to="`/Quiz/${quiz.id}`">
    <div
      class="overflow-clip grid relative rounded-lg h-[230px] w-[300px] outline-sky-500/50 outline-offset-2 outline-4 hover:outline hover:cursor-pointer"
    >
      <img :src="quiz.img" :alt="quiz.name" />
      <div
        class="bg-gray-200 text-black/50 absolute bottom-0 w-full h-fit py-3 px-5 text-start place-self-end"
      >
        <h1 class="font-semibold text-lg">
          {{ quiz.name }}
        </h1>
        <p>{{ quiz.questions.length }} Questions</p>
      </div>
    </div>
  </RouterLink>
</template>
