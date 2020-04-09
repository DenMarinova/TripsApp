<template>
  <div id="app">
    <Header />
 
    <router-view> </router-view>
    <Footer />
 
  </div>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'



export default {
  name: 'App',
  components: { 
    Header,
    Footer,
    
  }
}
</script>

<style>

</style>
