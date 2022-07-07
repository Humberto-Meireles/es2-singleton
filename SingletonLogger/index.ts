import { SingletonLogger } from './SingletonLogger';
import { Payment } from './Payment';

// A inicialização do logger é feita através do método estático "getInsntace"
const logger: SingletonLogger = SingletonLogger.getInstance();

logger.log('Iniciando o processador de pagamentos.');

console.log('Número de logs: ' + logger.count.toString());

const newPayment: Payment = new Payment();

newPayment.process(100);

console.log('Número de logs: ' + logger.count.toString());