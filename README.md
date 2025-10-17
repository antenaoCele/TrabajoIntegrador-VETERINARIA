# API Veterinaria - Backend

API con Node, Express y Mongoose para gestionar **clientes** y **mascotas**.

---
# Link de vercel
trabajo-integrador-veterinaria-bf31.vercel.app

# Deployment
trabajo-integrador-veterinaria-bf31-om19p6m6v.vercel.app

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


## API Endpoints

### Clientes

#### GET `/clientes`
- **Descripción:** Lista todos los clientes.
- **Parámetros opcionales:** `?nombre=<nombre>` (para filtrar).

#### GET `/clientes/:id`
- **Descripción:** Obtiene un cliente por su ID.
- **Parámetros:** id en URL

#### POST /clientes
- **Descripción:** Crea un nuevo cliente.

#### PUT /clientes/:id
- **Descripción:** Actualiza un cliente existente.
- **Parámetros:** id en URL.


#### DELETE /clientes/:id
- **Descripción:** Elimina un cliente.
- **Parámetros:** id en URL.

### Mascotas

#### POST /mascotas
- **Descripción:** Crea una mascota asociada a un cliente.

#### GET /mascotas
- **Descripción:** Lista todas las mascotas o filtra por cliente.
- **Parámetros opcionales:** ?cliente_id=<ID_DEL_CLIENTE>


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


