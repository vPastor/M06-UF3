<template>
  <div v-if="currentItem" class="edit-form">
    <h4>Carro</h4>
    <h4>Novetats</h4>
      <table class="list-group" v-for="(item, index) in cart" :key="index">
        <th class="list-group-item" :class="{ active: index == currentIndex }" v-if="item.Cantidad > 0" > 
       <p>
            {{ item.title }}</p>
            <img v-bind:src="item.image" />
            <p>Precio:{{ item.price}}</p>
            
            <button class="btn btn-outline-secondary" type="button" @click="comprar(item)"
          >
            Comprar
          </button>

    <button class="badge badge-danger mr-2"
      @click="deleteItem"
    >
      Delete
    </button>
    </th>
</table>
    <button type="submit" class="badge badge-success"
      @click="updateItem"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Item...</p>
  </div>
</template>

<script>
import ItemDataService from "../services/ItemDataService";

export default {
  name: "Item",
  data() {
    return {
      currentItem: null,
      message: ''
    };
  },
  methods: {
    getItem(id) {
      ItemDataService.get(id)
        .then(response => {
          this.currentItem = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(reduction) {
      var data = {
        id: this.currentItem.id,
        title: this.currentItem.title,
        description: this.currentItem.description,
        Cantidad: this.currentItem.Cantidad - reduction,
        image: this.currentItem.image,
        novedad: this.currentItem.novedad
      };

      ItemDataService.update(this.currentItem.id, data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateItem() {
      ItemDataService.update(this.currentItem.id, this.currentItem)
        .then(response => {
          console.log(response.data);
          this.message = 'The Item was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteItem() {
      ItemDataService.delete(this.currentItem.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Items" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getItem(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
