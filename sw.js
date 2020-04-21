
self.addEventListener('push', function(event) {

    var payload = event.data;

    if (payload) {
        
        console.log(payload.json());
      }
    
    var title = payload.title.json();

    var options = {
      dir: 'rtl',
      lang: 'he',
      body: payload.body.jason(),
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