import { Injectable } from "@angular/core";
import { Users } from "../models/users.model";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    Users: Users[] = [
        new Users('Gopal Vyas', 'inactive'),
        new Users('Manik Vyas', 'active'),
        new Users('Rajas Vyas', 'active'),
        new Users('Prachi Vyas', 'active'),
        new Users('Saisha Vyas', 'inactive'),
        new Users('Shashwat Vyas', 'inactive')
    ]

    constructor(private counterService: CounterService) {}

    changeUserStatus(index: number, uStatus: string) {
        this.Users[index].status = uStatus;
        if (uStatus==='active'){
            this.counterService.increaseI2A();
        }
        else if(uStatus==='inactive') {
            this.counterService.increaseA2I();
        }
        else {
            console.log('Invalid status');
        }
    }
}