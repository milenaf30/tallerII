# ApplicationServer

Para correr el programa:

```
/tallerII/ApplicationServer$  cmake code/
/tallerII/ApplicationServer$  make
/tallerII/ApplicationServer$  ./AppServer
```

Para instalar leveldb:

```
sudo apt-get install libsnappy-dev
git clone https://github.com/google/leveldb.git
cd leveldb
make
sudo mv out-shared/libleveldb.* /usr/local/lib
sudo mv out-static/libleveldb.* /usr/local/lib
sudo cp -R include/leveldb /usr/local/include
```

