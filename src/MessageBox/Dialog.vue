<script setup lang="ts">
import { withDefaults } from 'vue'
// @ts-ignore-next-line
import close from './close.png'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    content?: string
    closeBtnText?: string
    confirmBtnText?: string
    isShowConfirmBtn?: boolean
    isShowCloseBtn?: boolean
    closeOnOther?: boolean
    /***
     * 以下为非组件的Props， 仅提供给指令式
     */
    closeFn?: Function
    confirmFn?: Function
    isDeclarative?: boolean
  }>(),
  {
    closeBtnText: '取 消',
    confirmBtnText: '确 认',
    isShowConfirmBtn: true,
    isShowCloseBtn: true,
    isDeclarative: false,
    closeOnOther: true
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirm', onClose: Function): void
  (e: 'close'): void
}>()

function isRunCloseFn() {
  if (props.isDeclarative) {
    if (props.closeFn && typeof props.closeFn === 'function') {
      props.closeFn()
      return false
    }
  }
  return true
}
function isRunConfirmFn() {
  if (props.isDeclarative) {
    if (props.confirmFn && typeof props.confirmFn === 'function') {
      props.confirmFn(props.closeFn!)
      return false
    }
  }
  return true
}

function onConfirm() {
  if (isRunConfirmFn()) {
    emit('confirm', onClose)
  }
}
function onClose() {
  if (isRunCloseFn()) {
    emit('update:modelValue', false)
    emit('close')
  }
}
function onCloseOnOther() {
  if (props.closeOnOther) {
    onClose()
  }
}
defineExpose()
</script>

<template>
  <div class="--sk-wrapper" v-if="modelValue" @click.self="onCloseOnOther">
    <div class="--sk-wrapper_body">
      <div class="--sk-wrapper_title">
        <span>{{ title }}</span>
        <img
          v-if="closeOnOther"
          @click="onClose"
          class="--sk-wrapper_title_close_icon"
          :src="close"
          alt="x"
        />
      </div>
      <div class="--sk-wrapper_content">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
      <div class="--sk-wrapper_footer">
        <slot name="footer">
          <div class="--sk-wrapper_footer_button_box">
            <div
              v-if="isShowConfirmBtn"
              class="--sk-wrapper_footer_button __primary"
              @click="onConfirm"
            >
              {{ confirmBtnText }}
            </div>
            <div
              v-if="isShowCloseBtn"
              class="--sk-wrapper_footer_button"
              @click="onClose"
            >
              {{ closeBtnText }}
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './dialog.css';
</style>
