const submissionComponent = {
  template: `
      <figure class="media-left">
        <img class="image is-64x64" :src="submission.submissionImage" />
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a :href="submission.url" class="has-text-info"
                >{{submission.title}}</a
              >
              <span class="tag is-small">#{{submission.id}}</span>
            </strong>
            <br />
            {{submission.description}}
            <br />
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24" :src="submission.avatar" />
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span class="icon is-small" @click="upvote(submission.id)">
          <i class="fa fa-chevron-up"></i>
          <strong class="has-text-info">{{submission.votes}}</strong>
        </span>
      </div>
  `,
  // For a child component to use the props provided to it, it needs to explictly declare the props
  props: ["submission", "submissions"],
};

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
  components: {
    "submission-component": submissionComponent,
  },
};

Vue.createApp(upvoteApp).mount("#app");
