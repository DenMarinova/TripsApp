<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Welcome!</h3>
                <form @submit.prevent="onSignUp">
                  <div class="form-label-group">
                    <input
                      name="email"
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Email address"
                      v-model="email"
                      @blur="$v.email.$touch"
                    />
                    <label for="inputEmail">
                      Email address
                      <template v-if="$v.email.$error">
                        <span v-if="!$v.email.required">is required!</span>
                        <span v-if="!$v.email.email">is invalid!</span>
                      </template>
                    </label>
                  </div>

                  <div class="form-label-group">
                    <input
                      name="password"
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      v-model="password"
                      @blur="$v.password.$touch"
                    />
                    <label for="inputPassword">
                      Password
                      <template v-if="$v.password.$error">
                        <span v-if="!$v.password.required">is required!</span>
                        <span v-if="!$v.password.minLength">should be longer than 5 symbols!</span>
                      </template>
                    </label>
                  </div>
                  <button
                  :disabled="$v.$invalid"
                    class="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2"
                    type="submit"
                  >Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authAxios from "@/axios-auth";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Signup",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSignUp() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      authAxios
        .post("/accounts:signUp", payload)
        .then(res => {
          const { idToken, localId } = res.data;
          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
span{
  color: red
}

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 1rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url("auth-images/wallpaper-2970199.jpg");
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