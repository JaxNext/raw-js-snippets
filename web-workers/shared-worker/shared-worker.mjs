onconnect = function (event) {
  const port = event.ports[0];
  port.onmessage = function (event) {
    console.log('From page', event);
    port.postMessage('Hello ' + event.data);
  };
}