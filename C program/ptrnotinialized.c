//Using Uninitialized Pointers
#include<stdio.h>
int main()
{              int a,*ptr;//The pointer ptr has not been initialized.
               a=25;
               *ptr=a+5;
              return 0;
}


