<template lang="pug">
.card 
  h3(@click="newWord()") {{ text }}
</template>

<script setup>
import { ref } from "vue";
import { generateWords } from "./use/randomWords";
const text = ref(generateWords(1));
function newWord() {
  text.value = generateWords();
}
</script>

<style>
.card {
  background-color: gray;
}
</style>