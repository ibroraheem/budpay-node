
# BudPaySDK for Node.js

[![Build Status](https://travis-ci.com/ibroraheem/budpay-node.svg?branch=master)](https://travis-ci.com/ibroraheem/budpay-node)
[![Coverage Status](https://coveralls.io/repos/github/ibroraheem/budpay-node/badge.svg?branch=master)](https://coveralls.io/github/ibroraheem/budpay-node?branch=master)

[![npm version](https://img.shields.io/npm/v/budpay-node.svg)](https://www.npmjs.com/package/budpay-node)

BudPaySDK is a Node.js library that provides a convenient way to interact with the BudPay API. BudPay is a payment gateway that allows you to handle various payment operations such as initializing transactions, verifying transactions, creating payment links, requesting payments, and more.

## Installation

You can install BudPaySDK via npm:

```shell
npm install budpay-node
```

## Usage

To use BudPaySDK, you need to import the library and create an instance of the `BudPaySDK` class with your secret key and public key:

```javascript
const BudPaySDK = require('budpay-node');

const secretKey = 'YOUR_SECRET_KEY';
const publicKey = 'YOUR_PUBLIC_KEY';

const budPay = new BudPaySDK(secretKey, publicKey);
```

### Initializing a Transaction

To initialize a payment transaction, use the `initializeTransaction` method:

```javascript
const amount = 100.0;
const card = {
  number: '4111111111111111',
  cvv: '123',
  expiry_month: '12',
  expiry_year: '25',
};
const currency = 'USD';
const email = 'user@example.com';
const reference = 'ORDER_123';

try {
  const transaction = await budPay.initializeTransaction(amount, card, currency, email, reference);
  console.log('Transaction initialized:', transaction);
} catch (error) {
  console.error('Error initializing transaction:', error);
}
```

### Verifying a Transaction

To verify the status of a transaction, use the `verifyTransaction` method:

```javascript
const reference = 'ORDER_123';

try {
  const transaction = await budPay.verifyTransaction(reference);
  console.log('Transaction verified:', transaction);
} catch (error) {
  console.error('Error verifying transaction:', error);
}
```

### Creating a Payment Link

To create a payment link, use the `createPaymentLink` method:

```javascript
const amount = 100.0;
const currency = 'USD';
const name = 'Product Name';
const description = 'Product description';
const redirect = 'https://example.com/payment-success';

try {
  const paymentLink = await budPay.createPaymentLink(amount, currency, name, description, redirect);
  console.log('Payment link created:', paymentLink);
} catch (error) {
  console.error('Error creating payment link:', error);
}
```

### Requesting a Payment

To request a payment from a recipient, use the `requestPayment` method:

```javascript
const recipient = 'recipient@example.com';
const amount = 100.0;
const currency = 'USD';
const description = 'Payment for services rendered';

try {
  const paymentRequest = await budPay.requestPayment(recipient, amount, currency, description);
  console.log('Payment request created:', paymentRequest);
} catch (error) {
  console.error('Error requesting payment:', error);
}
```

## Documentation

For more details on the available methods and their parameters, please refer to the [BudPaySDK Documentation](https://github.com/ibroraheem/budpaysdk).

## Author

- LinkedIn: [ibroraheem](https://www.linkedin.com/in/ibroraheem)
- Twitter: [ibroraheem](https://twitter.com/ibroraheem)
- GitHub: [ibroraheem](https://github.com/ibroraheem)

## License

This project is licensed under the MIT
