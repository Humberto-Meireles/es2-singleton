import { SingletonLogger } from './SingletonLogger';

export class Payment {
    // A inicialização do logger é feita através do método estático "getInsntace"
    private logger: SingletonLogger = SingletonLogger.getInstance();

    constructor() {
        this.logger.log('Instância de pagamento criada.');
    }

    public process(amount: number) {
        this.logger.log('Processando pagamento: ' + amount.toString());
    }
}