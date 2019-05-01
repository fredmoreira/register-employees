import mongoose from 'mongoose'
import employeeSchema from '../models/employees-model'

const Employee = mongoose.model('EmployeeSchema', employeeSchema)

export function addNewEmployee(req, res) {

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

  if (params.name === '') {
    return res.sendStatus(400);
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

export function getEmployee(req, res) {
  Employee.findById(req.params.id, (error, employee) => {
    if (error) {
      res.json(error)
    }
    if (!employee.length) {
      return res.sendStatus(404);
    }
    res.json(employee)
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
