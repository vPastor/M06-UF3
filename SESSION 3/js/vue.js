const app = Vue.createApp({
  //el: '#app'
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
     };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }
  }
});
app.mount('#user-goals');