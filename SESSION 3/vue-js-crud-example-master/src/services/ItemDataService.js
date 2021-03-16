import http from "../http-common";

class ItemDataService {
  getAll() {
    return http.get("/items");
  }

  get(id) {
    return http.get(`/items/${id}`);
  }

  create(data) {
    return http.post("/items", data);
  }
  createnovetat(data) {
    return http.post("/items", data);
  }
  update(id, data) {
    return http.put(`/items/${id}`, data);
  }

  delete(id) {
    return http.delete(`/items/${id}`);
  }

  deleteAll() {
    return http.delete(`/items`);
  }

  findByTitle(title) {
    return http.get(`/items?title=${title}`);
  }
  añadirCarrito(info){
    return http.post('/cart',info);
  }
  
}

export default new ItemDataService();
