const express = require("express");
const router = express.Router();
const controllersSchool = require("../controllers/school");

/**
 * @swagger
 * /Rooms:
 *   get:
 *     summary: Retorna todas as salas
 *     responses:
 *       200:
 *         description: Lista de salas
 */
router.get("/Rooms", controllersSchool.getRooms);

/**
 * @swagger
 * /Teachers:
 *   get:
 *     summary: Retorna todos os professores
 *     responses:
 *       200:
 *         description: Lista de professores
 */
router.get("/Teachers", controllersSchool.getTeachers);

/**
 * @swagger
 * /Teachershours:
 *   get:
 *     summary: Horas comprometidas por professor
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Nome do professor para filtrar (busca parcial) **Não obrigatório**
 *     responses:
 *       200:
 *         description: Retorna a quantidade de horas que cada professor tem comprometido em aulas. **Se o parâmetro name for fornecido, filtra pelo nome do   professor (busca parcial)** 
 */
router.get("/Teachershours", controllersSchool.getTeachersHours);


/**
 * @swagger
 * /Roomsfull:
 *   get:
 *     summary: Salas ocupadas em um determinado dia e horário
 *     responses:
 *       200:
 *         description: Lista de salas ocupadas em um determinado dia e horário 
 */
router.get("/Roomsfull", controllersSchool.getRoomsFull);

module.exports = router;
