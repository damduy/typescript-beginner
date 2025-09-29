export {};

console.log("Video 99")

type TName = string | null;

let name: TName = null;

name = "Duy";

const age = undefined;

const printInfo = (myName: null | string) => {
    if(myName)
        myName.toLocaleUpperCase();
    console.log("name = ", myName);
}