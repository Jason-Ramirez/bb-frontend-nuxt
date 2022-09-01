module.exports = {
  apps: [
    {
      name: 'bb_frontend',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
