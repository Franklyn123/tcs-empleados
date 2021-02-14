# Star Wars API - Serverless

## Install

Para instalar ejecute el siguiente comando:

```bash
npm install
```


## API Desarrolladores

### Desarrolladores

1. GET

  ```bash
  https://iuikzsc7mh.execute-api.us-east-1.amazonaws.com/dev/desarrolladores/
  ```

  ```bash
  https://iuikzsc7mh.execute-api.us-east-1.amazonaws.com/dev/desarrolladores/1
  ```
2. POST

  ```bash
  https://iuikzsc7mh.execute-api.us-east-1.amazonaws.com/dev/desarrolladores/
  ```
  ```javascript
  {
      "dni": "11223344",
      "nombres": "jorge",
      "apellidos": "benito perez"
  }
  ```

3. PUT

  ```bash
  https://iuikzsc7mh.execute-api.us-east-1.amazonaws.com/dev/desarrolladores/
  ```
  ```javascript
  {
      "dni": "11223344",
      "nombres": "jorge",
      "apellidos": "benito perez"
  }
  ```
  
4. DELETE

  ```bash
  https://iuikzsc7mh.execute-api.us-east-1.amazonaws.com/dev/desarrolladores/1
  ```