# Emjinx Example - JavaScript and Fetch API

This example uses an HTML form, with plain JavaScript and the Fetch API, to send a POST request to the Emjinx REST API.

This is the recommended implementation when using plain JavaScript.

## Emjinx REST API Endpoint:

https://api.emjinx.com/rest/

## Fields

### Form

- email - required, max 254 chars
- name - max 200 chars
- phoneNumber - max 20 chars
- message - max 5000 chars

### Header

- EMJINX-API-KEY - your API Key from the Emjinx app

## Setup

In the form.js file, replace the header, named EMJINX-API-KEY, with your API Key.

## Run

After adding your API Key to the form.js file, open the index.html in your browser, fill out the form, and press the Submit button.
