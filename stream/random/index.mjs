import { wait } from '../../_utils/index.mjs';
const text = document.querySelector('.text');
const times = 10
let counter = 0
testStream()

async function testStream() {
  const stream = await new ReadableStream({
    async start(controller) {
      intervalGenerate(controller)
    }
  })

  const res = await new Response(stream)
  const reader = res.body.getReader()
  while (true > 0) {
    const { done, value } = await reader.read()
    console.log('Done:', done);
    if (done) break
    insertText(value)
  }
  reader.releaseLock()
}
async function intervalGenerate(controller) {
  if (counter >= times) {
    controller.close()
    return
  }
  counter++
  const num = randomNum(1, 100)
  controller.enqueue(num)
  await wait(1000)
  intervalGenerate(controller)
}
function insertText(content) {
  const newHtml = `<p>${content}</p>`
  text.innerHTML += newHtml
}
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}