PROG  = applicationServer
CFLAGS = -g -Wall
DSRC = src/
all: $(PROG)

deleteOld:
	rm $(PROG)

applicationServer:
	g++ main.cpp -o appServer

clean:
	rm -f $(PROG) *.so *.o *.a *.core

permissions:
	chmod +x $(PROG)
