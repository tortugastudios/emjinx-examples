# Emjinx Example - React and Fetch

This example uses a form built with React, along with the Fetch API, to send a POST request to the Emjinx REST API.

The form components are styled with Styled Components, and form validation is also included.

## Emjinx REST API Endpoint:

https://api.emjinx.com/rest/

## Dependencies

React: https://reactjs.org

Create React App: https://create-react-app.dev

Styled Components: https://styled-components.com

## Fields

### Form

- email - required, max 254 chars
- name - max 200 chars
- phoneNumber - max 20 chars
- message - max 5000 chars

### Header

- EMJINX-API-KEY - your API Key from the Emjinx app

## Setup

Create a .env file in the root directory with the following environment variables:

    REACT_APP_EMJINX_API_ENDPOINT=https://api.emjinx.com/rest/
    REACT_APP_EMJINX_API_KEY=your-emjinx-api-key

Install dependencies:

    $ npm install

## Run

    $ npm start
