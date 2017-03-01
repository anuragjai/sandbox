#include <stdlib.h>
#include<stdio.h>
int main()
{
int *ptr = malloc( sizeof(int) ); /* hundreds of lines of code */
ptr = malloc( sizeof(*ptr) );
free( ptr );
free( ptr );
return 0;
}
