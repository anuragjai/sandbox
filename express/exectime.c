/* Program to demonstrate time taken by function fun() */
#include <stdio.h>
#include <time.h>

// A function that terminates when enter key is pressed
void fun()
{
	printf("fun() starts \n");
	printf("Press enter to stop fun \n");
	
	
	
	int i;
	int j;
	for(i = 0; i < 1000000; i++){
		for(j = 0; j < 10000; j++){

		}
	}
	
	
	printf("fun() ends \n");
}

// The main program calls fun() and measures time taken by fun()
int main()
{
	// Calculate the time taken by fun()
	clock_t t;
	t = clock();
	fun();
	t = clock() - t;
	double time_taken = ((double)t)/CLOCKS_PER_SEC; // in seconds

	printf("fun() took %f seconds to execute \n", time_taken);
	return 0;
}
