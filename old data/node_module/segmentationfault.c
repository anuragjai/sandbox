#include<stdio.h>
#include<stdlib.h>

void main()
{

	int n,i,j,**mat;
	printf("\nEnter the size of the square matrix: ");
	scanf("%d",&n);


	*mat = (int **)malloc(n*sizeof(int *)); 
	for(i=0;i<n;i++)
	{
		mat[i]= (int *)malloc(n*sizeof(int));
	}
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++) 
			printf("%d\t",mat[i][j]=rand()%10*i+j);
			printf("\n\n\n");
	}
			printf("Bye\n");

}