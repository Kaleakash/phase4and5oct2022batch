public class Employee {
    private int id;
    private String name;
    private float salary;
    Employee() {

    }
    Employee(int id, String name, float salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    @Override
    public String toString() {
        
        return "Id is "+this.id+"Name is "+this.name+" Salary is "+this.salary;
    }
}
