

# BudPay SDK Documentation

## Installation

To install the BudPay SDK, run the following command:

```bash
npm install @budpay-node
```

## Usage

First, require the BudPay SDK and create an instance of the SDK by providing your secret key and public key:

```javascript
const BudPaySDK = require('budpay-node');

const sdk = new BudPaySDK('YOUR_SECRET_KEY', 'YOUR_PUBLIC_KEY');
```

Make sure to replace `'YOUR_SECRET_KEY'` and `'YOUR_PUBLIC_KEY'` with your actual API credentials.

### Initialization

The BudPay SDK initializes with your API credentials:

```javascript
const BudPaySDK = require('budpay-sdk');

const sdk = new BudPaySDK('YOUR_SECRET_KEY', 'YOUR_PUBLIC_KEY');
```

### Card Encryption

Before initializing a payment, you can perform AES-256-CBC encryption on your card payload using your public key and reference. The SDK provides a `performCardEncryption` method for this purpose:

```javascript
const cardPayload = {
  number: '4111111111111111',
  cvv: '123',
  exp_month: '12',
  exp_year: '2023',
  name: 'John Doe',
};

const encryptedCard = sdk.performCardEncryption(cardPayload);
console.log('Encrypted Card:', encryptedCard);
```

The `performCardEncryption` method takes a card payload object as input and returns the encrypted card payload as a string.

### Initialize Transaction

To initialize a transaction, you can use the `initializeTransaction` method:

```javascript
const amount = '100';
const card = 'ENCRYPTED_CARD_PAYLOAD';
const currency = 'NGN';
const email = 'test@test.com';
const reference = '1253627873656276350';

sdk.initializeTransaction(amount, card, currency, email, reference)
  .then((response) => {
    console.log('Transaction Initialization Response:', response);
  })
  .catch((error) => {
    console.error('Transaction Initialization Error:', error);
  });
```

Replace `'ENCRYPTED_CARD_PAYLOAD'` with the actual encrypted card payload generated using the `performCardEncryption` method.

### Other Methods

The BudPay SDK provides several other methods to perform various operations. Here are some examples:

#### Verify Transaction

To verify a transaction by its reference, use the `verifyTransaction` method:

```javascript
const reference = 'TRANSACTION_REFERENCE';

sdk.verifyTransaction(reference)
  .then((response) => {
    console.log('Transaction Verification Response:', response);
  })
  .catch((error) => {
    console.error('Transaction Verification Error:', error);
  });
```

Replace `'TRANSACTION_REFERENCE'` with the reference of the transaction you want to verify.

#### Get Transaction

To retrieve information about a specific transaction, use the `getTransaction` method:

```javascript
const transactionId = 'TRANSACTION_ID';

sdk.getTransaction(transactionId)
  .then((response) => {
    console.log('Transaction Information:', response);
  })
  .catch((error) => {
    console.error('Transaction Information Error:', error);
  });
```

Replace `'TRANSACTION_ID'` with the ID of the transaction you want to retrieve information about.

#### Request Payment

To send a payment request to one or more recipients, use the `requestPayment` method:

```javascript
const recipient = 'recipient@example.com';
const amount = '100';
const currency = 'NGN';
const description = 'Payment Request';

sdk.requestPayment(recipient, amount, currency, description)
  .then((response) => {
    console.log

('Payment Request Response:', response);
  })
  .catch((error) => {
    console.error('Payment Request Error:', error);
  });
```

Replace `'recipient@example.com'` with the email address of the recipient and adjust other parameters as needed.

#### Create Payment Link

To create a payment link for collecting payments, use the `createPaymentLink` method:

```javascript
const amount = '100';
const currency = 'NGN';
const name = 'Product Name';
const description = 'Payment for Product';
const redirect = 'https://your-redirect-link';

sdk.createPaymentLink(amount, currency, name, description, redirect)
  .then((response) => {
    console.log('Payment Link Creation Response:', response);
  })
  .catch((error) => {
    console.error('Payment Link Creation Error:', error);
  });
```

Replace `'https://your-redirect-link'` with the actual redirect link for the payment.

#### Create Customer

To create a new customer with the provided details, use the `createCustomer` method:

```javascript
const email = 'customer@example.com';
const firstName = 'John';
const lastName = 'Doe';
const phone = '1234567890';

sdk.createCustomer(email, firstName, lastName, phone)
  .then((response) => {
    console.log('Customer Creation Response:', response);
  })
  .catch((error) => {
    console.error('Customer Creation Error:', error);
  });
```

Replace the customer details accordingly.

#### Create Dedicated Virtual Account

To create a dedicated virtual account for a customer, use the `createDedicatedVirtualAccount` method:

```javascript
const customerId = 'CUSTOMER_ID';

sdk.createDedicatedVirtualAccount(customerId)
  .then((response) => {
    console.log('Dedicated Virtual Account Creation Response:', response);
  })
  .catch((error) => {
    console.error('Dedicated Virtual Account Creation Error:', error);
  });
```

Replace `'CUSTOMER_ID'` with the ID of the customer.

#### Get Settlements

To retrieve a list of settlements, use the `getSettlement` method:

```javascript
sdk.getSettlement()
  .then((response) => {
    console.log('Settlements:', response);
  })
  .catch((error) => {
    console.error('Settlements Error:', error);
  });
```

#### Refund Payment

To initiate a refund for a payment, use the `refund` method:

```javascript
const reference = 'PAYMENT_REFERENCE';

sdk.refund(reference)
  .then((response) => {
    console.log('Refund Response:', response);
  })
  .catch((error) => {
    console.error('Refund Error:', error);
  });
```

Replace `'PAYMENT_REFERENCE'` with the reference of the payment to be refunded.

---

This documentation covers the basic usage of the BudPay SDK. For more information, refer to the official BudPay SDK documentation or the SDK's source code.

```

