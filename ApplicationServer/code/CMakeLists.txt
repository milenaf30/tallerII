cmake_minimum_required(VERSION 3.6)
project(ApplicationServer)

include_directories(mongoose)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

set(SOURCE_FILES main.cpp mongoose/mongoose.h mongoose/mongoose.c)
add_executable(AppServer ${SOURCE_FILES})