// shows able to return declared stuff in function

int i = 0;
int y = 3+2;

int main(){
    int c = f(1,2,3);
    int fun = f1();
    return fun;
}

int f(int x, int y, int z) {
    i = z;
    return x;
}

int f1() {
    return i;
}
