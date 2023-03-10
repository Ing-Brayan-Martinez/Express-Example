import Optional from "optional-js";

export function getHola(): string {
    return 'hola';
}

export function getResult(): Optional<number> {
    // Declare a potentially undefined value
    const username = process.env.USER;

    // Wrap username in an Optional, and build a pipeline using our operations
    return Optional.ofNullable(username)
        .map(username => username === 'root' ? 1234 : 0)
        .filter(userId => userId === 1234);
}

export function sum(a: number, b: number): number {
    return a + b;
}