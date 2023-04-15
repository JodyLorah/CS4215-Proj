// testing return function calls

int factorial(int n)  {  
    if (n == 0)  {
        return 1;  
    } else {
        return (n * factorial(n-1));  
    }
}  
   
int main()  {  
  return factorial(6);    
}  