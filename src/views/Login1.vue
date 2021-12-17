<template>
<div>
  <meta charset="utf-8">
  <title>Login</title>
  <form action="action_page.php" method="post">
    <div class="imgcontainer">
      <!--<img src="../assets/logo.png" alt="Avatar" class="avatar">-->
      <h3> </h3>
    </div>

    <div>
      <div class="login_container">
        <div class="login_box">
        <span class="sinta"> 
          <span class= "box">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                      <h1>Sign In</h1>
                        <form class="form-group">
                          <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required><br>
                          <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required><br>
                          <input type="submit" class="btn btn-primary" @click="doLogin">
                          <p>Don't have an account? <br><br><a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                          <br></p>
                          <p><a href="#">Forgot your password?</a></p>
                        </form>
                  </div>
                </div> 
              </div>
            </span>
        </span>
      </div>
    </div>
  </form>
</div>
</template>

<style lang="less" scoped>

body {
  background-color: rgb(255, 255, 255);
}

.sinta {
  display: inline-block;
  width: 1800px;
  height: 500px;
  background: rgb(	233	230	230);
  color: white;
}


.box {
  display: inline-block;
  width: 350px;
  height: 400px;
  background: rgb(	233	230	230);
  color: white;
}


.box {
  display: inline-block;
  width: 350px;
  height: 400px;
  background: rgb(	233	230	230);
  color: white;
}

#two {
  position: absolute;
  top: 20px;
  left: 20px;
  background: blue;
}
</style>
