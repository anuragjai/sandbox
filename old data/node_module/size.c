//Error, program has sttoped working, It wil contain 10^5*10^5 array, we can't intialize more than taht.
#include<stdio.h>
int main()
{
	int a[1000000][1000000];
	printf("%d ",sizeof(a));
	return 0;
}
