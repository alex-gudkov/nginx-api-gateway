import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public getHello(): string {
        return 'Hello from App 2!';
    }
}
