
export class SingletonLogger {
    private logs: object[];

    // 1) Declarar um atributo instância com o tipo da própria classe.
    private static instance: SingletonLogger

    // 2) Tornar o construtor privado.
    private constructor() {
        this.logs = [];
    }

    get count(): number {
        return this.logs.length;
    }

    /**
     * 3) Como o construtor fica privado, não sendo possível criar
     * uma instância da classe utilizando o "new", precismos de
     * um método estático que vai se encarregar de criar e
     * retornar uma instância única do Logger.
     */
    public static getInstance(): SingletonLogger {
        if (!SingletonLogger.instance) {
            SingletonLogger.instance = new SingletonLogger();
        }

        return SingletonLogger.instance;
    }

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