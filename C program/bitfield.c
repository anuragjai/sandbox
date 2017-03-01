#include <stdio.h>
 
struct date
{
   // d has value between 1 and 31, so 5 bits
   unsigned int d: 5;//bitfield use for to optmize the space
   // m has value between 1 and 12, so 4 bits
   unsigned int m: 4;
   unsigned int y;
};
 
int main()
{
   printf("Size of date is %d bytes\n", sizeof(struct date));
   struct date dt = {31, 12, 2014};
   printf("Date is %d/%d/%d", dt.d, dt.m, dt.y);
   return 0;
}