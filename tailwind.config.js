module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem'
      }
    }
  },
  variants: {
    // order of array matters. higner index has priority
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
