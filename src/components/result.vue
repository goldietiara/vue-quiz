<script setup>
import { defineProps } from "vue";

const { numberOfCorrectAnswer, questions } = defineProps([
  "numberOfCorrectAnswer",
  "questions",
]);
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-2 text-center">
    <h1 class="text-3xl font-bold mt-20">
      You scored {{ numberOfCorrectAnswer }} out of {{ questions }}!
    </h1>
    <p class="text-xl">Keep exploring and learning. 🚀🌟</p>
  </div>
</template>
