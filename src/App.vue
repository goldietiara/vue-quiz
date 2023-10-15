<script setup>
import { ref, watch } from "vue";
import q from "./data/quizzes.json";

const quizzes = ref(q);
const search = ref("");

watch(search, () => {
  quizzes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <main class="flex flex-col gap-5 px-40">
    <section class="p-5 flex justify-between text-2xl font-bold text-center">
      <h1>Quiz</h1>
      <input
        type="text"
        placeholder="Search"
        class="text-base font-normal px-2 border-b-[2px] focus:outline-none"
        v-model.trim="search"
      />
    </section>
    <section class="flex justify-between gap-10">
      <div
        v-for="v in quizzes"
        :key="v.id"
        class="bg-pink-100 overflow-clip grid relative rounded-lg h-[230px] w-[300px] outline-sky-500/30 outline-offset-2 outline-4 hover:outline hover:cursor-pointer"
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
