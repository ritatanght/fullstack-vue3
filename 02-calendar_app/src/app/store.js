import { reactive } from "vue";
import { seedData } from "./seed";

// When we return an object from the data() in a component,
// Vue internally makes the data reactive.

// When we’re constructing this store outside of a component,
// we can use the reactive() method to ensure that the view updates whenever state changes.
export const store = {
  state: {
    data: reactive(seedData),
  },
};
