cmake_minimum_required(VERSION 2.8)
project(ApplicationServer)

set (ApplicationServer_VERSION_MAJOR 1)
set (ApplicationServer_VERSION_MINOR 0)

# configure a header file to pass some of the CMake settings
# to the source code
configure_file (
  "${PROJECT_SOURCE_DIR}/ApplicationServer_config.h.in"
  "${PROJECT_BINARY_DIR}/ApplicationServer_config.h"
  )

add_executable(ApplicationServer main.cpp)
target_link_libraries(ApplicationServer Mongoose)