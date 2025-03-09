// keep-alive.js
console.log("Node.js container is running...");

// Keep the process alive
setInterval(() => {
  console.log("Still running...");
}, 60000); // Log every 60 seconds