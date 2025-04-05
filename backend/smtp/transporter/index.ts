import { createTransport, Transporter } from 'nodemailer';
import smtpConfigurations from './smtp.configurations';

export default class Smtp{
    private constructor(){};
    private transporter?: Transporter;

    static instance: Smtp;
    static getTransporter(){
        if(!this.instance){
            this.instance = new Smtp();
            this.instance.transporter = createTransport( smtpConfigurations );
        }
        return this.instance.transporter;
    }
}