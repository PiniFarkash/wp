
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