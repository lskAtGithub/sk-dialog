<script setup lang="ts">
import { ref } from 'vue'
import { SkMessageBox, useMessageBox } from './MessageBox/index'

let visible = ref(false)

function onOpen() {
  visible.value = true
}
function onOpen1() {
  useMessageBox
    .alert({
      title: '提示',
      content: '内容'
    })
    .then(() => {
      console.log(1234)
    })
    .catch(() => {
      console.log('catch')
    })
}
function onConfirm(close: Function) {
  close()
}
</script>

<template>
  <button @click="onOpen">组件式调用</button>
  <button @click="onOpen1">指令式调用</button>
  <sk-message-box
    title="组件式调用标题"
    closeBtnText="close"
    v-model="visible"
    @confirm="onConfirm"
  >
    <template v-slot:content> 组件式调用内容 </template>
  </sk-message-box>
</template>
./MessageBox/index
