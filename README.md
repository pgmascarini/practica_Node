 # Nodeapp

API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.

 ## dependencias
 - MongoDB 6.0.3
 - NodeJS 18.12.1
 - npm 8.19.2
 
 ## Como arrancar
 - Instalar dependencias:
    - en la carpeta raiz.
    - ejecutar comando: npm install.
 - Arrancar MongoDB.
 - Crear base de datos nodepop.
 - Arrancar API:
    - en la carpeta raiz.
    - modo desarrollo: npm run dev.
    - modo produccion: npm start.

## Iniciar base de datos
- Ejecutar: npm run init-db.

Inicializar la base de datos, borrará las tablas y cargará los anuncios del package.json.


## API guardar anuncios 

- ruta: /api/anuncios
- metodo: Post
- body (ejemplo):  
```
{
    "nombre": "coche",
    "venta": false,
    "precio": 15000,
    "foto": "coche.png",
    "tags": ["work", "motor"]
}
```

## API listar anuncios 

- ruta: /api/anuncios
- metodo: Get
- query parameters filters:
    - venta: boolean.
        - venta: true.
        - busca: false.
    - tags: string.
        - solo acepta una tag. 
    - nombre: string.
        - literales inicializadas con el valor del parametro. 
    - precio: string. 
        - igual / maior que = x-
        - igual / menor que = -x
        - igual que = x
        - entre = x-x
- query parameters pagination:
    - start: number.
        - pagina inicio (default 0).
    - limit: number.
        - numero de elementos por pagina. 
- query parameters sort:
    - sort: string.
        - nombre de la columna.

## API listar tags

- ruta: /api/tags
- metodo: Get







