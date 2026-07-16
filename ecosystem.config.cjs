module.exports = {
  apps: [
    {
      name: "portfolio-server",
      script: "src/server.js",
      cwd: "./server",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      max_memory_restart: "256M",
      exp_backoff_restart_delay: 100,
    },
  ],
};
