const text = document.querySelector('.text');

testWorker();

function testWorker() {
  if (!window.Worker) return;
  const worker = new Worker('./worker.mjs', {
    type: 'module',
  });
  worker.postMessage('hello');
  worker.onmessage = function (event) {
    console.log('From Worker', event.data);
    text.innerHTML = event.data;
  };
}