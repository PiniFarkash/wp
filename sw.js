self.addEventListener('push', function(e) {
    var options = {
      dir: 'rtl',
      lang: 'he',
      body: 'נמצא טרמפ עבורך!',
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
    e.waitUntil(self.registration.showNotification('טרמפ למיל', options)
    );
  });