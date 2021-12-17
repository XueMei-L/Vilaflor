# vilaflor

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Tareas realizadas esta semana.

- Nos hemos ayudado de los pasos en el recurso :

https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/

para poder usar los "routers" e incluir las paginas de Login y SignUp.

- Se creo un fichero src/router/index.js para poder usar los "routers" y
poder construir las distintas paginas, como los de Login/SignUp y demas en
la misma pagina como componentes.

```
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

- Cada uno de los componentes (Home, About, Login, Register) tienen su
codigo para que se formen y monten en la pagina en la ruta src/views del
proyecto (ficheros Home.vue, About.vue, Login.vue, Register.vue) 

- Por ultimo en src/App.vue hemos a√adido los componentes como enlaces en
la parte del codigo HTML, usando las etiquetas "router-link" y "router-view" :

```
<template>
  <!--<img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div id="nav"> 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>

  <router-view/>
</template>
```
el resto del fichero App.vue lo hemos dejado sin modificar.


#### Problemas encontrados.

- Resulta que los recursos sobre como implementar "routers" en la version
Vue2 no funcionan para la version de Vue3 que estamos usando para el proyecto.
A la hora de implementar todo el codigo de Vue2 no salta ningun error sino que
a la hora de acceder a las paginas montadas aparecen en blanco, sin ningun tipo
de error o advertencia.

- A lo anterior hemos dedicado buena parte de la semana pasada y la actual, logrando
que al final funcionara.
