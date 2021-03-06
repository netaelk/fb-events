module.exports = {
    apps: [{
      name: 'events-service',
      script: 'npm',
      args: 'run events-service'
    },
    {
        name: 'fb-events',
        script: 'npm',
        args: 'start'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-18-73-17.eu-west-1.compute.amazonaws.com',
        key: '~/.ssh/fb-events-key-ireland.pem',
        ref: 'origin/master',
        repo: 'git@github.com:netaelk/fb-events.git',
        path: '/home/ubuntu/server/fb-events',
        'post-deploy': 'cd public/events-app && npm install && cd ../.. && npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }