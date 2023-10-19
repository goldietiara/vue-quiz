<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between text-2xl">
      <RouterLink
        to="/"
        class="text-sm font-semibold w-[40px] h-[40px] bg-gray-200 flex justify-center items-center rounded-lg outline-sky-500/50 outline-offset-2 outline-4 hover:outline hover:cursor-pointer"
      >
        X
      </RouterLink>
    </div>

    <div>
      <div class="w-[30%] h-[50px] border-4 border-sky-500/50 rounded-lg">
      </div>
    </div>
  </div>
</template>
