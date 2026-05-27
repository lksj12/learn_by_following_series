"use strict"
class PaymetnGateway {
    constructor() {
        this.connect();
    }
    connect() {

    }
    pay(amount) {

    }
    refund(amount) {

    }
}

class Paypal extends PaymetnGateway {
    pay(amount) {

    }
    refund(amount) {

    }
    connect() {

    }
}

class Visa extends PaymetnGateway {
    pay(amount) {

    }
    refund(amount) {

    }
    connect() {
        
    }
}

class Customer {
    makePayment(gateway, amount) {
        return gateway.pay(amount);
    }

    getRefund(gateway, amount) {
        return gateway.refund(amount);
    }
}

const john = new Customer();
const paypal = new Paypal();
const visa = new Visa();

john.makePayment(paypal, 100);
john.getRefund(visa, 100);