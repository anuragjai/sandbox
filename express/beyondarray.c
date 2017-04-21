#include<stdio.h>
int main()
{
	char buff  = malloc(10*sizeof(char);
	//char buff[10];
	
	buff[10] = 'c';
	strcpy(buff, "This String Will Overflow the Buffer");
	printf("%s\n",buff);

	return 0;
}
