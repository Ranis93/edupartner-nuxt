export default {
  data () {
    return {
      isHovering: false,
      hoveringItem: 11
    }
  },
  methods: {
    noHovering () {
      this.isHovering = false
    },
    selectDefaultItem () {
      this.hoveringItem = 11
    },
    hoveringOnItem (num) {
      this.isHovering = true
      this.hoveringItem = num
    }
  }
}
