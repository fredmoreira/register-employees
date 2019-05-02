import {
  addNewEmployee, getEmployees, updateEmployee, deleteEmployee,
  getCheck
}
from '../controllers/employee-controller'

const routes = (app) => {
  app.route('/')
    .get(getCheck)

  app.route('/employees')
    .get(getEmployees)
    .post(addNewEmployee)

  app.route('/employees/:id')
    .put(updateEmployee)
    .delete(deleteEmployee)
}

export default routes;
