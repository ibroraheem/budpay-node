## Table of Contents
- [Table of Contents](#table-of-contents)
- [Constructor](#constructor)
  - [`BudPaySDK(secretKey, publicKey)`](#budpaysdksecretkey-publickey)
- [Methods](#methods)
  - [`initializeTransaction(amount, card, currency, email, reference)`](#initializetransactionamount-card-currency-email-reference)
  - [`initializeBankTransfer(email, amount, currency, reference, name)`](#initializebanktransferemail-amount-currency-reference-name)
  - [`verifyTransaction(reference)`](#verifytransactionreference)
  - [`requestPayment(recipient, amount, currency, description)`](#requestpaymentrecipient-amount-currency-description)
  - [`createPaymentLink(amount, currency, name, description, redirect)`](#createpaymentlinkamount-currency-name-description-redirect)
  - [`createCustomer(email, firstName, lastName, phone)`](#createcustomeremail-firstname-lastname-phone)
  - [`createDedicatedVirtualAccount(customerId)`](#creatededicatedvirtualaccountcustomerid)
  - [`getSettlements()`](#getsettlements)
  - [`initiateRefund(reference)`](#initiaterefundreference)
  - [`getTransaction(transactionId)`](#gettransactiontransactionid)
  - [`getBankList()`](#getbanklist)
  - [`initiateBankTransfer(bankCode, accountNumber, currency)`](#initiatebanktransferbankcode-accountnumber-currency)
  - [`initiateEncryptedBankTransfer(encryptedPayload)`](#initiateencryptedbanktransferencryptedpayload)
  - [`initiateBulkBankTransfer(transfers)`](#initiatebulkbanktransfertransfers)
  - [\`getPayout(payoutReference](#getpayoutpayoutreference)
  - [`getPayoutFee(currency, amount)`](#getpayoutfeecurrency-amount)
  - [`getWalletBalance(currency)`](#getwalletbalancecurrency)
  - [`getWalletTransactions(currency)`](#getwallettransactionscurrency)
  - [`initiateAirtimePurchase()`](#initiateairtimepurchase)
  - [`initiateInternetSubscription()`](#initiateinternetsubscription)
  - [`initiateTvSubscription()`](#initiatetvsubscription)
  - [`initiateElectricityBillPayment()`](#initiateelectricitybillpayment)
  - [`verifyBVN(bvn, firstName, middleName, lastName, phoneNumber, dob, gender, reference, callbackUrl)`](#verifybvnbvn-firstname-middlename-lastname-phonenumber-dob-gender-reference-callbackurl)
- [Example Usage](#example-usage)
- [Author](#author)

## Constructor

### `BudPaySDK(secretKey, publicKey)`

Creates a new instance of the `BudPaySDK` class.

- `secretKey` (string): The secret key used for authorization.
- `publicKey` (string): The public key used for authorization.

## Methods


### `initializeTransaction(amount, card, currency, email, reference)`

Initializes a transaction.

- `amount` (number): The transaction amount.
- `card` (object): The card details.
- `currency` (string): The currency of the transaction.
- `email` (string): The email address of the user.
- `reference`

 (string): The reference for the transaction.

Returns a Promise that resolves to the API response.

### `initializeBankTransfer(email, amount, currency, reference, name)`

Initializes a bank transfer.

- `email` (string): The email address of the user.
- `amount` (number): The transfer amount.
- `currency` (string): The currency of the transfer.
- `reference` (string): The reference for the transfer.
- `name` (string): The name of the recipient.

Returns a Promise that resolves to the API response.

### `verifyTransaction(reference)`

Verifies a transaction.

- `reference` (string): The reference of the transaction to verify.

Returns a Promise that resolves to the API response.

### `requestPayment(recipient, amount, currency, description)`

Requests a payment from a recipient.

- `recipient` (string): The email address or user ID of the recipient.
- `amount` (number): The payment amount.
- `currency` (string): The currency of the payment.
- `description` (string): The description of the payment.

Returns a Promise that resolves to the API response.

### `createPaymentLink(amount, currency, name, description, redirect)`

Creates a payment link.

- `amount` (number): The payment amount.
- `currency` (string): The currency of the payment.
- `name` (string): The name of the payment link.
- `description` (string): The description of the payment link.
- `redirect` (string): The URL to redirect to after the payment.

Returns a Promise that resolves to the API response.

### `createCustomer(email, firstName, lastName, phone)`

Creates a customer.

- `email` (string): The email address of the customer.
- `firstName` (string): The first name of the customer.
- `lastName` (string): The last name of the customer.
- `phone` (string): The phone number of the customer.

Returns a Promise that resolves to the API response.

### `createDedicatedVirtualAccount(customerId)`

Creates a dedicated virtual account for a customer.

- `customerId` (string): The ID of the customer.

Returns a Promise that resolves to the API response.

### `getSettlements()`

Retrieves the settlements.

Returns a Promise that resolves to the API response.

### `initiateRefund(reference)`

Initiates a refund for a transaction.

- `reference` (string): The reference of the transaction to refund.

Returns a Promise that resolves to the API response.

### `getTransaction(transactionId)`

Retrieves a transaction by its ID.

- `transactionId` (string): The ID of the transaction.

Returns a Promise that resolves to the API response.

### `getBankList()`

Retrieves the list of supported banks.

Returns a Promise that resolves to the API response.

### `initiateBankTransfer(bankCode, accountNumber, currency)`

Initiates a bank transfer.

- `bankCode` (string): The code of the bank to transfer to.
- `accountNumber` (string): The account number to transfer to.
- `currency` (string): The currency of the transfer.

Returns a Promise that resolves to the API response.

### `initiateEncryptedBankTransfer(encryptedPayload)`

Initiates an encrypted bank transfer.

- `encryptedPayload` (string): The encrypted payload for the transfer.

Returns a Promise that resolves to the API response.

### `initiateBulkBankTransfer(transfers)`

Initiates a bulk bank transfer.

- `transfers` (array): An array of transfer objects.

Returns a Promise that resolves to the API response.

### `getPayout(payoutReference

)`

Retrieves a payout by its reference.

- `payoutReference` (string): The reference of the payout.

Returns a Promise that resolves to the API response.

### `getPayoutFee(currency, amount)`

Retrieves the fee for a payout.

- `currency` (string): The currency of the payout.
- `amount` (number): The amount of the payout.

Returns a Promise that resolves to the API response.

### `getWalletBalance(currency)`

Retrieves the balance of the wallet.

- `currency` (string): The currency of the wallet.

Returns a Promise that resolves to the API response.

### `getWalletTransactions(currency)`

Retrieves the transactions of the wallet.

- `currency` (string): The currency of the wallet.

Returns a Promise that resolves to the API response.

### `initiateAirtimePurchase()`

Initiates an airtime purchase.

Returns a Promise that resolves to the API response.

### `initiateInternetSubscription()`

Initiates an internet subscription.

Returns a Promise that resolves to the API response.

### `initiateTvSubscription()`

Initiates a TV subscription.

Returns a Promise that resolves to the API response.

### `initiateElectricityBillPayment()`

Initiates an electricity bill payment.

Returns a Promise that resolves to the API response.

### `verifyBVN(bvn, firstName, middleName, lastName, phoneNumber, dob, gender, reference, callbackUrl)`

Verifies a Bank Verification Number (BVN).

- `bvn` (string): The BVN to verify.
- `firstName` (string): The first name of the account holder.
- `middleName` (string): The middle name of the account holder.
- `lastName` (string): The last name of the account holder.
- `phoneNumber` (string): The phone number of the account holder.
- `dob` (string): The date of birth of the account holder (format: "YYYY-MM-DD").
- `gender` (string): The gender of the account holder.
- `reference` (string): The reference for the verification.
- `callbackUrl` (string): The callback URL for receiving the verification result.

Returns a Promise that resolves to the API response.

## Example Usage

```javascript
const BudPaySDK = require('budpay-sdk');

const secretKey = 'your_secret_key';
const publicKey = 'your_public_key';

const sdk = new BudPaySDK(secretKey, publicKey);

// Initialize a transaction
sdk.initializeTransaction(100.0, {
  number: '1234567890123456',
  cvv: '123',
  expiryMonth: '12',
  expiryYear: '25',
  pin: '1234'
}, 'USD', 'example@example.com', 'ref123')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Create a customer
sdk.createCustomer('example@example.com', 'John', 'Doe', '+1234567890')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Get wallet balance
sdk.getWalletBalance('USD')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Request payment
sdk.requestPayment('recipient@example.com', 50.0, 'USD', 'Payment for services')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

// Verify transaction
sdk.verifyTransaction('ref123')
  .then(response => {
    console.log(response);
  })
  .

catch(error => {
    console.error(error);
  });
```

## Author

Ibrahim Abdulraheem
- Twitter: [@ibroraheem](https://twitter.com/ibroraheem)
- GitHub: [ibroraheem](https://github.com/ibroraheem)