arrayX = [1,9,-1,5,10,23,-2,7,4,5,1];
for (i = 0; i >= 0 ; i++)
{
for (i = 0; i <= arrayX.length-1; i++)
 	{
    	if (arrayX[i] > arrayX[i+1])
      	{
        temp = arrayX[i+1];
        arrayX[i+1] = arrayX[i];
        arrayX[i] = temp;
        i = i-2;
       	}
   }

  console.log(arrayX);;
}
