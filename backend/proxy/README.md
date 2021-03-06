# gRPC proxy

This proxy provides a REST+JSON interface to the gRPC backend, which is used by the client and WebApp.

***Note:*** Consider `modeldb/proxy/` as a root dir for below steps and execute it from there.

## Run proxy on local machine without Docker

* Install `Golang` to local system (https://golang.org/)

* Run verta-backend OR make sure verta-backend is already running

* Set `MDB_ADDRESS 127.0.0.1:8085` & `SERVER_HTTP_PORT 8080` as environment variables in local system and if you are skip this step then the default values are `MDB_ADDRESS localhost:8085` & `SERVER_HTTP_PORT 3000`

* Execute ```local_machine_build.sh``` to build/run proxy

* Use following URL for testing to check setup works properly: http://localhost:8080/v1/project/findProjects

## Run proxy on local machine using Docker

* Install Docker on local system

* Run verta-backend OR make sure verta-backend is already running on local system

* The proxy has the following configurations as environment variables:
  * `MDB_ADDRESS` is the `<local system host>:8085` address of the ModelDB backend.
  * `SERVER_HTTP_PORT` is the port that the proxy will listen to, which defaults to 3000.

  ***OR***

  * Add below two lines to dockerfile before the `ENTRYPOINT` command

    ```yaml
       - ENV MDB_ADDRESS <local system host (Not docker machine)>:8085
       - ENV SERVER_HTTP_PORT 3000
    ```

* To build it, just run `make` and an image called `vertaaiofficial/modeldb-proxy` will be created in your local docker system.

* Execute following command to run proxy on docker

    ```bash
    docker run -it -p 3000:3000 vertaaiofficial/modeldb-proxy
    ``` 

* Use following URL for testing to check setup works properly:

  ```md
  http://<docker-machine host>:3000/v1/project/findProjects
  ```
