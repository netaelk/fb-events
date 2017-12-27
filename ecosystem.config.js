module.exports = {
    apps: [{
      name: 'events-service',
      script: 'npm run events-service'
    },
    {
        name: 'fb-events',
        script: 'npm start'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-220-103-222.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/fb-events-admin.pem',
        ref: 'origin/master',
        repo: 'git@github.com:netaelk/fb-events.git',
        path: '/home/ubuntu/server/fb-events',
        'post-deploy': 'cd ./public/events-fetcher && npm install && cd ../.. && npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }