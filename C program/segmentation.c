#include <stdio.h>
void foo()
{
    char *x = 0;
    *x = 3;//Attempting to Overwrite 
}
       
int main()
{
    foo();
    return 0;
}
//It gives Segmentation fault