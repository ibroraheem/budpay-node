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

        const orderedPayload = Object.keys(transactionPayload)
            .sort()
            .reduce((acc, key) => {
                acc[key] = transactionPayload[key];
                return acc;
            }, {});

        const orderedPayloadString = JSON.stringify(orderedPayload);
        const encryption = this.calculateHmacSignature(orderedPayloadString);

        try {
            const response = await axios.post(`${this.apiUrl}/s2s/v2/transaction/initialize`, orderedPayloadString, {
                headers: {
                    'Authorization': `Bearer ${this.secretKey}`,
                    'Content-Type': 'application/json',
                    'Encryption': encryption,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }

    calculateHmacSignature(data) {
        const hmac = crypto.createHmac('sha512', this.secretKey);
        hmac.update(data);
        return hmac.digest('hex');
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

}

module.exports = BudPaySDK;
