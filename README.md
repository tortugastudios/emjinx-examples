# Emjinx Examples

Examples of how to use Emjinx's GraphQL and REST API, to implement contact forms.

## Description

Emjinx is an SaaS product for implementing contact forms on websites and landing pages. When a site visitor sends a message, through a contact form, an email notification will be sent to the site owners, containing the details of the message. Premium Plan users can configure a custom reply message, to be sent to the visitor, so that they know that their message has been received. For more information, visit our homepage: https://emjinx.com

## Data

### Form

The following are the fields that can be in the contact form.

- email - required, max 254 chars
- name - max 200 chars
- phoneNumber - max 20 chars
- message - max 5000 chars

### Header

This is required to confirm your account with Emjinx.

- EMJINX-API-KEY - your API Key from the Emjinx app

## REST API

There are numerous ways to implement this, using many different technologies, here are some of the most common, that will be easy to add to any website.

### Endpoint

https://api.emjinx.com/rest/

### HTML Form

Uses an HTML form with a POST action, on the form, to send to the Emjinx REST API. While this is not the recommended implementation, it can be used as a quick template to get started.

### jQuery and AJAX

Uses an HTML form, with jQuery and AJAX, to send a POST request to the Emjinx REST API.

### JavaScript and Fetch API

Uses an HTML form, with JavaScript and the Fetch API, to send a POST request to the Emjinx REST API. This is the recommended implementation for those using plain JavaScript.

### React and Fetch API

Uses a form built with React, along with the Fetch API, to send a POST request to the Emjinx REST API.

### React and Axios

Uses a form built with React, along with the Axios, to send a POST request to the Emjinx REST API. This is the recommended implementation for those using React.

## GraphQL

### Endpoint

https://api.emjinx.com/graphql/

### React and Apollo

Uses a form built with React, along with Apollo, to send a POST request to the Emjinx GraphQL API.
