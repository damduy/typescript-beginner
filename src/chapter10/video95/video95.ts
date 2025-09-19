export{ };

console.log("Video 95"); 

type TStudent = {
    id:string;
    name:string;
    address:string;
    age:number;
}

const student1: TStudent = {
    id: "sv1",
    name: "duy",
    address: "hcm",
    age:25  
}

const student2: TStudent = {
    id: "sv2",
    name: "duy2",
    address: "hcm",
    age:25  
}

const printInfo = (st: TStudent) => {
    console.log("Student name: ", st.name)
}

printInfo(student1)
printInfo(student2)