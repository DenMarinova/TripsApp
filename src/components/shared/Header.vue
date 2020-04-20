<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand font-weight-bold" to="/">ADVENTURE</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <div class="ml-auto">
        <ul class="navbar-nav">
          <template v-if="!isLogged">
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Sign In</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>
          </template>

          <template v-else>
            <li v-if="isLogged" class="nav-item">
              <router-link class="nav-link" to="/list">Trips</router-link>
            </li>
            <li v-if="!isLogged" class="nav-item">
              <router-link class="nav-link" to="/create">Create</router-link>
            </li>
            <span>
              <a @click="onLogout" class="nav-link">Logout</a>
            </span>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script> 
import authMixin from "../../mixins/auth-mixin";
import globalStore from "../../store/global"

export default {
  name: "Header",
  computed: {
    isLogged() {
      return globalStore.isLogged;
    }
  },
  mixins: [authMixin],
  methods: {
    onLogout(){ this.logout() }
  }
};
</script>

<style scoped>
.nav {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>