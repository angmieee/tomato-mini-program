Component({
  properties: {
    text: {
      type: String,
      value: 'todo'
    },
    finished: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onStatusTap(event) {
      this.triggerEvent('changestatus')
    },
    onContentTap(event) {
      this.triggerEvent('editcontent', event.currentTarget.dataset.text)
    }
  }
})