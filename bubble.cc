
#include<iostream>
#include<array>

struct Bubble {
  static void sort( std::array<int, 5> array ){
      // Bubble Sort Starts Here
       int temp;
       for(int i2=0; i2<=4; i2++)
     {
       for(int j=0; j<4; j++)
       {
          //Swapping element in if statement
             if(array[j]>array[j+1])
         {
          temp=array[j];
          array[j]=array[j+1];
          array[j+1]=temp;
         }
       }
     }
     // Displaying Sorted array
        std::cout<<"  Sorted Array is: "<<std::endl;
       for(int i3=0; i3<5; i3++)
     {
      std::cout<<"\t\t\tValue at "<<i3<<" Index: "<<array[i3]<<std::endl;
     }

  }
};
#include "nbind/nbind.h"

NBIND_CLASS(Bubble) {
  method(sort);
}
