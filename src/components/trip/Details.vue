<template>
  <div  >
    <div class="row">
      <div class="col-md-4 mt-4 mx-auto">
        <div class="card profile-card-5">
          <div class="card-img-block">
            <img class="card-img-top" src alt />
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>

            <!-- <button class="btn btn-lg btn-success  btn-block  text-uppercase font-weight-bold mb-2" type="button"
              >Done That</button>
            <hr>-->
            <div>
              <a
                class="btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mb-2"
              >Edit</a>

              <button
                class="btn btn-lg btn-danger btn-block text-uppercase font-weight-bold mb-2"
                type="button"
              >Delete</button>
            </div>
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
export default {};
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

.btn-login {
  background-color: #e68a00;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.btn {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}
</style>