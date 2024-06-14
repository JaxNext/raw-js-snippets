// genStream()
compare()

async function compare() {
  const genericSession = await ai.createGenericSession()
  console.log('AAA', genericSession)

  const textSession = await ai.createTextSession()
  console.log('BBB', textSession)
}
async function genStream() {
  const canCreate = await window.ai.canCreateTextSession();

  if (canCreate !== "no") {
    const session = await window.ai.createGenericSession();

    // Prompt the model and stream the result:
    const stream = session.promptStreaming("Write a joke");
    // for await (const chunk of stream) {
    //   console.log(chunk);
    // }
    const reader = stream.getReader();
    while (true > 0) {
      const { done, value } = await reader.read()
      console.log('Done:', done);
      if (done) break
      console.log('Value:', value);
    }
    reader.releaseLock()
  }

}