#include <string.h>
#include <stdio.h>

int main(void)
{
    char buffer[120];
    fgets(buffer, sizeof buffer, stdin);
    strcat("foo", buffer);
    return 0;
}
