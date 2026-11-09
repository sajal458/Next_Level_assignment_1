const multiplyValue=(val1:number,val2?:number):number=>{
    if(val2 !=undefined){
        return val1 * val2
    }
    return val1 * 2
}




const processInput=(val:number | string | boolean) :number | string =>{
    if(typeof val =='string' )
    {
        return val.trim().toLowerCase()
    }
    else if (typeof val =='number')
    {
        return val * 10
    }
    else{
        if(val==true) {
            return 'Active'
         }
         return "Inactive"
    }
}



const formatCoordinate=([latitude, longitude, locationName]: readonly [number, number, string]) : string=>{

    
return `Location: ${locationName} (${latitude}, ${longitude})`

}




function concatenateArrays<T>(...arrays: T[][]): T[]{
const result: T[]=[];

  for (let i=0;i<arrays.length;i++){
    for (let j=0;j<arrays[i].length;j++){
      result.push(arrays[i][j]);
    }
  }

  return result;
}








interface Course {
    title :string
    students :number
    isPublished :boolean
}
const getPopularCourses =(courses : Course[],min_student:number):Course[]=>{
       return courses.filter((course)=>{ return course.isPublished==true && course.students>=min_student})
       

}


const pluckValues = <T,K extends keyof T>(items: T[], key: K): T[K][] => {
    const res: T[K][]=[]
    items.forEach(item => {
        res.push(item[key])
        
    });
    return res
}






class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string,baseSalary: number) {
        this.name=name;
        this.baseSalary=baseSalary;
    }

    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}


class Manager extends Employee{
    private department: string;

    constructor(name: string,baseSalary: number,department: string) {
        super(name,baseSalary);
        this.department=department;
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}




const validateAgeAsync = async (age: number): Promise<string>=>{

    if (age>=18){
        return new Promise((resolved) =>{
            setTimeout(()=>{
                resolved("Access Granted");
            },1000);
        });
    }
    else {
        throw new Error("Access Denied: Must be 18 or older");
    }
};

