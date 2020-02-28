/* eslint-disable no-magic-numbers */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import mongoose from 'mongoose';
import employees from '../models/employees-model';
import schema from './validations';
import database from '../commons/db/data-base';

const Employee = mongoose.model('employees', employees);

export function addNewEmployee(req, res) {
  const employee = req.body;
  schema
    .validate(employee, {
      abortEarly: false,
    })
    .then((employee) => {
      database.connect();
      const newEmployee = new Employee(req.body);
      newEmployee.save((error, employee) => {
        if (error) {
          res.status(400).json('Mongo is down');
        }
        res.status(201).json(employee);
      });
    })
    .catch((error) => {
      res.status(400).json(error.details[0].message);
    });
}

export function getEmployees(req, res) {
  const params = req.query ? req.query : {};

  if (params.name === '' || params.address === '' || params.nif === '') {
    return res.status(400).json({
      message: 'Query String is empty!',
    });
  }
  database.connect();
  Employee.find(params, (error, employees) => {
    if (error) {
      res.json(error);
    }
    if (!employees.length) {
      return res.sendStatus(404);
    }
    res.json(employees);
  });
}

export function updateEmployee(req, res) {
  database.connect();
  Employee.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
    },
    (error, employee) => {
      if (error) {
        res.json(error);
      }
      res.sendStatus(204);
    },
  );
}

export function deleteEmployee(req, res) {
  database.connect();
  Employee.remove(
    {
      _id: req.params.id,
    },
    (error, employee) => {
      if (error) {
        res.json(error);
      }
      res.sendStatus(204);
    },
  );
}

export function getCheck(req, res) {
  res.json({
    message: 'Welcome to Employee API!',
  });
}
