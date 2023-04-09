// shows type checking for params
int i = 0;
int y = 3+2;

int main(){
    int c = f(0.1,2,3);
    return 2;
}

int f(int x, int y, int z) {
    i = z;
    return x;
}
