#include<stdio.h>
#include<stdlib.h>
int main()
{
FILE *fp = fopen("C:\\Users\\Anurag Jaiswal\\Desktop\\myfile.txt", "w");

if(fp == NULL)
{
	printf("\n could not open file ");
	exit(0);
} 
fprintf(fp, "%s", "Anurag Jayasawal");
/* Something went wrong so terminate here */
abort();//This function actually terminates the process

return 0; 
}
/*Output- This application has requested the Runtime to terminate it in an unusual way.
Please contact the application's support team for more information.*/