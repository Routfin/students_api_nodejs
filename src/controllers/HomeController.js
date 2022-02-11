import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    try {
      const newStudent = await Student.create({
        name: 'John',
        lastname: 'Mack',
        email: 'johnma@gmail.com',
        yrs: 28,
        weight: 80,
        height: 1.8,
      });
      res.json(newStudent);
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));
    }
  }
}

export default new HomeController();
