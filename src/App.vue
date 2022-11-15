<template>
  <HeaderMFE :title="title" />
  <NavigationBar :navlist="list" />
  <router-view />
  <FooterMFE />
</template>

<script>
import { HeaderMFE, NavigationBar, FooterMFE } from 'vue-global-mfe'
import 'vue-global-mfe/dist/style.css'
import NavData from './db/navigationData.json'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderMFE,
    NavigationBar,
    FooterMFE
  },
  data() {
    return {
      list: NavData.data,
    }
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>