// instance options
const upvoteApp = {
  data() {
    return { submissions: Seed.submissions };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => b.votes - a.votes);
    },
  },
};

Vue.createApp(upvoteApp).mount("#app");
