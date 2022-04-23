Vue.createApp({
  data() {
    return {
      menu: [
        {
          id: 1,
          image: "https://www.dominos.co.in/files/items/Margherit.jpg",
          name: "Margherita Pizza",
          price: 17,
          size: "Small",
        },
        {
          id: 2,
          image: "https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg",
          name: "Veggie Extravaganza Pizza",
          price: 18,
          size: "Large",
        },
        {
          id: 3,
          image: "https://www.dominos.co.in/files/items/Pepperoni.jpg",
          name: "Pepperoni Pizza",
          price: 20,
          size: "Small",
        },
        {
          id: 4,
          image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
          name: "Farmhouse Pizza",
          price: 25,
          size: "Medium",
        },
        {
          id: 5,
          image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
          name: "Mexican Green Wave Pizza",
          price: 15,
          size: "Small",
        },
      ],

      cart: [],
    };
  },
  methods: {
    addPizza(id) {
      let pizza = this.menu.find((pizza) => pizza.id == id);
      let index = this.cart.findIndex((pizza) => pizza.id == id);
      if (index != -1) {
        this.cart[index].quantity++;
      } else {
        this.cart.push({ ...pizza, quantity: 1 });
      }
    },
    getTotalPrice() {
      var total = 0;
      this.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total.toFixed(2);
    },
    reduceItem(id) {
      var item = this.cart.find((item) => item.id == id);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cart = this.cart.filter((item) => item.id != id);
      }
    },
    addItem(id) {
      var item = this.cart.find((item) => item.id == id);
      item.quantity++;
    },
  },
}).mount("#pizza-restaurant");
