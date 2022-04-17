const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Abel', () => {
        const response = sayHelloWorld.sayHello('Abel');

        expect(response).toBe('Hello Abel!');
    });
});
