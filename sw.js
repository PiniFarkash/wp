
self.addEventListener('push', function(event) {

    var data = {};
    if (event.data) {
      data = event.data.json();
      console.log(data);
    }
    var title = data.title || "Something Has Happened";
    var body = data.body || "Some body";

    var options = {
      dir: 'rtl',
      lang: 'he',
      body: body,
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close Me',
          icon: 'images/xmark.png'},
      ]
    };
    event.waitUntil(self.registration.showNotification(title, options));
    
  });


  self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
  
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
      type: "window"
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow)
        return clients.openWindow('/');
    }));
  });