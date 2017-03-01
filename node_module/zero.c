#include<stdio.h>
void function(int);

int main()
{
     int x;

     printf("Enter x:");
     scanf("%d", &x);

function(x);

return 0;
}

void function(int x)
{
    float fx;

    if(x==0) // Simple!
        printf("division by zero is not allowed");
    else
        fx=10/x;            
        printf("f(x) is: %.5f",fx);

}
