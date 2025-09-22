# Horarios-de-aula

API desenvolvida em **Node.js** com **Express** e **Sequelize (MYSQL)** para gerenciar horários de aulas de uma escola.  

Permite consultar:

- Horas comprometidas por cada professor.  
- Salas disponíveis e ocupadas por horários.  
- Professores.
- Salas.    

---

## 🛠 Tecnologias

- Node.js  
- Express  
- Sequelize (MYSQL)  
- Swagger (documentação da API)  
- Dotenv 

---

## 📦 Estrutura do Banco

Principais tabelas:

- **Department** – Departamentos  
- **Title** – Titulações de professores  
- **Professor** – Professores  
- **Building** – Prédios da escola  
- **Room** – Salas  
- **Subject** – Disciplinas  
- **SubjectPrerequisite** – Pré-requisitos 
- **Class** – Turmas  
- **ClassSchedule** – Horários das turmas  
