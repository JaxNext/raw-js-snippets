testFetch()

async function testFetch() {
  const response = await fetch('../../../img/a.png')
  const reader = response.body.getReader()
  while (true > 0) {
    const { done, value } = await reader.read()
    console.log('Done:', done);
    if (done) break
    console.log('Value:', value);
    const t = new TextDecoder().decode(value)
    console.log('Text:', t);
  }
  reader.releaseLock()
}