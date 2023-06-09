# BudPaySDK

The `BudPaySDK` class provides a set of methods for interacting with the BudPay API.

## Table of Contents
- [BudPaySDK](#budpaysdk)
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
    - [`getPayout(payoutReference)`](#getpayoutpayoutreference)
    - [`getPayoutFee(currency, amount)`](#getpayoutfeecurrency-amount)
    - [`getWalletBalance(currency)`](#getwalletbalancecurrency)
    - [`getWalletTransactions(currency)`](#getwallettransactionscurrency)
    - [`initiateAirtimePurchase()`](#initiateairtimepurchase)
    - [`initiateInternetSubscription()`](#initiateinternetsubscription)
    - [`initiateTvSubscription()`](#initiatetvsubscription)
    - [`initiateElectricityBillPayment()`](#initiateelectricitybillpayment)
    - [`verifyBVN(bvn, firstName, middleName, lastName, phoneNumber, dob, gender, reference, callbackUrl)`](#verifybvnbvn-firstname-middlename-lastname-phonenumber-dob-gender-reference-callbackurl)
  - [Example Usage](#example-usage)

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
- `reference` (string): The reference for the transaction.

### `initializeBankTransfer(email, amount, currency, reference, name)`

Initializes a bank transfer.

- `email` (string): The email address of the user.
- `amount` (number): The transfer amount.
- `currency` (string): The currency of the transfer.
- `reference` (string): The reference for the transfer.
- `name` (string): The name of the user.

### `verifyTransaction(reference)`

Verifies a transaction.

- `reference` (string): The reference of the transaction to verify.

### `requestPayment(recipient, amount, currency, description)`

Requests a payment.

- `recipient` (string): The recipient of the payment.
- `amount` (number): The payment amount.
- `currency` (string): The currency of the payment.
- `description` (string): The description of the payment.

### `createPaymentLink(amount, currency, name, description, redirect)`

Creates a payment link.

- `amount` (number): The payment amount.
- `currency` (string): The currency of the payment.
- `name` (string): The name associated with the payment.
- `description` (string): The description of the payment.
- `redirect` (string): The URL to redirect to after the payment.

### `createCustomer(email, firstName, lastName, phone)`

Creates a customer.

- `email` (string): The email address of the customer.
- `firstName` (string): The first name of the customer.
- `lastName` (string): The last name of the customer.
- `phone` (string): The phone number of the customer.

### `createDedicatedVirtualAccount(customerId)`

Creates a dedicated virtual account.

- `customerId` (string): The ID of the customer associated with the account.

### `getSettlements()`

Gets the settlements.

### `initiateRefund(reference)`

Initiates a refund.

- `reference` (string): The reference of the transaction to refund.

### `getTransaction(transactionId)`

Gets a transaction by ID.

- `transactionId` (string): The ID of the transaction.

### `getBankList()`

Gets the list of banks.

### `initiateBankTransfer(bankCode, accountNumber, currency)`

Initiates a bank transfer.

- `bankCode` (string): The bank code.
- `accountNumber` (string): The account number.
- `currency` (string): The currency of the transfer.

### `initiateEncryptedBankTransfer(encryptedPayload)`

Initiates an encrypted bank transfer.

- `encryptedPayload` (object): The encrypted payload for the transfer.

### `initiateBulkBankTransfer(transfers)`

Initiates a bulk bank transfer.

- `transfers` (array): An array of transfer objects.

### `getPayout(payoutReference)`

Gets a payout by reference.

- `payoutReference` (string): The reference of the payout.

### `getPayoutFee(currency, amount)`

Gets the fee for a payout.

- `currency` (string): The currency of the payout.
- `amount` (number): The amount of the payout.

### `getWalletBalance(currency)`

Gets the balance of a wallet.

- `currency` (string): The currency of the wallet.

### `getWalletTransactions(currency)`

Gets the transactions of a wallet.

- `currency` (string): The currency of the wallet.

### `initiateAirtimePurchase()`

Initiates an airtime purchase.

### `initiateInternetSubscription()`

Initiates an internet subscription.

### `initiateTvSubscription()`

Initiates a TV subscription.

### `initiateElectricityBillPayment()`

Initiates an electricity bill payment.

### `verifyBVN(bvn, firstName, middleName, lastName, phoneNumber, dob, gender, reference, callbackUrl)`

Verifies a BVN (Bank Verification Number).

- `bvn` (string): The BVN to verify.
- `firstName` (string): The first name of the BVN owner.
- `middleName` (string): The middle name of the BVN owner.
- `lastName` (string): The last name of the BVN owner.
- `phoneNumber` (string): The phone number of the BVN owner.
- `dob` (string): The date of birth of the BVN owner (format: YYYY-MM-DD).
- `gender` (string): The gender of the BVN owner.
- `reference` (string): The reference for the BVN verification.
- `callbackUrl` (string): The URL to receive the callback after the BVN verification.

## Example Usage

```javascript
const BudPaySDK = require('BudPaySDK');

const secretKey = 'YOUR_SECRET_KEY';
const publicKey = 'YOUR_PUBLIC_KEY';

const sdk = new BudPaySDK(secretKey, publicKey);

(async () => {
    try {
        const transaction = await sdk.initializeTransaction(100, '4242424242424242', 'USD', 'user@example.com', 'txn_123456');
        console.log(transaction);
    } catch (error) {
        console.error(error);
    }
})();
