var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF21kD_nyZBb0XifN6_SPTaDVRaPNkPyWXQUaGw0U5UKlmYQCIzLO8gIuL-5IWk5BoecpSv9xiEsm9ZOGev6iIQ',
    privateKey: 'AM0yd7Fz9EMN5JrY-MvEYL6q9gqdR87mVUGNw7p17ZY'
  }

push.setVapidDetails('mailto:test@example.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/flDSa_J35i8:APA91bF6jSniecKC_7od2AHIs4Tp1f3rwQ3isoHv_E6D8mZSEGqgJE_NpAWZd4dAOVgkvn5dW7-6U6uf4GDHD2ng_OhSJJdpFcisDOlKtoRNj_v4W1oymythDLdJQWQirhMGlDDNX5LC","expirationTime":null,"keys":{"p256dh":"BLaNOUTu97izhK7ErYLWySK42KaYLz3ZPmf9rfL3bxf44sr7dQY04Yf7iuVEMAXED7KYPl1QnvLo5wRdXGPU53o","auth":"69ZwNky-CB6meUqM8TFmwQ"}};

push.sendNotification(sub, 'test message');