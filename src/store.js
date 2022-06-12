import { readable, get } from "svelte/store";
import { navigate } from "svelte-navigator";
import { tweened } from "svelte/motion";

// export const timeLength = writable(5 * 60);
let counter = 5 * 60;
export const count = readable(counter, (newValue, set) => {
  setInterval(() => {
    newValue(counter--);
  }, 800);
});
