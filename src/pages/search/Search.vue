<template>
  <div class=content>
    <div>
      <Search-Header></Search-Header>
    </div>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
export default {
  name: 'Search',
  components: {
    SearchHeader
  }
}
</script>

<style lang="stylus" scoped>
 .content
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  background:#eee
</style>
