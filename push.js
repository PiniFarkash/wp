var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF21kD_nyZBb0XifN6_SPTaDVRaPNkPyWXQUaGw0U5UKlmYQCIzLO8gIuL-5IWk5BoecpSv9xiEsm9ZOGev6iIQ',
    privateKey: 'AM0yd7Fz9EMN5JrY-MvEYL6q9gqdR87mVUGNw7p17ZY'
  }

push.setVapidDetails('mailto:test@example.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};
push.sendNotification(sub, 'test message');