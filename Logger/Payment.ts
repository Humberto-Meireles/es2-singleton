import { WithoutSingletonLogger } from './WithoutSingletonLogger';

export class Payment {
    private logger: WithoutSingletonLogger = new WithoutSingletonLogger();

    constructor() {
        this.logger.log('Instância de pagamento criada.');
    }

    public process(amount: number) {
        this.logger.log('Processando pagamento: ' + amount.toString());
    }
}