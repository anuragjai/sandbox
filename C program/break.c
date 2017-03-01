//Forgetting to put a break in a switch statement
#include<stdio.h>
int main()
{

int i,n,x = 2;
scanf("%d",&n);
while(i<n)
{

switch(x) 
{
case 2:
  printf("Two\n");
  i++;
case 3:
  printf("Three\n");
  i++;
  
}
}
return 0;
}
