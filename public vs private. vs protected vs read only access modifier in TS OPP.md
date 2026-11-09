**Title** public vs private. vs protected vs read only access modifier in TS OPP

**Intoduction** :
In OOP access modifers are used to defined how properteis and methods can be accessed.
In Type Scripts We have different types of aceess modifier such as public , private,protected and read only .
All of them have different purpose.

lets take an code as example :
class Student{
    public name: string;
    private password: string;
    protected age: number;
    readonly studentId: number;

    constructor(name: string,password: string,age: number,studentId: number){
        this.name=name;
        this.password=password;
        this.age=age;
        this.studentId=studentId;
    }

    public showInfo():void{
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`ID: ${this.studentId}`);
        console.log(`Password: ${this.password}`);
    }
}


**Explantion:**

public:
public access modifiers means that it can be acess from anywhere.It could br from child class.
here we can we name as public access modifier so it can be used from anywhere.


private : 
private access modifier can't be access directly from outsite class or child variable.althoug It can be assinged value or to get output we can use get and set method.
In the exapmle we can see that password is private access modifier.It can't be direclt found from outside of the class.

protected :
Protected access modifier can be access from child class or within the it's calss.However it can;t be access directly from outside of a class .
In the example age is protected access modifier which can used by it children

Readonly : 
Readonly prevent a property from reassigned after it's initialization.
In the example studentid can't be modified after it was initialized


**Conclusion:**
Acess modifier are one of the most important terms in OOP.It helps us to controll data.It can used too handle security