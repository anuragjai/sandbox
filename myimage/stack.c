#include<stdio.h>

int main()
{
    int large[10000000] = {0};//Segmentation fault (core dumped)

    return 0;
}
