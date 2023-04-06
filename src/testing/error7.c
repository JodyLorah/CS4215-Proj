// array declaration of wrong size

int arr[] = {1,2,3};
int arr5[5];
int arr4[4] = {1,2,3,4,4};

int main(){
    double i = 0;
    arr4[2] = i;
    return arr4[3];
}