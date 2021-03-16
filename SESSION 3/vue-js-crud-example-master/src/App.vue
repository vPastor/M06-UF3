<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">TIENDA DE LIBROS</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/items" class="nav-link">Items</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/novetats" class="nav-link">Novetats</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/carrito" class="nav-link">Carrito</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
