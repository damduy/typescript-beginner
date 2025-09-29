export{ };

console.log("Video 100");

type TRole = string | number;

type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const superAdmin: TRole = 1;

const otherUser: TSuperRole = "ADMIN"

enum roleEnum {
    USER = "USER",
    ADMIN = "ADMIN",
    SuPERADMIN = "SUPERADMIN"
}

const myRole1: roleEnum = roleEnum.USER;
const myRole2: roleEnum = roleEnum.SuPERADMIN;

console.log("myRole1= ", myRole1);
console.log("myRole2= ", myRole2);