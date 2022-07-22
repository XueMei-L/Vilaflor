import styles from '../contacto.css'


<template>
  <h1>Contacto</h1>
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>

    <!-- css for vilaflor -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

  </head>

  <body>

<table>
  <tr class="fuentetitulo">
    <th>Correo</th>
    <th>Telefono</th>
    <th>Direccion</th>
    <th>Horario de atencion</th>
  </tr>
  <tr>
    <td>svilaflor@gmail.com</td>
    <td>699356895</td>
    <td>C/Molinos de cal, 38. La Laguna. Tenerife. Islas Canarias. España</td>
    <td>Lunes a viernes de 8:30 a 5:30</td>
  </tr>
</table>

  </body>

</template>


<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    margin-left:auto;
    margin-right:auto;
    width:70%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .fuentetitulo {
    font-family:Lucida Console;
  }
</style>