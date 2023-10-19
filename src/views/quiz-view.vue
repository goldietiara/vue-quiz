<script setup>
import QuizHeader from "../components/quiz-header.vue";
import Question from "../components/question.vue";
import Result from "../components/result.vue";
import { useRoute } from "vue-router";
import quizzes from "../data/quizzes.json";
import { computed, ref } from "vue";

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizzes.find((q) => q.id === quizId);
const currentQuestion = ref(0);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

const questionStatus = computed(
  () => `${currentQuestion.value}/${quiz.questions.length}`
);
const barPercentage = computed(
  () =>
    `w-[${Math.round((currentQuestion.value / quiz.questions.length) * 100)}%]`
);

const onSelectedOption = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswer.value++;
  }
  currentQuestion.value++;
  if (quiz.questions.length === currentQuestion.value) {
    showResult.value = true;
  }
};
</script>

<template>
  <main class="flex flex-col gap-5 px-40 mt-5">
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <Question
      :question="quiz.questions[currentQuestion]"
      @selectOption="onSelectedOption"
      v-if="!showResult"
    />
    <Result
      v-else
      :numberOfCorrectAnswer="numberOfCorrectAnswer"
      :questions="quiz.questions.length"
    />
  </main>
</template>
