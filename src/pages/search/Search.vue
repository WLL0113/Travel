<template>
  <div class=content>
    <div>
      <search-Header></search-Header>
      <search-list></search-list>
    </div>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchList from './components/List'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchList
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
