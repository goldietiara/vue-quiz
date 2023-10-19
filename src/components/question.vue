<script setup>
import { defineProps } from "vue";
import { defineEmits } from "vue";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOptions = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>
<template>
  <div class="ml-5">
    <h1 class="mt-5 font-bold text-2xl">{{ question.text }}</h1>
    <ul
      class="flex flex-col gap-5 mt-5"
      v-for="option in question.options"
      :key="option.id"
    >
      <li>
        <input
          type="radio"
          :id="option.label"
          class="hidden peer"
          name="option"
          @click="emitSelectedOptions(option.isCorrect)"
        />
        <label
          :for="option.label"
          class="flex items-center gap-2 rounded-md px-[2px] py-[2px] outline-sky-500/50 outline-offset-2 outline-4 hover:outline hover:cursor-pointer peer-checked:outline"
        >
          <p
            class="w-[40px] h-[40px] bg-gray-200 flex justify-center items-center rounded-lg"
          >
            {{ option.label }}
          </p>
          <p class="pr-2">{{ option.text }}</p>
        </label>
      </li>
    </ul>
  </div>
</template>
