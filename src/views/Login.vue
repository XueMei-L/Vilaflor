<template>
<div>
  <!-- Evitar errores de los codigos -->
  <meta charset="utf-8">
  
  <!-- Titulo -->
  <title>Login</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- El modelo del fondo -->
  <div class="container">
    <!-- Titulo - Tu mercado ideal -->
    <span class= "tu_mercado_ideal">
      <font color="" face="Times New Roman">
        <h1 align="left" ><i>Tu mercado ideal<br> @vilaflor</i></h1>
      </font>
    </span>

    <!-- <span class = "plantilla_login">
      <h1><p style="color:#b0cca8">Sign In</p></h1>
        <form class="form-group">
          <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required><br>
          <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required><br>
          <input type="submit" class="btn btn-primary" @click="doLogin">
          <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
          </p>
          <p><a href="#">Forgot your password?</a></p>
        </form>
    </span> -->




    <!-- Prueba01 -->
    <span class="plantilla_login">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h2><p style="color:black">Sign In</p></h2>
              <form>

                <div class="form-floating mb-3">
                  <i class='fas fa-user-alt'></i>
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                </div>

                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                </div>

                <div class="form-check mb-3"><br>
                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div class="d-grid"><br>
                  <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                    in</button>
                </div>
                
                <div class="d-grid mb-2"><br>
                  <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                    <i class="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>

                <div class="d-grid"><br>
                  <button class="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                    <i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </span> 
  </div>
</div>
</template>

<style>

h1 {
  font-size: 50px;
}

.tu_mercado_ideal {
  position: absolute;
  left: 20%;
  top: 40%;
}

.container {
  object-position: 100px 50px;
  position: left;
  
  display: inline-block;
  width: 100%;
  height: 600px;
  background: #8ed6b8 
}

.plantilla_login {
  position: absolute;
  right: 15%;
  top: 25%;
  display: inline-block;
  width: 350px;
  height: 400px;
  background: rgb(	233	230	230);
  color: white;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}

</style>