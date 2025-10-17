# API Veterinaria - Backend

API con Node, Express y Mongoose para gestionar **clientes** y **mascotas**.

---

## Descripción

Esta API permite gestionar clientes y sus mascotas, implementando operaciones básicas de **CRUD** para cada entidad.  
Además, permite **filtrar mascotas por cliente**, facilitando la gestión de información en clínicas veterinarias o aplicaciones similares.

**Problema que resuelve:**  
Organiza y centraliza la información de clientes y sus mascotas, evitando inconsistencias y permitiendo consultas rápidas y confiables.

---

## Características

- CRUD completo de **clientes**.
- Crear mascotas asociadas a un cliente existente.
- Filtrar mascotas por `cliente_id`.
- Validaciones de datos:
  - Nombre obligatorio.
  - Email único para clientes.
  - Especie válida para mascotas.
  - Edad no negativa.
- Relación **uno a muchos** entre clientes y mascotas.
- API preparada para futuras mejoras como autenticación o más filtros.

---

## Tecnologías Utilizadas

- **Backend:** Node.js, Express.js  
- **Base de Datos:** MongoDB con Mongoose  
- **Extras:** Nodemon para desarrollo  

---

## Instalación y Uso

1. **Clonar el repositorio:**
git clone https://github.com/usuario/api-veterinaria.git

2. **Instalar dependencias:**
npm install

3. **Configurar variables de entorno creando un archivo .env en la raíz:**
MONGO_URI=tu-cadena-de-conexión

4. **Ejecutar el servidor:**
npm run dev


## Estructura del Proyecto

```bash
api-veterinaria/
├── models/           
│   ├── Cliente.js   
│   └── Mascota.js    
├── routes/           
│   ├── clientes.js   
│   └── mascotas.js   
├── controllers/      
├── server.js         
├── .env              
├── package.json      
└── README.md        


## API Endpoints

| Método | Endpoint | Descripción | Parámetros / Body | Ejemplo de Body |
| ------ | -------- | ----------- | ---------------- | --------------- |
| GET    | `/clientes` | Lista todos los clientes | `?nombre=` (opcional, para filtrar) | - |
| GET    | `/clientes/:id` | Obtiene un cliente por ID | `id` en URL | - |
| POST   | `/clientes` | Crea un nuevo cliente | Body JSON | `{ "nombre": "María Pérez", "telefono": "+5491123456789", "email": "maria@example.com" }` |
| PUT    | `/clientes/:id` | Actualiza un cliente existente | `id` en URL, Body JSON | `{ "telefono": "+5491198765432" }` |
| DELETE | `/clientes/:id` | Elimina un cliente | `id` en URL | - |
| POST   | `/mascotas` | Crea una mascota asociada a un cliente | Body JSON | `{ "nombre": "Firulais", "especie": "Perro", "raza": "Labrador", "edad": 3, "cliente_id": "ID_DEL_CLIENTE" }` |
| GET    | `/mascotas?cliente_id=ID` | Filtra mascotas por cliente | `cliente_id` en query | - |
