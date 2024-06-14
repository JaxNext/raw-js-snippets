testShare();

function testShare() {
  if (!window.SharedWorker) return;

  const worker = new SharedWorker('./shared-worker.mjs', { type: 'module' });

  worker.port.postMessage('111');
  worker.port.onmessage = function (event) {
    console.log('From Worker', event);
  };
}