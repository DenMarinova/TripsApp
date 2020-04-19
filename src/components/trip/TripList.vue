<template>
  <div>
    <div class="row mx-3 my-3">
      <div clas="text-center">
        <a
          class="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2"
          type="submit"
        >Create new adventure</a>
      </div>
    </div>
    <hr />
    <div class="card-columns">
      <div v-for="trip in trips" :key="trip.tripID" clas="card">
        <router-link style="cursor: pointer" class="nav-link" to="/details">
          <div class="card border-0 shadow">
            <img v-bind:src="trip.imagePath" class="card-img-top" alt="..." />
            <div class="card-body ">
              <h5 class="card-title text-center mb-0">{{trip.name}}</h5>
              <div class="card-text text-black-50">{{trip.shortDescription}}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import tripsMixin from "@/mixins/trip-mixin";

export default {
  data: function() {
    return {};
  },
  name: "List",
  created() {
    this.getAllTrips();
  },
  mixins: [tripsMixin]
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.test {
  flex-basis: 25%;
}

h5 {
  color: #4e5e30;
  font-weight: 600;
}

.btn-login {
  background-color: #e68a00;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border-color: black;
}
</style>