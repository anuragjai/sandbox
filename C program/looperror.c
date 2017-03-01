#include<stdio.h>
int main()
{

int x = 5;
while( x > 0 ); /*is an infinite loop. Why? The semicolon after the while defines the statement to repeat as the null statement (which does nothing). Remove the semicolon and the loop works as expected.*/
  x--;
  return 0;
  }
