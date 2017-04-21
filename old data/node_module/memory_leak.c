/* Function with memory leak */
#include <stdio.h>
#include <stdlib.h>
/*Memory leak occurs when programmers create a memory in heap and forget to delete it.
Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate*/

void f()
{
   int *ptr = (int*)malloc(sizeof(int));
   //free(ptr);To avoid memory leaks, memory allocated on heap should always be freed when no longer needed
 
   return; /* Return without freeing ptr*/
}
int main()
{
	void f();
	return 0;
} 

//No output
