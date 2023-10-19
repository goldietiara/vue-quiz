<script setup>
</script>
<template>
  <div class="ml-5">
    <h1 class="mt-5 font-bold text-2xl">{{ question.text }}</h1>
    <ul
      class="flex flex-col gap-5 mt-5"
    >
      <li>
        <input
          class="hidden peer"
        />
        <label
          class="flex items-center gap-2 rounded-md px-[2px] py-[2px] outline-sky-500/50 outline-offset-2 outline-4 hover:outline hover:cursor-pointer peer-checked:outline"
        >
          <p
            class="w-[40px] h-[40px] bg-gray-200 flex justify-center items-center rounded-lg"
          >
          </p>
        </label>
      </li>
    </ul>
  </div>
</template>
