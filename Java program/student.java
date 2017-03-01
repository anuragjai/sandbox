//Example of Object and class that maintains the records of students
import java.util.*;
class Student
{  
 int rollno;  
 String name;  
  
 	void insertRecord(int r, String n)
 	{   
  		rollno=r;  
  		name=n;  
 	}  
 	void displayInformation()
 	{
 		System.out.println(rollno+" "+name);
 	} 
  
 public static void main(String args[])
 {  
  	Student s1=new Student();  //The new keyword is used to allocate memory at runtime.
  	Student s2=new Student();  
  
  	s1.insertRecord(111,"Kanhu");  
  	s2.insertRecord(222,"Rahul");  
  
  	s1.displayInformation();  
  	s2.displayInformation();  
  
 	}  
}