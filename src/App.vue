<script setup>
import { ref } from "vue";
import q from "./data/quizzes.json";

const quizzes = ref(q);
</script>

<template>
  <main class="flex flex-col gap-5 px-40">
    <section class="p-5 text-2xl font-bold text-center">
      <h1>Quiz</h1>
    </section>
    <section class="flex gap-10">
      <div
        v-for="v in quizzes"
        :key="v.id"
        class="bg-pink-100 overflow-clip grid relative rounded-lg h-[200px] w-[300px] outline-black/10 outline-offset-2 outline-4 hover:outline hover:cursor-pointer"
      >
        <img :src="v.img" :alt="v.name" />
        <div
          class="bg-gray-200 text-black/50 absolute bottom-0 w-full h-fit py-3 px-5 text-start place-self-end"
        >
          <h1 class="font-semibold text-lg">
            {{ v.name }}
          </h1>
          <p>{{ v.questions.length }} Questions</p>
        </div>
      </div>
    </section>
  </main>
</template>
