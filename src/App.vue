<script setup lang="ts">
import { ref } from 'vue'
import Dialog from './Dialog/Dialog.vue'

let visible = ref(false)

function onOpen() {
  visible.value = true
}
function onConfirm(close: Function) {
  close()
}
</script>

<template>
  <button @click="onOpen">click me</button>
  <Dialog
    title="title"
    content="this is content"
    closeBtnText="close"
    v-model="visible"
    @confirm="onConfirm"
  >
    <template v-slot:content>
      parent content
    </template>
  </Dialog>
</template>
