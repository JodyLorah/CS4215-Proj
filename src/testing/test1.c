// shows change to global var and inter function calls

int i = 0;
int y = 3+2;

int main(){
    int c = f(1,2,3);
    int fun = f1();
    return 2;
}

int f(int x, int y, int z) {
    i = z;
    return 2;
}

int f1() {
    return 5;
}
