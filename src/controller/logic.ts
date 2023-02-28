
export class Logic {

    public async execute(): Promise<string> {
        const message = 'Hello World! desde Logic';
        const flag = true;

        if (flag) {
            throw new Error('Error en Logic');
        }
        return message;
    }
}