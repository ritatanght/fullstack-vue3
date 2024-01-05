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
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (sub) => sub.id === submissionId
      );
      submission.votes++;
    },
  },
};

Vue.createApp(upvoteApp).mount("#app");
