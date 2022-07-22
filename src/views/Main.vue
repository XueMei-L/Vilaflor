<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Menu</title>

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

            <div class="responsive">
            <div class="img" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="/fruits">
                <img src="./imagenes/frutas.jpg" alt="foto de frutas" style="margin:10px; border-radius: 10px;">
                </a>
                <div class="desc">FRUTAS Y VEGETALES</div>
            </div>
            </div>

            <div class="responsive">
            <div class="img" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="#javascript">
                <img src="./imagenes/pescados.jpg" alt="foto de pescados" style="margin:10px; border-radius: 10px;">
                </a>
                <div class="desc">PESCADOS</div>
            </div>
            </div>

            <div class="responsive">
            <div class="img" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="#javascript">
                <img src="./imagenes/carnes.jpg" alt="foto de carnes" style="margin:10px; border-radius: 10px;">
                </a>
                <div class="desc">CARNES</div>
            </div>
            </div>

            <div class="responsive">
            <div class="img" style="background-color:#ffffff; border-radius: 10px;">
                <a target="_self" href="#javascript">
                <img src="./imagenes/perfumes1.jpg" alt="foto de perfumes" style="margin:10px; border-radius: 10px;">
                </a>
                <div class="desc">PERFUMES</div>
            </div>
            </div>

        </span>
    </div>
  </body>
</template>

<style>
/* Imagenes2 */
div.img {
    border: 1px solid #ccc;
}

div.img:hover {
    border: 1px solid #777;
}

div.img img {
    /* width: 100%; */
    width: 300px;
    height:210px;
    /* height: auto; */
    /* height: auto; */
}

/* descripcion de las imagenes */
div.desc {
    padding: 15px;
    text-align: center;
}

* {
    box-sizing: border-box;
}

.responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
}

@media only screen and (max-width: 700px){
    .responsive {
        width: 49.99999%;
        margin: 6px 0;
    }
}

@media only screen and (max-width: 500px){
    .responsive {
        width: 100%;
    }
}

.clearfix:after {
    content: "";
    display: table;
    clear: both;
}



/* Otros elementos */

.seach_box {
    position:absolute;
	right:200px;
	top: 90px;
    display:inline-block;
    border-radius: 6px;
    
}


.navegador {
    width: 100%;
    border-top-style:solid;
    border-top-width: 1px;
}


ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    display: inline-block;
    
}

li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/*鼠标移动到选项上修改背景颜色 */
li a:hover {
    color: black;
    border-bottom-style:solid;
    border-bottom-style: 1px;
    /* background-color: black; */
}

.container_main {
  object-position: 100px 50px;
  position: left;
  display: inline-block;
  width: 100%;
  height: 600px;
  background: white;
}

</style>