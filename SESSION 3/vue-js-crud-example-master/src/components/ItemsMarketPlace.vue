<!--<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Items Chart</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(item, index) in items"
          :key="index"
          @click="setActiveItem(item, index)"
        >
          {{ item.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllItems">
        Remove All
      </button>
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

        <router-link :to="'/items/' + currentItem.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Item...</p>
      </div>
    </div>
  </div>
</template>
*/-->
<template>
  <main>
    <section>
      <div
        class="banner-innerpage"
        style="
          background-image: url(data:image/jpeg;base64,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);
        "
      >
        <div class="container">
          <!-- Row  -->
          <div class="row justify-content-center">
            <!-- Column -->
            <div
              class="col-md-6 align-self-center text-center"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <h1 class="title">Shop listing</h1>
              <h6 class="subtitle op-8">
                BOOKS
              </h6>
            </div>
            <!-- Column -->
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="spacer">
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-9">
              <div class="row shop-listing">
                <div class="col-lg-6">
                  <div class="card shop-hover border-0">
                    <img
                      v-bind:src="currentItem.image" 
                      alt="wrapkit"
                      class="img-fluid"
                    />
                    <div class="card-img-overlay align-items-center">
                      <button class="btn btn-md btn-info">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div class="card border-0">
                    <h6><a href="#" class="link">Mens Wear </a></h6>
                    <h6 class="subtitle">by Wisdom</h6>
                    <h5 class="font-medium m-b-30">
                      $195 / <del class="text-muted line-through">$225</del>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style>
.banner-innerpage {
  padding: 150px 0 100px;
  background-size: cover;
  background-position: center center;
}
.banner-innerpage .title {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
}
.banner-innerpage .subtitle {
  color: #ffffff;
}
.shop-listing .shop-hover {
  position: relative;
}
.shop-listing .shop-hover .card-img-overlay {
  display: none;
  background: rgba(255, 255, 255, 0.5);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.shop-listing .shop-hover:hover .card-img-overlay {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.shop-listing .shop-hover .label {
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
}
/*******************
shop table
*******************/
.shop-table td {
  padding: 30px 0;
}
</style>
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
    
    searchTitle() {
      ItemDataService.findByTitle(this.title)
        .then(response => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
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
