"# prueba-tecnica-indra" 
- En la carpeta documentación se encuentra la documentación de uso, pruebas unitarias y documentación con Swagger
- En la carpeta serverless-api se encuentra todo el código desarrollado dividido en carpetas:
	- En la carpeta modelo se encuentra el archivo persona.js que define la clase persona
	- En la carpeta logica se encuentra el archivo persona_logica.js con la logica del negocio y conexión a base de datos
	- En la carpeta controller se encuentra el archivo persona_controller.js con la declaración de las API GET y POST
	
- Para ejecutar offline usar el siguiente comando: sls offline start --migrate

- Para desplegar en lambda usar el siguiente comando: sls deploy

- Para más información del uso revisar la documentación