"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Video 100");
const user = "USER";
const admin = "ADMIN";
const superAdmin = 1;
const otherUser = "ADMIN";
var roleEnum;
(function (roleEnum) {
    roleEnum["USER"] = "USER";
    roleEnum["ADMIN"] = "ADMIN";
    roleEnum["SuPERADMIN"] = "SUPERADMIN";
})(roleEnum || (roleEnum = {}));
const myRole1 = roleEnum.USER;
const myRole2 = roleEnum.SuPERADMIN;
console.log("myRole1= ", myRole1);
console.log("myRole2= ", myRole2);
