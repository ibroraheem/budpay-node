const axios = require('axios');

class BudPaySDK {
    constructor(secretKey, publicKey) {
        this.secretKey = secretKey;
        this.publicKey = publicKey;
        this.apiUrl = 'https://api.budpay.com/api';
    }


    async initializeTransaction(amount, card, currency, email, reference) {

        const transactionPayload = {
            amount,
            card,
            currency,
            email,
            reference,
        };

        const orderedPayload = Object.keys(transactionPayload)
            .sort()
            .reduce((acc, key) => {
                acc[key] = transactionPayload[key];
                return acc;
            }, {});

        const orderedPayloadString = JSON.stringify(orderedPayload);
        const encryption = await this.calculateHmacSignature(orderedPayloadString);

        try {
            const response = await axios.post(`${this.apiUrl}/transaction/initialize`, orderedPayloadString, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                    Encryption: encryption, 
                },
            });

            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async initializeBankTransfer(email, amount, currency, reference, name) {
        const data = {
            email,
            amount,
            currency,
            reference,
            name,
        };

        try {
            const response = await axios.post(
                `${this.apiUrl}/banktransfer/initialize`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${this.secretKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async verifyTransaction(reference) {
        try {
            const response = await axios.get(
                `${this.apiUrl}/transaction/verify/${reference}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.secretKey}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }


    async requestPayment(recipient, amount, currency, description) {
        const requestData = {
            recipient,
            amount,
            currency,
            description,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/request_payment`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async createPaymentLink(amount, currency, name, description, redirect) {
        const requestData = {
            amount,
            currency,
            name,
            description,
            redirect,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/create_payment_link`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async createCustomer(email, firstName, lastName, phone) {
        const requestData = {
            email,
            first_name: firstName,
            last_name: lastName,
            phone,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/customer`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createDedicatedVirtualAccount(customerId) {
        const requestData = {
            customer: customerId,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/dedicated_virtual_account`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getSettlements() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/settlement`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateRefund(reference) {
        const requestData = {
            reference,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/refund`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getTransaction(transactionId) {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/transaction/${transactionId}`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getBankList() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/bank_list`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateBankTransfer(bankCode, accountNumber, currency) {
        const requestData = {
            bank_code: bankCode,
            account_number: accountNumber,
            currency,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/bank_transfer`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateEncryptedBankTransfer(encryptedPayload) {
        try {
            const response = await axios.post(`${this.apiUrl}/v2/bank_transfer`, encryptedPayload, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Encryption': 'Signature_HMAC-SHA-512',
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateBulkBankTransfer(transfers) {
        const requestData = {
            currency: transfers[0].currency,
            transfers,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/bulk_bank_transfer`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Encryption': 'Signature_HMAC-SHA-512',
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getPayout(payoutReference) {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/payout/${payoutReference}`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getPayoutFee(currency, amount) {
        const requestData = {
            currency,
            amount,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/payout_fee`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getWalletBalance(currency) {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/wallet_balance/${currency}`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getWalletTransactions(currency) {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/wallet_transactions/${currency}`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateAirtimePurchase() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/airtime`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateInternetSubscription() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/internet`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateTvSubscription() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/tv`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async initiateElectricityBillPayment() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/electricity`, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async verifyBVN(bvn, firstName, middleName, lastName, phoneNumber, dob, gender, reference, callbackUrl) {
        const requestData = {
            bvn,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            phone_number: phoneNumber,
            dob,
            gender,
            reference,
            callback_url: callbackUrl,
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/bvn/verify`, requestData, {
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

module.exports = BudPaySDK

