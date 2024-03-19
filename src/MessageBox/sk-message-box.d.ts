import type { DefineComponent } from 'vue'

declare module 'sk-message-box' {
  interface IProps {
    title?: string
    content?: string
    closeBtnText?: string
    confirmBtnText?: string
    isShowConfirmBtn?: boolean
    isShowCloseBtn?: boolean
    closeOnOther?: boolean
  }
  const skMessageBox: {
    useMessageBox: (props: IProps) => Promise
    SkMessageBox: DefineComponent
  }

  export = skMessageBox
}
