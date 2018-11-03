function fakeApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          date: `2018-11-03`,
          id: 3,
          image: `https://images.unsplash.com/photo-1541103554737-fe33e243b45c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5070c2f1196983d1b380bee6b3315c83&auto=format&fit=crop&w=100&h=80&q=60`,
          snippet: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
          title: `Lorem ipsum dolor`,
        },
        {
          date: `2018-11-02`,
          id: 2,
          image: `https://images.unsplash.com/photo-1506443973078-d91aa73c0928?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cdc45ba2b750f2ff172c5f5e4a80e48&auto=format&fit=crop&w=100&h=80&q=60`,
          snippet: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`,
          title: `At vero eos`,
        },
        {
          date: `2018-11-01`,
          id: 1,
          image: `https://images.unsplash.com/photo-1534251623184-22cb7e61c526?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5030da767bee42dc49bcb829cfa2ba4&auto=format&fit=crop&w=100&h=80&q=60`,
          snippet: `Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
          title: `Consetetur sadipscing elitr`,
        },
      ]);
    }, 2000);
  });
}

export default {
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  async created() {
    try {
      this.data = await fakeApi();
      this.loading = false;
    } catch (error) {
      this.error = error;
    }
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      error: this.error,
      loading: this.loading,
    });
  },
};
