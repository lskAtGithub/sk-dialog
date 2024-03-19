# sk-message-box

基于**Vue3**的消息弹窗&模态窗的轻量级组件，带TS类型，大小仅不到8kb，分为组件式调用以及指令时调用,可用于一些小型项目，在仅需要弹窗or模态窗操作时可使用该库，方便简洁。


### 安装
```
npm i sk-message-box
```

### 使用示例
##### 组件式调用
```
<script setup lang="ts">
import { ref } from 'vue'
import { SkMessageBox } from 'sk-message-box'

let visible = ref(false)

function onOpen() {
  visible.value = true
}
function onConfirm(close: Function) {
  close()
}
</script>

<template>
  <button @click="onOpen">组件式调用</button>
  <sk-message-box
    title="组件式调用标题"
    closeBtnText="close"
    v-model="visible"
    @confirm="onConfirm"
  >
    <template v-slot:content> 组件式调用内容 </template>
  </sk-message-box>
</template>

```
##### 指令式调用
```
<script setup lang="ts">
import { useMessageBox } from './MessageBox/index'

function onOpen() {
  useMessageBox
    .alert({
      title: '提示',
      content: '内容'
    })
    .then(() => {
      console.log('success')
    })
    .catch(() => {
      console.log('catch')
    })
}
</script>

<template>
  <button @click="onOpen">指令式调用</button>
</template>
```

### 文档
##### 组件调用文档

| 属性      | 默认值 | 是否必填 | 说明 |
| ----------- | ----------- | ----------- | ----------- |
| v-model/modelValue | - | 是 | 控制模态窗的显隐 |
| title   | '标题' | 否 | 模态窗标题 |
| content   | - | 否 | 模态窗内容， 支持v-slot:content 自行写入内容 |
| closeBtnText   | '取 消' | 否 | 取消按钮的显示文本 |
| confirmBtnText   | '确 认' | 否 | 确认按钮的显示文本 |
| isShowConfirmBtn   | true | 否 | 是否显示确认按钮 |
| isShowCloseBtn   | true | 否 | 是否显示取消按钮 |
| closeOnOther   | true | 否 | 是否可通过点击遮罩or关闭图标来关闭弹窗 |
##### slot
| name      | 说明 |
| ----------- | ----------- |
| content | 模态窗内容插槽 |
| footer   | 模态窗底部按钮插槽 |
##### 方法
| name      | 说明 | 返回值 |
| ----------- | ----------- | ----------- |
| confirm | 点击确认时触发，该函数的参数中可接受一个close方法，用于关闭弹窗，需要自行手动调用 | void |
| close   | 关闭时触发 | void |

##### 指令调用文档
| 属性      | 默认值 | 是否必填 | 说明 |
| ----------- | ----------- | ----------- | ----------- |
| title   | '标题' | 否 | 模态窗标题 |
| content   | - | 否 | 模态窗内容， 支持v-slot:content 自行写入内容 |
| closeBtnText   | '取 消' | 否 | 取消按钮的显示文本 |
| confirmBtnText   | '确 认' | 否 | 确认按钮的显示文本 |
| isShowConfirmBtn   | true | 否 | 是否显示确认按钮 |
| isShowCloseBtn   | true | 否 | 是否显示取消按钮 |
| closeOnOther   | true | 否 | 是否可通过点击遮罩or关闭图标来关闭弹窗 |


