module.exports = {
  apps: [
    {
      name: "ccblt-landing",
      script: "bun",
      args: "run dev",
      cwd: "/Users/yroc/scripts/ccblt-landing",
      interpreter: "none",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 4321
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "logs/error.log",
      out_file: "logs/output.log",
      merge_logs: true,
      time: true
    }
  ]
};