export class WithoutSingletonLogger {
    /**
     * Array de objetos para armazenar as entradas do Logger.
     */
    private logs: object[];

    /**
     * Construtor que instância nossa classe com um array de logs vazio.
     */
    constructor() {
        this.logs = [];
    }

    /**
     * Retorna o número de logs existentes.
     */
    get count(): number {
        return this.logs.length;
    }

    /**
     * Registra no nosso logger uma mensagem jutamente com a data
     * e hora em que ela foi registrada.
     * @param message
     */
    log(message: string) {
        const now: Date = new Date();

        const timestamp = `${now.toDateString()} ${now.toLocaleTimeString()}`;

        this.logs.push({
            message,
            timestamp,
        });

        console.log(`${timestamp} - ${message}`);
    }
}