// tests global var assign to local var

int i = 0;
int y = 3+2;

int main(){
    int a;
    int b = 4;
    a = 2 + 3;
    i = a;
    int c = f(1,2,3);
    int fun = f1();
    return i;
}

int f(int x, int y, int z) {
    int a;
    int b = 4;
    a = 2 + 3;
    i = 10;
    return 2;
}

int f1() {
    return 5;
}
