const axios = require('axios');
const crypto = require('crypto');

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

        const sortedTransactionPayload = {};
        Object.keys(transactionPayload)
            .sort()
            .forEach((key) => {
                sortedTransactionPayload[key] = transactionPayload[key];
            });

        const sortedTransactionPayloadString = JSON.stringify(sortedTransactionPayload);
        const encryption = calculateHmacSignature(sortedTransactionPayloadString, this.secretKey);

        function calculateHmacSignature(data, secret) {
            const hmac = crypto.createHmac('sha512', secret).update(data).digest('hex');
            return hmac;
        }

        try {
            const response = await axios.post(`${this.apiUrl}/s2s/v2/transaction/initialize`, sortedTransactionPayloadString, {
                headers: {
                    'Authorization': `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                    'Encryption': `Signature_HMAC-SHA-512`,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }



    async initializeBankTransfer(email, amount, currency, reference, name) {
        const requestData = {
            email,
            amount,
            currency,
            reference,
            name,
        };

        try {
            const response = await axios.post(
                `${this.apiUrl}/s2s/banktransfer/initialize`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
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
                `${this.apiUrl}/v2/transaction/verify/${reference}`,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getTransaction(transactionId) {
        try {
            const response = await axios.get(
                `${this.apiUrl}/v2/transaction/${transactionId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
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
            const response = await axios.post(
                `${this.apiUrl}/v2/request_payment`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
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
            const response = await axios.post(
                `${this.apiUrl}/v2/create_payment_link`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
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
            const response = await axios.post(
                `${this.apiUrl}/v2/customer`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
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
            const response = await axios.post(
                `${this.apiUrl}/v2/dedicated_virtual_account`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async createPaymentLink(amount, currency, name, description, redirect) {
        const requestData = {
            amount: amount,
            currency: currency,
            name: name,
            description: description,
            redirect: redirect,
        };

        try {
            const response = await axios.post(
                `${this.apiUrl}/v2/create_payment_link`,
                requestData,
                {
                    headers: {
                        'Authorization': `Bearer ${this.secretKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getSettlement() {
        try {
            const response = await axios.get(`${this.apiUrl}/v2/settlement`, {
                headers: {
                    'Authorization': `Bearer ${this.secretKey}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async refund(reference) {
        try {
            const response = await axios.post(`${this.apiUrl}/v2/refund`, {
                reference,
            }, {
                headers: {
                    'Authorization': `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getBankList(currency) {
        try {
            const url = `${this.apiUrl}/v2/bank_list/${currency}`;
            const headers = {
                'Authorization': `Bearer ${this.secretKey}`,
            };

            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async bankTransfer(bankCode, accountNumber, currency) {
        const requestData = {
            bank_code: bankCode,
            account_number: accountNumber,
            currency,
        };

        const headers = {
            'Authorization': `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(`${this.apiUrl}/v2/bank_transfer`, requestData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async bankTransfer(currency, amount, bankCode, bankName, accountNumber, narration) {
        const requestData = {
            currency,
            amount,
            bank_code: bankCode,
            bank_name: bankName,
            account_number: accountNumber,
            narration,
        };

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Encryption': 'Signature_HMAC-SHA-512',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post('https://api.budpay.com/api/v2/bank_transfer', requestData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async bulkBankTransfer(currency, transfers) {
        const requestData = {
            currency,
            transfers,
        };

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Encryption': 'Signature_HMAC-SHA-512',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post('https://api.budpay.com/api/v2/bulk_bank_transfer', requestData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getPayoutByReference(reference) {
        const url = `https://api.budpay.com/api/v2/payout/${reference}`;

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getPayoutFee(currency, amount) {
        const url = 'https://api.budpay.com/api/v2/payout_fee';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        const requestData = {
            currency,
            amount,
        };

        try {
            const response = await axios.post(url, requestData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getWalletBalance(currency) {
        const url = `https://api.budpay.com/api/v2/wallet_balance/${currency}`;

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getAirtime() {
        const url = 'https://api.budpay.com/api/v2/airtime';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getInternet() {
        const url = 'https://api.budpay.com/api/v2/internet';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getTV() {
        const url = 'https://api.budpay.com/api/v2/tv';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getElectricity() {
        const url = 'https://api.budpay.com/api/v2/electricity';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async verifyBVN(bvnData) {
        const url = 'https://api.budpay.com/api/v2/bvn/verify';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(url, bvnData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async bankTransfer(bankTransferData) {
        const url = 'https://api.budpay.com/api/v2/bank_transfer';

        const headers = {
            'Authorization': 'Bearer YOUR_SECRET_KEY',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(url, bankTransferData, { headers });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

module.exports = BudPaySDK;
