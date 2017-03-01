#include<stdio.h>
int main()
{
    int *ptr = malloc(sizeof(int));

    free(ptr);    //ptr now becomes dangling pointer which is pointing to dangling reference
    //*ptr=NULL; 
    printf("ptr is now dangling pointer \n""%d\n" ,ptr);   //now ptr is not dangling pointer
return 0;
}

