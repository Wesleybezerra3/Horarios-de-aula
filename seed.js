// seed.js
const models = require('./src/models');
const sequelize = require('./src/config/db');

(async () => {
  try {
    // Recria as tabelas
    await sequelize.sync({ force: true });

    // Departments
    await models.Department.bulkCreate([
      { id: 1, name: 'Engenharia de Software' },
      { id: 2, name: 'Ciência da Computação' },
    ]);

    // Titles
    await models.Title.bulkCreate([
      { id: 1, name: 'Professor Titular' },
      { id: 2, name: 'Professor Adjunto' },
    ]);

    // Professors
    await models.Professor.bulkCreate([
      { id: 101, name: 'Professor Girafales', department_id: 1, title_id: 1 },
      { id: 102, name: 'Professora Florinda', department_id: 1, title_id: 2 },
      { id: 103, name: 'Professor Jiraya', department_id: 2, title_id: 1 },
    ]);

    // Buildings
    await models.Building.bulkCreate([
      { id: 1, name: 'Bloco A' },
      { id: 2, name: 'Bloco B' },
    ]);
    console.log('Prerequisitos inseridos com sucesso.');

    // Rooms
    await models.Room.bulkCreate([
      { id: 201, name: 'Sala 101', building_id: 1 },
      { id: 202, name: 'Sala 102', building_id: 1 },
      { id: 203, name: 'Sala 201', building_id: 2 },
    ]);
    console.log('Prerequisitos inseridos com sucesso.');

    // Subjects
    await models.Subject.bulkCreate([
      { id: 301, subject_id: 'CS101', code: 'COMP101', name: 'Introdução a Programação', taught_by: 101 },
      { id: 302, subject_id: 'CS202', code: 'COMP202', name: 'Banco de Dados', taught_by: 102 },
      { id: 303, subject_id: 'CS303', code: 'ENG303', name: 'Análise de Algoritmos', taught_by: 103 },
      { id: 304, subject_id: 'CS404', code: 'ENG404', name: 'Sistemas Distribuídos', taught_by: 101 },
    ]);
    console.log('Prerequisitos inseridos com sucesso.');

    // Subject Prerequisites
    await models.SubjectPrerequisite.bulkCreate([
      { id: 401, subject_id: 302, prerequisiteid: 301 },
      { id: 402, subject_id: 304, prerequisiteid: 303 },
    ]);
    console.log('Prerequisitos inseridos com sucesso.');

    // Classes
    await models.Class.bulkCreate([
      { id: 501, subject_id: 301, year: 2025, semester: '2025.1', code: 'A' },
      { id: 502, subject_id: 302, year: 2025, semester: '2025.1', code: 'B' },
      { id: 503, subject_id: 303, year: 2025, semester: '2025.1', code: 'A' },
      { id: 504, subject_id: 304, year: 2025, semester: '2025.1', code: 'A' },
    ]);
    console.log('Prerequisitos inseridos com sucesso.');

    // Class Schedules
    await models.ClassSchedule.bulkCreate([
      { id: 601, class_id: 501, room_id: 201, day_of_week: 'Segunda', start_time: '08:00:00', end_time: '10:00:00' },
      { id: 602, class_id: 501, room_id: 201, day_of_week: 'Quarta', start_time: '08:00:00', end_time: '10:00:00' },
      { id: 603, class_id: 504, room_id: 203, day_of_week: 'Terça', start_time: '14:00:00', end_time: '16:00:00' },
      { id: 604, class_id: 502, room_id: 202, day_of_week: 'Terça', start_time: '10:00:00', end_time: '12:00:00' },
      { id: 605, class_id: 502, room_id: 202, day_of_week: 'Quinta', start_time: '10:00:00', end_time: '12:00:00' },
      { id: 606, class_id: 503, room_id: 201, day_of_week: 'Sexta', start_time: '08:00:00', end_time: '11:00:00' },
    ]);
    console.log('Prerequisitos inseridos com sucesso.');


    console.log('Banco populado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao popular o banco:', error);
    process.exit(1);
  }
})();
