# Show Modal on addToCart Demo

Very basic html skeleton with some CSS to show the modal.

Basic custom addToCart function that adds and removes the `.show` class

```javascript
onAddToCart() {
    const closeButton = document.querySelector('.closeButton');
    const modal = document.querySelector('.modal');
    modal.classList.add('show');
    closeButton.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  },
```
