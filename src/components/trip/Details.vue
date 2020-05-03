<template>
  <div>
    <div class="row">
      <div class="col-md-8 mt-4 mx-auto">
        <div class="card profile-card-5">
          <div class="card-img-block">
            <img :src="trip.imagePath" :alt="trip.name" class="card-img-top" />
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title">{{trip.name}}</h5>
            <p class="card-text">{{trip.description}}</p>
            <p class="card-text">{{trip.creator}}</p>
            <div class="row justify-content-md-center">
              <template v-if="isCreator">
                <div class="col-sm-4">
                  <router-link
                    :to="{name: 'edit', params: {id: this.id}}"
                    class="btn btn-lg btn-info btn-block text-uppercase font-weight-bold mb-2"
                  >Edit</router-link>
                </div>
                <div class="col-sm-4">
                  <button
                    @click="onDelete"
                    class="btn btn-lg btn-danger btn-block text-uppercase font-weight-bold mb-2"
                    type="button"
                  >Delete</button>
                </div>
              </template>
              <template v-else>
                <div class="col-sm-4">
                  <button
                    class="btn btn-lg btn-success btn-block text-uppercase font-weight-bold mb-2"
                    type="button"
                  >Done That</button>
                </div>
                <div class="col-sm-4">
                  <button
                    class="btn btn-lg btn-danger btn-login btn-block text-uppercase font-weight-bold mb-2"
                    type="button"
                  >Must Do</button>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tripsMixin from "@/mixins/trip-mixin";
import globalStore from "@/store/global";

export default {
  data: function() {
    return {
      trip: this.getTripById(this.id)
    };
  },
  name: "Details",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    isCreator() {
      let tripCreator = this.trip.creator;
      if (tripCreator) {
        tripCreator = tripCreator.toLowerCase();
      }
      return tripCreator === globalStore.user.email;
    }
  },
  created() {
    this.getTripById(this.id);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },
  mixins: [tripsMixin],
  methods: {
    onDelete() {
      this.deleteTrip(this.id);
    }
  }
};
</script>

<style scoped>
.profile-card-5 {
  margin-top: 20px;
}

.profile-card-5 .card-img-block {
  width: 91%;
  margin: 0 auto;
  position: relative;
  top: -20px;
}
.profile-card-5 .card-img-block img {
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.63);
}
.profile-card-5 h5 {
  color: #4e5e30;
  font-weight: 600;
}
.profile-card-5 p {
  font-size: 14px;
  font-weight: 300;
}
.btn {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}
</style>