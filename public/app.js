document.getElementById('urlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('longUrl').value;
    const res = await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    document.getElementById('shortUrl').innerText = `${location.origin}/${data.code}`;
  });
  