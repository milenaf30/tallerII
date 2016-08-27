# tallerII

Para instalar leveldb seguí los siguientes pasos:

sudo apt-get install libsnappy-dev
git clone https://github.com/google/leveldb.git
cd leveldb
make
cd out-shared
sudo mv libleveldb.* /usr/local/lib
cd ..
cd include
sudo cp -R leveldb /usr/local/include
cd ..
cd out-static
sudo mv libleveldb.* /usr/local/lib

