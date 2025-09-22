const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const schoolRoutes = require('./src/routes/school');
require('./src/config/db'); // Conexão com o banco de dados

const app = express();
app.use(express.json());

// Configurações do swagger-jsdoc
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Horarios de Aula API',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:8081',
      },
    ],
  },
  apis: ['./src/routes/school.js'], // Onde ficam os comentários das rotas
};

// Gera a especificação
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rota para acessar a doc do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', schoolRoutes );

app.listen(8081, () => console.log('Servidor rodando em http://localhost:8081/api-docs'));
