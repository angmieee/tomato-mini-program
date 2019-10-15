Component({
  properties:{
    visible:{
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    }
  },
  data:{
    value: '',
  },
  methods:{
    confirm(){
      if(this.data.value){
        this.triggerEvent('confirm', this.data.value)
        this.setData({ visible: false, value: '' })
      }
    },
    cancel(){
      this.setData({ visible: false })
    },
    watchValue(e){
      this.data.value = e.detail.value
    }
  }
})