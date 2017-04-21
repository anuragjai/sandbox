//Error, program has sttoped working, It wil contain 10^5*10^5 array, we can't intialize more than taht.
#include<stdio.h>
int main()
{
	int a[10000000][100000000];
	printf("%ld",sizeof(a));
	return 0;
}
