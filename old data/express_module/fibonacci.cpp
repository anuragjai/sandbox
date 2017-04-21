//Fabonic Series upto 100
#include<iostream.h>

void main()
{ 
double i, first, second, next; 
clrscr(); 
first=0; 
second=1; 
for(i=1;i<=100;i++) 
{ 
 cout<<first; 
 next=first+second;
 first=second;
 second=next; 
} 
} 
