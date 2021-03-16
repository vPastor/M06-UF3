<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Novetats</h4>
      <table class="list-group" v-for="(item, index) in items" :key="index">
        <th class="list-group-item" :class="{ active: index == currentIndex }" v-if="item.novedad == 1 && item.Cantidad > 0" > 
       <p>
            {{ item.title }}</p>
            <img v-bind:src="item.image" />
            <p>{{ item.price}}</p>
            <button class="btn btn-outline-secondary" type="button" @click="comprar(item)"
          >
            Comprar
          </button>
            
<router-link :to="'/carrito/' + currentItem.id" class="badge badge-warning">Comprar</router-link>
        
          
        </th>
      </table>
    </div>
    <div class="col-md-6">
      <div v-if="currentItem">
        <h4>Items</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentItem.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentItem.description }}
        </div>
        <div>
          <label><strong>Cantidad:</strong></label> {{ currentItem.Cantidad}}
        </div>
         <div>
          <label><strong>Precio:</strong></label> {{ currentItem.price}}
        </div>
         <div>
          <label><strong>Imagen:</strong></label> <img v-bind:src="currentItem.image" /> 
        </div>
        <div>
          <label><strong>Novedad:</strong></label> {{ currentItem.novedad}}
        </div>

        <router-link :to="'/items/' + currentItem.id" class="badge badge-warning">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ItemDataService from "../services/ItemDataService";

export default {
  name: "item-list",
  data() {
    return {
      items: [],
      currentItem: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveItems() {
      ItemDataService.getAll()
        .then(response => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveItems();
      this.currentItem = null;
      this.currentIndex = -1;
    },

    setActiveItem(item, index) {
      this.currentItem = item;
      this.currentIndex = index;
    },

    removeAllItems() {
      ItemDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    comprar(item){
      ItemDataService.añadirCarrito(item)
      .then(response => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    },
    searchTitle() {
      ItemDataService.findByTitle(this.title)
        .then(response => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    
  },
  mounted() {
    this.retrieveItems();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
