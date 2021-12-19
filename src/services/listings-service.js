import base64 from 'base-64';

let username = 'simplyrets';
let password = 'simplyrets';
let headers = new Headers();
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

export async function getListings() {
  const url = 'https://api.simplyrets.com/properties';

  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  }).then(response => response.json());

  return response;
}