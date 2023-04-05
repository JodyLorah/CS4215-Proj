// shows type checking for function
int i = 0;
int y = 3+2;

int main(){
    int c = f(1,2,3);
    int fun = f1();
    return 2;
}

int f(int x, int y, int z) {
    i = z;
    return x;
}

double f1() {
    return i;
}
