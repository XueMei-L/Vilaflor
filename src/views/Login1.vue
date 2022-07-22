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
        <h1 align="left" ><i>Tu Mercado ideal<br> @vilaflor</i></h1>
      </font>
    </span>

    <!-- Prueba01 -->
    <span class="plantilla_login">
      <form action="" class="login">
        <h2><p style="color:black">Sign In</p></h2>

        <!-- Login with accout -->
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        
        <!-- button of login -->
        <div class="sign_in">
          <input type="submit" value="Login">
        </div>

        <!-- Sign In Not Accout -->
        <p>Don't have an account? <br><br><a href="../register" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a></p>
       

        <!-- Forgot password change link -->
        <p><a href="https://www.google.com/">Forgot your password?</a></p>

        <!-- <a href="javascript:;">This hyperlink will do nothing</a> -->

      </form> 
    </span> 
  </div>
</div>
</template>

<script>
  // Creo que aquí se puede poner el código de Vuelidate con  la etiqueta script
</script>

<style>


.plantilla_login {
  position: absolute;
  right: 15%;
  top: 30%;
  display: inline-block;
  width: 350px;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 25px gray;
}

.login input {
  display: block;
  top: 30%;
  margin: 10px auto;
  width: 250px;
  height: 30px;
  text-align: center;

}

.sign_in input{
  display: block;
  margin: 30px auto;
  width: 260px;
  height: 30px;
}


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

</style>