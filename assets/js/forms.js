// AJAX submit for [data-hd-form] forms (Formspree-compatible JSON mode).
// Keeps users on-page and shows the branded success state.
document.addEventListener('submit', async function (e) {
  var form = e.target.closest('[data-hd-form]');
  if (!form) return;
  e.preventDefault();

  var action = form.getAttribute('action') || '';
  if (!action || action.indexOf('YOUR_') !== -1) {
    alert('This form is not connected yet — set the form endpoint in _config.yml.');
    return;
  }

  var btn = form.querySelector('button[type="submit"]');
  var btnLabel = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

  try {
    var res = await fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var thanks = form.getAttribute('data-thanks');
    if (thanks) {
      var roleField = form.elements['role'];
      if (roleField && roleField.value) {
        thanks += (thanks.indexOf('?') === -1 ? '?' : '&') + 'role=' + encodeURIComponent(roleField.value);
      }
      window.location.assign(thanks);
      return;
    }
    form.innerHTML =
      '<div style="text-align:center;padding:40px 0">' +
      '<div style="font-size:40px;color:var(--teal);margin-bottom:14px"><i class="fa-solid fa-circle-check"></i></div>' +
      '<h3 style="font-size:22px">Thanks, message received.</h3>' +
      '<p style="color:var(--ink-3);margin-top:8px">We\'ll be in touch within one working day.</p>' +
      '</div>';
  } catch (err) {
    if (btn) { btn.disabled = false; btn.textContent = btnLabel; }
    var note = form.querySelector('.form-error');
    if (!note) {
      note = document.createElement('p');
      note.className = 'form-error';
      note.style.cssText = 'color:#b3261e;font-size:14px;margin-top:12px;text-align:center';
      form.appendChild(note);
    }
    note.textContent = "Sorry, that didn't send. Please try again, or email us directly.";
  }
});
