const { Subject, Class, ClassSchedule, Professor, Room } = require("../models");
const Sequelize = require("sequelize");


exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    return res.status(200).json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar salas" });
  }
};
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Professor.findAll();
    return res.status(200).json(teachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar professores" });
  }
};

exports.getTeachersHours = async (req, res) => {
  try {
    const nameTeacher = req.query.name || "";
    if (nameTeacher) {
      const results = await ClassSchedule.findOne({
        attributes: [
          [Sequelize.col("Class.Subject.Professor.name"), "professor_name"],
          // calcula minutos -> divide por 60 para horas
          [
            Sequelize.fn(
              "SUM",
              Sequelize.literal(
                "TIMESTAMPDIFF(MINUTE, start_time, end_time)/60"
              )
            ),
            "total_hours",
          ],
        ],
        include: [
          {
            model: require("../models").Class,
            attributes: [],
            include: [
              {
                model: require("../models").Subject,
                attributes: [],
                include: [
                  {
                    model: require("../models").Professor,
                    attributes: [],
                    where: {
                      name: {
                        [Sequelize.Op.like]: `%${nameTeacher}%`,
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
        group: ["Class.Subject.Professor.id", "Class.Subject.Professor.name"],
        raw: true,
      });
      return res.status(200).json(results);
    }
    const results = await ClassSchedule.findAll({
      attributes: [
        [Sequelize.col("Class.Subject.Professor.name"), "professor_name"],
        // calcula minutos -> divide por 60 para horas
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal("TIMESTAMPDIFF(MINUTE, start_time, end_time)/60")
          ),
          "total_hours",
        ],
      ],
      include: [
        {
          model: require("../models").Class,
          attributes: [],
          include: [
            {
              model: require("../models").Subject,
              attributes: [],
              include: [
                { model: require("../models").Professor, attributes: [] },
              ],
            },
          ],
        },
      ],
      group: ["Class.Subject.Professor.id", "Class.Subject.Professor.name"],
      raw: true,
    });
    return res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar horas dos professores" });
  }
};

exports.getRoomsFull = async (req, res) => {
  try {
    const rooms = await Room.findAll({
      attributes: ["name"],
      include: [
        {
          model: ClassSchedule,
          attributes: ["day_of_week", "start_time", "end_time"],
        },
      ],
      order: [
        ["name", "ASC"],
        [ClassSchedule, "day_of_week", "ASC"],
        [ClassSchedule, "start_time", "ASC"],
      ],
    });
    return res.status(200).json(rooms);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar horários das salas" });
  }
};
