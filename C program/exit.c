/* exit example */
#include <stdio.h>
#include <stdlib.h>
  
int main ()
{
  FILE * pFile;
  pFile = fopen ("C:\\Users\\Anurag Jaiswal\\Desktop\\myfile.txt", "r");//If the file does not exist, fopen() returns NULL.
  if (pFile == NULL)
  {
    printf ("Error opening file");
    exit (1);
  }
  else
  {
    printf("file does not exist");
  }
  return 0;
}