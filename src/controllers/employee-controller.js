import mongoose from 'mongoose'
import employees from '../models/employees-model'

const Employee = mongoose.model('employees', employees)

export function addNewEmployee(req, res) {

  let payload = req.body;
  console.log(payload);
  let newEmployee = new Employee(req.body)
  newEmployee.save((error, employee) => {
    if (error) {
      res.status(400).json(error)
    }
    res.json(employee)
  })
}

export function getEmployees(req, res) {
  let params = (req.query ? req.query : {});

  if (params.name === '' || params.address === '') {
    return res.status(400).json({
      message: 'Query String is empty!'
    });
  }

  Employee.find(params, (error, employees) => {
    if (error) {
      res.json(error)
    }
    if (!employees.length) {
      return res.sendStatus(404);
    }
    res.json(employees)
  })
}

export function updateEmployee(req, res) {
  Employee.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (error, employee) => {
    if (error) {
      res.json(error)
    }
    res.json(employee)
  })
}

export function deleteEmployee(req, res) {
  Employee.remove({
    _id: req.params.id
  }, (error, employee) => {
    if (error) {
      res.json(error)
    }
    res.json(employee)
  })
}

export function getCheck(req, res) {
  res.json({
    message: 'Welcome to Employee API!'
  });
}
