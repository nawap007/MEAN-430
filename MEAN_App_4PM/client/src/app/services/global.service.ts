import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    apiAddress: string;
    baseAddress: string;
    cartName:string;
    paymentGatewayUrl:string;
    successUrl:string;
    failedUrl:string;
    key:string;
    salt:string;
    constructor() {
        this.apiAddress = 'http://localhost:3000/api';
        this.baseAddress = 'http://localhost:4200';
        this.cartName='cart';

        this.paymentGatewayUrl='https://test.payu.in/_payment';
        this.successUrl='http://localhost:3000/api/store/paymentstatus';
        this.failedUrl='http://localhost:3000/api/store/paymentstatus';
        this.key='gtKFFx';
        this.salt='eCwWELxi';
    }
}