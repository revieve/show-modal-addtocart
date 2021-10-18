/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-multi-assign */

const config = {
  partner_id: '9KpsLizwYK',
  locale: 'en',
  env: 'test',
  onAddToCart() {
    const closeButton = document.querySelector('.closeButton');
    const modal = document.querySelector('.modal');
    const modalview = document.querySelector('.modalview');
    modal.classList.add('show');
    closeButton.addEventListener('click', () => {
      modal.classList.remove('show');
    });
    modal.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  },
};

(function () {
  const rv = document.createElement('script');
  rv.src =
    'https://d38knilzwtuys1.cloudfront.net/revieve-plugin-v4/revieve-plugin-loader.js';
  rv.type = 'text/javascript';
  rv.async = 'true';
  rv.onload = rv.onreadystatechange = function () {
    const rs = this.readyState;
    if (rs && rs != 'complete' && rs != 'loaded') return;
    Revieve.Init(config, function () {
      // Comment out the below line if you want to open the modal
      // manually when user clicks a certain button or navigates
      // to certain page.
      Revieve.API.show();
    });
  };
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(rv, s);
})();
