<template>
  <div>
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Edit this adventure!</h3>
                  <form @submit.prevent="onEdit">
                    <div class="form-label-group">
                      <input
                        v-model="name"
                        name="name"
                        type="text"
                        id="inputName"
                        class="form-control"
                        placeholder="name"
                      />
                      <label for="inputName">Name your next challenge</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        v-model="imagePath"
                        type="text"
                        id="imagePath"
                        name="imagePath"
                        class="form-control"
                      />
                      <label for="imagePath">Image URL</label>

                      <div class="card" style="width: 18rem;">
                        <img :src="imagePath" :alt="name" class="card-img-top" />
                      </div>
                    </div>

                    <div class="form-label-group">
                      <textarea
                        v-model="description"
                        type="text"
                        id="description"
                        class="form-control"
                        name="description"
                        rows="6"
                      ></textarea>
                      <label for="imagePath">Short description</label>
                    </div>

                    <button
                      class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                    >Edit</button>
                  </form>
                </div>
              </div>
            </div>
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
    return {
      name: "",
      imagePath: "",
      description: ""
    };
  },
  name: "Edit",
  mixins: [tripsMixin],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.getData(this.id);
    // console.log(this.getDataForEdit)
  },
  methods: {
    async getData(id) {
      const res = await this.getForEdit(id);
      const oldData = res.data;
      this.name = oldData.name;
      this.imagePath = oldData.imagePath;
      this.description = oldData.description;
    },
    onEdit() { 
      const payload = {
          name: this.name,
          imagePath: this.imagePath,
          description: this.description
        }
      
      this.editTrip(payload, this.id);
    }
  }
};
</script>

<style scoped>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 1rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url("trip-images/new-special-interest-tourism-research-released-on-walking-and-hiking.CgpmeA.jpg");
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
  border-radius: 1rem;
}

.form-label-group > label {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>