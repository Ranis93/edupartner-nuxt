export default {
  data () {
    return {
      isHovering: false,
      hoveringItem: null
    }
  },
  methods: {
    noHovering () {
      this.isHovering = false
    },
    hoveringOnItem (num) {
      this.isHovering = true
      this.hoveringItem = num
    }
  }
}
