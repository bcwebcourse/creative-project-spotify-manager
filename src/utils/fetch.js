export async function get({ endpoint, accessToken }) {
  const res = await fetch(endpoint, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
  return await res.json();
}

export async function post({ endpoint, accessToken, body }) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(body)
  });
  return await res.json();
}
