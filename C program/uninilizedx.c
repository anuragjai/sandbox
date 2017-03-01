/*Uninitialized local variable
    A local variable of a function is not initialized before it is read. 

In both cases, whatever value happens to be stored in the allocated memory is used. As is the case with other memory errors, there is often a delay between the point where the uninitialized memory read occurs and the point where observable erroneous behavior occurs. An example of this is the function sum()*/

#include<stdio.h>

	sum(int *A, int n)
	{
	int x, i=0;
	while(i<n)
	{
		x=x+A[i];
		++i;
	}
	return x;
	}
	
	int main ()
	{
	int *A,n;	
	sum(A,n);
	return;
	}
