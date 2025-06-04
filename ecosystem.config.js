module.exports = {
  apps: [
    {
      name: "Foxtcon-Web",
      script: "npm",
      args: "run start",
      env: {
        PORT: 3060,
        NODE_ENV: "production"
      }
    }
  ]
};