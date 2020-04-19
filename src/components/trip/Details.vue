<template>
  <div>
    <div class="row">
      <div class="col-md-8 mt-4 mx-auto">
        <div class="card profile-card-5">
          <div class="card-img-block">
            <img v-bind:src="trips[0].imagePath" class="card-img-top"    />
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title">{{trips[0].name}}</h5>
            <p class="card-text">{{trips[0].description}}</p>

             <div class="row justify-content-md-center">
    <div class="col-sm-4">
       <router-link
                class="btn btn-lg btn-info btn-block text-uppercase font-weight-bold mb-2"
                to="/details/edit"
              >Edit</router-link>
    </div>
    <div class="col-sm-4">
      <button
                class="btn btn-lg btn-danger btn-block text-uppercase font-weight-bold mb-2"
                type="button"
              >Delete</button>
    </div>
    </div>

            <!-- <button class="btn btn-lg btn-success  btn-block  text-uppercase font-weight-bold mb-2" type="button"
              >Done That</button>
            <hr>-->
             
            <!-- <div ">
            <button class="btn btn-lg btn-danger btn-login btn-block  text-uppercase font-weight-bold mb-2" type="button"
            >Must Do</button>
            </div>-->
          </div>
        </div>
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
  name: 'Details',
  props: {
    id: {
      type: String,
      required: true
    }
  },
   created() {
    this.getTripById(this.id);
  },
  mixins: [tripsMixin]
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