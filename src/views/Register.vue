<template>
<div>
  <!-- Evitar errores de los codigos -->
  <meta charset="utf-8">
  
  <!-- Titulo -->
  <title>Register</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="stylesheet" href="../register.css"> -->
  <!-- El modelo del fondo -->
  <div class="container">
    <!-- Titulo - Tu mercado ideal -->
    <span class= "tu_mercado_ideal">
      <font face="Times New Roman">
        <h1 align="left" ><i>Tu Mercado ideal<br> @vilaflor</i></h1>
      </font>
    </span>

    <!-- Prueba01 -->
    <span class="plantilla_login">
      <form action="" class="login">
        <h2><p style="color:black">Create an accout</p></h2>

        <!-- Login with accout -->
        <input type="text" placeholder="Username">
        <input type="text" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm Password">

        <!-- button of login -->
        <div>
          <button class="Register" onclick="window.location.href='#'" type="button" id="add">Create Your Accout</button>
          <!-- <input type="button" value="Create Your Accout" onclick=javascript:jump()> -->
        </div>

      </form> 
    </span> 
  </div>
</div>
</template>



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

}


.Register{
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