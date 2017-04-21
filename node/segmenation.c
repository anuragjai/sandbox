#include<stdio.h>
 
	int main(int argc, char* argv[])
	{
    		printf("%s\n", argv[5000]);
    		return 0;
	}

	/*which is basically because the code wants to access areas in memory it's not supposed to have access to.
	In other words, it's a Memory Limit Exceeded error.*/
