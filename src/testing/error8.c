// error reassignment of global var not allowed

int k = 2;
k = 4;

int main(){
    int i = 0;

    while (i > 4 || i < 6 ) {
        int j = 2;
        i = i + 1;
    }
    
    return k;
}