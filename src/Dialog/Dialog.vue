<script setup lang="ts">
import { withDefaults } from 'vue'
import './dialog.css'
import close from './close.png'

withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    content?: string
    closeBtnText?: string
    confirmBtnText?: string
    isShowConfirmBtn?: boolean
    isShowCloseBtn?: boolean
  }>(),
  {
    closeBtnText: '取 消',
    confirmBtnText: '确 认',
    isShowConfirmBtn: true,
    isShowCloseBtn: true
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirm', onClose: Function): void
}>()

function onConfirm() {
  emit('confirm', onClose)
}
function onClose() {
  emit('update:modelValue', false)
}
</script>

<template>
  <div class="--sk-wrapper" v-if="modelValue" @click.self="onClose">
    <div class="--sk-wrapper_body">
      <div class="--sk-wrapper_title">
        <span>{{ title }}</span>
        <img
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
            <button
              v-if="isShowConfirmBtn"
              class="--sk-wrapper_footer_button __primary"
              @click="onConfirm"
            >
              {{ confirmBtnText }}
            </button>
            <button
              v-if="isShowCloseBtn"
              class="--sk-wrapper_footer_button"
              @click="onClose"
            >
              {{ closeBtnText }}
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
