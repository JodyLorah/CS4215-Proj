// tail call(?)

// shows type checking for params
int i = 0;
int y = 3+2;

int main(){
    int c = f(1,2,3);
    int fun = f1();
    return c;
}

int f(int x, int y, int z) {
    i = z;
    return f1();
}

int f1() {
    return 133;
}
