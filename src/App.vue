<script setup lang="ts">
import { ref } from 'vue'
import { SkMessageBox, useMessageBox } from './MessageBox/index'

let visible = ref(false)

function onOpen() {
  useMessageBox
    .confirm({
      title: '提示',
      content: '内容'
    })
    .then(() => {
      console.log(1234)
    })
    .catch(() => {
      console.log('catch')
    })
  // visible.value = true
}
function onConfirm(close: Function) {
  close()
}
</script>

<template>
  <button @click="onOpen">click me</button>
  <sk-message-box
    title="title"
    content="this is content"
    closeBtnText="close"
    v-model="visible"
    @confirm="onConfirm"
  >
    <template v-slot:content> parent content </template>
  </sk-message-box>
</template>
./MessageBox/index
