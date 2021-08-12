# Small C++ project for the Blueprint Browser Image cpp example
## Description

This c++ file can be used after building the Blueprint Browser Docker Image to verify that the development environment works correctly. 

## How to use it

After building the Blueprint Browser Docker Image, you can follow these instructions :

1. Assuming that you have just finished to build the image from the Dockerfile in the `browser` directory, you can go to the example_cpp directory (the one that contains this README) using `cd example_cpp`.
2. Run the following command : `docker run -it -p 3000:3000 -v "$(pwd)":/home/hello_c [image-name]`
You should see the Blueprint IDE on your `localhost:3000`. 
3. Create a workspace in the Blueprint browser target by opening the `example_cpp` folder containing the 
c++ file.
4. You can execute the program by entering in the terminal (must be opened at the same location) these
following commands : 
    4.1. `g++ hello.cpp -o hello`
    4.2. `./hello`
