<template>
  <div>
    <h3> Formulario de registro. </h3>
  </div>

  <!-- ¿Era poner en una tabla invisible los campos del formulario para alinearlos? -->

  <span class="center">
    <form>
      <table>
        <tr>
          <div>
            <td>
              <label> Nombre </label>
            </td>
            <td>
              <input type="text" name="nombre" placeholder="Su nombre de usuario"/>
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <td>
              <label> Email contacto </label>
            </td>
            <td>
              <input type="text" name="correo" placeholder="Su dirección de email"/>
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <td>
              <label> Contraseña </label>
            </td>
            <td>
              <input type="text" name="password" placeholder="Su contraseña a usar">
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <td>
              <label> Verificar contraseña </label>
            </td>
            <td>
              <input type="text" name="password2" placeholder="Reescriba su contraseña">
            </td>
          </div>
        </tr>

        <tr>
          <td>
          </td>
          <td>
            <button type="submit"> Registrarse </button>
          </td>
        </tr>
      </table>
    </form>
  </span>
</template>

<style>

.center {
  display: inline-block;
  width: 350px;
  height: 400px;
  background: rgb(	233	230	230);
}

</style>