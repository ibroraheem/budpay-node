## Class: PaymentGateway

A class for interacting with a payment gateway API.

### `processPayment(amount, card)`

Process a payment.

#### Parameters

- `amount` (number): The amount to be charged.
- `card` (string): The encrypted card details.

#### Returns

- Promise: A promise that resolves to the payment result.

### `refundTransaction(transactionReference)`

Refund a transaction.

#### Parameters

- `transactionReference` (string): The reference of the transaction to refund.

#### Returns

- Promise: A promise that resolves to the refund data.

### `getTransaction(transactionId)`

Get a transaction by ID.

#### Parameters

- `transactionId` (string): The ID of the transaction to retrieve.

#### Returns

- Promise: A promise that resolves to the transaction data.

### `getBankList()`

Get the list of supported banks.

#### Returns

- Promise: A promise that resolves to the bank list.

### `initiateBankTransfer(bankCode, accountNumber, currency)`

Initiate a bank transfer.

#### Parameters

- `bankCode` (string): The code of the bank for the transfer.
- `accountNumber` (string): The account number for the transfer.
- `currency` (string): The currency of the transfer.

#### Returns

- Promise: A promise that resolves to the bank transfer data.

### `initiateEncryptedBankTransfer(encryptedPayload)`

Initiate an encrypted bank transfer.

#### Parameters

- `encryptedPayload` (object): The encrypted payload for the transfer.

#### Returns

- Promise: A promise that resolves to the bank transfer data.

### `initiateBulkBankTransfer(transfers)`

Initiate a bulk bank transfer.

#### Parameters

- `transfers` (array): An array of bank transfer objects.

#### Returns

- Promise: A promise that resolves to the bulk bank transfer data.

### `getPayout(payoutReference)`

Get a payout by reference.

#### Parameters

- `payoutReference` (string): The reference of the payout to retrieve.

#### Returns

- Promise: A promise that resolves to the payout data.

### `getPayoutFee(currency, amount)`

Get the fee for a payout.

#### Parameters

- `currency` (string): The currency of the payout.
- `amount` (number): The amount of the payout.

#### Returns

- Promise: A promise that resolves to the payout fee data.

### `getWalletBalance(currency)`

Get the balance of a wallet.

#### Parameters

- `currency` (string): The currency of the wallet.

#### Returns

- Promise: A promise that resolves to the wallet balance data.

### `getWalletTransactions(currency)`

Get the transactions of a wallet.

#### Parameters

- `currency` (string): The currency of the wallet.

#### Returns

- Promise: A promise that resolves to the wallet transaction data.

### `initiateAirtimePurchase()`

Initiate an airtime purchase.

#### Returns

- Promise: A promise that resolves to the airtime purchase data.

### `initiateInternetSubscription()`

Initiate an internet subscription.

#### Returns

- Promise: A promise that resolves to the internet subscription data.

### `initiateTvSubscription()`

Initiate a TV subscription.

#### Returns

- Promise: A promise that resolves to the TV subscription data.

### `initiateElectricityBillPayment()`

Initiate an electricity bill payment.

#### Returns

- Promise: A promise that resolves to the electricity bill payment data.

### `verifyBVN(bvn, firstName, lastName, gender, reference, callbackUrl)`

Verify a Bank Verification Number (BVN).

#### Parameters

- `bvn` (string): The Bank Verification Number to verify.
- `firstName` (string): The first name of the BVN owner.
- `lastName` (string): The last name of the BVN owner.
- `gender` (string): The gender of the BVN owner.
- `reference` (string): The reference for the verification.
- `callbackUrl` (string): The callback URL for the verification result.

#### Returns

- Promise: A promise that resolves to the BVN verification data.

### `initiateAccountOpening(bvn, firstName, middleName, lastName, phoneNumber, email, dob, address)`

Initiate an account opening.

#### Parameters

- `bvn` (string): The BVN of the account owner.
- `firstName` (string): The first name of the account owner.
- `middleName` (string): The middle name of the account owner.
- `lastName` (string): The last name of the account owner.
- `phoneNumber` (string): The phone number of the account owner.
- `email` (string): The email of the account owner.
- `dob` (string): The date of birth of the account owner.
- `address` (string): The address of the account owner.

#### Returns

- Promise: A promise that resolves to the account opening data.

### `getAccountOpening(accountOpeningId)`

Get an account opening by ID.

#### Parameters

- `accountOpeningId` (string): The ID of the account opening to retrieve.

#### Returns

- Promise: A promise that resolves to the account opening data.

### `updateAccountOpening(accountOpeningId, status)`

Update the status of an account opening.

#### Parameters

- `accountOpeningId` (string): The ID of the account opening to update.
- `status` (string): The new status of the account opening.

#### Returns

- Promise: A promise that resolves to the updated account opening data.

### `getSupportedCountries()`

Get the list of supported countries.

#### Returns

- Promise: A promise that resolves to the supported countries list.
