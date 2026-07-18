const prompt=require("prompt-sync")()

//---------------------------------------------
students=[]
//---------------------------------------------

function addStuDEt(){
    const ob={};
    console.log("\nAdd student details\n"+"-".repeat(50))
    const id=parseInt(prompt("id: "))
    const name=prompt("name: ")
    const marks=parseInt(prompt("marks: "))
    const arr=["id","name","marks"]
    ob.id=id;
    ob.name=name;
    ob.marks=marks;
    students.push(ob)
}

function showDetails(){
    for(const student of students){
        console.log(student);
    }
}
function searchById(){
    const id=parseInt(prompt("Enter student id to search: "));
    let student=students.find(s=>s.id===id);
    if(student===undefined){
            console.log("Student not found");
    }else{
        console.log(student);
    }

}
function searchByName(){
    const name=prompt("Enter student name to search: ").toLowerCase();
    let student=students.find(s=>s.name.toLowerCase()===name);
    if(student===undefined){
            console.log("Student not found");
    }else{
        console.log(student);
    }
}
function ifStudentExist(){
    const id=parseInt(prompt("Enter student id to search: "));
    let student=students.find(s=>s.id===id);
    if(student===undefined){
            console.log("Student not found");
    }else{
        console.log("student exists..");
    }
}
function findTopper(){
    const dup=students.slice();
    if(dup.length===0){
        console.log("no toppers found..");
    }else{
        dup.sort((a,b)=>b.marks-a.marks);
        console.log("Topper: "+dup[0].name.toUpperCase()+" |"+" Marks: "+dup[0].marks);
    }
}
function sort(){
    console.log("1. ASC\n2. DESC")
    let choice=parseInt(prompt("1 or 2 : "))
    let dup=students.slice();
    if(choice===1){
        dup.sort((a,b)=>a.marks-b.marks);
        console.log("Sorted in ASC order : ");
        dup.map(s=>console.log(s));
        return
    }
    dup.sort((a,b)=>b.marks-a.marks);
    console.log("Sorted in DESC order : ")
    dup.map(s=>console.log(s));
    
}
function everyStudentPassed(){
    let isTrue=students.every(s=>s.marks>=40);
    if(isTrue){
        console.log("All students passed");
    }else{
        console.log("Some students failed");
    }
}
function studentAboveNINE(){
    let isTrue =students.some(s=>s.marks>90);
        console.log("any students above 90 : "+isTrue)
    
}
function showStuName(){
    console.log("STUDENTS\n"+"-".repeat(50))
    for(const student of students){
        console.log(student.name);
    }
}


function main(){
    const menu=[
            "Add student details",
            "Show all student details",
            "Search by id",
            "Search by name",
            "Check if student exist",
            "Find TOPPER",
            "Sort->(ASC/DESC)",
            "Check if every student passed",
            "Check if any student have 90 above ",
            "All student name",
            "EXIT ->]"
    ]

    for(const i of menu){
        console.log(menu.indexOf(i)+1+". "+i)
    }
    console.log("enter your option...\n"+"-".repeat(50))
    while(true){
        switch(parseInt(prompt("-> "))){
            case 1:addStuDEt();break;
            case 2:showDetails();break;
            case 3:searchById();break;
            case 4:searchByName();break;
            case 5:ifStudentExist();break
            case 6:findTopper();break;
            case 7:sort();break;
            case 8:everyStudentPassed();break;
            case 9:studentAboveNINE();break;
            case 10:showStuName();break;
            case 11:console.log("exiting....");process.exit();break;
            default:console.log("INVALID OPTION R U DUMB ..");break;
        }
    }
}
console.log("-".repeat(50)+"\nSTUDENT MANAGEMENT SYSTEM\n"+"-".repeat(50))
main()





