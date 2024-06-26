import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getQury(query: any): string;
    getQuryByName(query: any): string;
    getPrams(parmas: any): string;
    getBody(body: any): any;
    geRes(req: any, res: any): void;
}
