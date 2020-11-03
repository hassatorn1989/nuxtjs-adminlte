<template>
<div>
  <Navbar />
  <Sidebar />
  <nuxt />
  <Footer />
</div>
</template>

<script>
import Navbar from './../components/_Navbar';
import Sidebar from './../components/_Sidebar';
import Footer from './../components/_Footer';
export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>
