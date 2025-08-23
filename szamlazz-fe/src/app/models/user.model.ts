import { ProfessionEnum } from "./profession.enum";

export interface UserResponse {
    id: number;
    lastname: string;
    firstname: string;
    address: string;
    telephone: string;
    active: boolean;
    job: ProfessionEnum;
}

export interface UserRequest {
    lastname: string;
    firstname: string;
    address: string;
    telephone: string;
    active: boolean;
    job: ProfessionEnum;
}