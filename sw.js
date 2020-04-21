
self.addEventListener('push', function(event) {

    if (event.data) {
        console.log(event.data.json());
      }
    
    var title = data.title;

    var options = {
      dir: 'rtl',
      lang: 'he',
      body: data.body,
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