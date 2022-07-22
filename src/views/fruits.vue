<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Fruits</title>

  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="container_main" style="background-color:#ebeef3">
        <!-- Titulo - Tu mercado ideal -->

        <!-- Navagador de la pagina principal -->
        <span>
            <input class="seach_box" type="text" placeholder="Seach">
            <ul id="nav">
                <li><a href="#javascript">Home</a></li>
                <li><a href="#javascript">Categoria</a></li>
                <li><a href="#javascript">Producto</a></li>
                <li><a href="#javascript">Pedido</a></li>
                <li><router-link to="/contact">Contacto</router-link></li>
                <p class="navegador"></p>
            </ul>
        </span>

        <!-- Imagenes de menu-->
        <span>
            <h2 style="text-align:center">Menu</h2>
            
            <!-- responsive correspondiente al tamano de foto -->
            <div class="responsive">
            <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="/fruits">
                <img src="./imagenes/frutas.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
                </a>
                <p align="left" style="margin-left:5px; color:#B2B2B2;">Por precio/Kilo</p>
                <b>MANZANAS</b><br><br>
                <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
                <button @click="AddProduct" class="button">Añadir</button>
            </div>
            </div>

            <div class="responsive">
            <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="/fruits">
                <img src="./imagenes/frutas.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
                </a>
                <p align="left" style="margin-left:5px; color:#B2B2B2;">Por precio/Kilo</p>
                <b>MANZANAS</b><br><br>
                <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
                <button @click="AddProduct" class="button">Añadir</button>
            </div>
            </div>

            <div class="responsive">
            <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="/fruits">
                <img src="./imagenes/frutas.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
                </a>
                <p align="left" style="margin-left:5px; color:#B2B2B2;">Por precio/Kilo</p>
                <b>MANZANAS</b><br><br>
                <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
                <button @click="AddProduct" class="button">Añadir</button>
            </div>
            </div>

            <div class="responsive">
            <div class="polaroid" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="/fruits">
                <img src="./imagenes/frutas.jpg" alt="Norway" style="width:90%; margin:10px; border-radius: 10px;">
                </a>
                <p align="left" style="margin-left:5px; color:#B2B2B2;">Por precio/Kilo</p>
                <b>MANZANAS</b><br><br>
                <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
                <button @click="AddProduct" class="button">Añadir</button>
            </div>
            </div>



            <!-- responsive correspondiente al tamano de foto -->
            <!-- <div class="responsive" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
            <div class="img" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="/fruits">
                <img src="./imagenes/frutas.jpg" alt="foto de frutas" style="margin:10px; border-radius: 10px;">
                </a>
                <p align="left" style="margin-left:5px; color:#B2B2B2;">Por precio/Kilo</p>
                <b>MANZANAS</b><br><br>
                <b align="right" style="margin-right:5px; color:#3885ff; font-size: 15px;">2,29 €/Kg</b><br><br>
                <button @click="AddProduct" class="button">Añadir</button>
            </div>
            </div> -->

        </span>
    </div>
  </body>
  <footer>

  </footer>
</template>

<style>

div.polaroid {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.button{
  position: relative;
  background-color: black;
  border-radius: 1em;
  font-size: 12px;
  color: white;
  padding: 0.8em 1.8em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
}

.button:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.button:active {
  top: 1px;
}
</style>