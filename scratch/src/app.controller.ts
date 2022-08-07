import { Controller, Get } from "@nestjs/common";

@Controller('/app')
class AppController {
    @Get()
    getRootRoute() {
        return 'qwe';
    }
}

export default  AppController;
