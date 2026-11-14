// Quinte Tech Help: small progressive enhancements. The site works without this file.
(function () {
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var form = document.getElementById('request-form');
  if (!form || !window.fetch || !window.FormData) return;

  var status = document.getElementById('form-status');
  var button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    data.delete('redirect'); // only used by the no-JavaScript fallback
    button.disabled = true;
    button.textContent = 'Sending...';
    status.className = 'form-status';
    status.textContent = '';

    fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (!res || !res.success) throw new Error('rejected');
        window.location.href = '/thanks/';
      })
      .catch(function () {
        button.disabled = false;
        button.textContent = 'Send request';
        status.className = 'form-status err';
        status.innerHTML = 'That didn\'t send. Please try again, or email ' +
          '<a href="mailto:hello@quintetechhelp.ca">hello@quintetechhelp.ca</a> directly.';
      });
  });
})();
