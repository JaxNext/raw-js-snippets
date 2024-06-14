import { wait } from '/_utils/index.mjs'
onmessage = async function (event) {
  await wait(5000)
  postMessage(`${event.data} Jax`);
}