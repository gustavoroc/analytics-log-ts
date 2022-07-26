import { Log } from './log';

export class LoginView {
    constructor(private readonly log: Log) {}

    render() {
        // Simula a renderização de uma view.
        this.log.event('screen', { name: 'Login' });
    }
}

