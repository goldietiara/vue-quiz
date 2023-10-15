<script setup>
import { ref, watch } from "vue";
import q from "./data/quizzes.json";
import Card from "./components/Card.vue";

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
    <section class="flex gap-28">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
    </section>
  </main>
</template>
