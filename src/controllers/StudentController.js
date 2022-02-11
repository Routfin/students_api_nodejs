import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: ['Missing ID'],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: ['Missing ID'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      await student.destroy();
      return res.json({
        removed: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: ['Missing ID'],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      const studentUpdated = await student.update(req.body);
      return res.json(studentUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: ['Missing ID'],
      });
    }
  }
}

export default new StudentController();
