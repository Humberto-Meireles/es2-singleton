import { WithoutSingletonLogger } from './WithoutSingletonLogger';
import { Payment } from './Payment';

const logger: WithoutSingletonLogger = new WithoutSingletonLogger();

logger.log('Iniciando o processador de pagamentos.');

console.log('Número de logs: ' + logger.count.toString());

const newPayment: Payment = new Payment();

newPayment.process(100);

console.log('Número de logs: ' + logger.count.toString());