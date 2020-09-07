const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const employeeRoute = express.Router();
const accessToken = require('../constants/constant');
const accessTokenSecret = accessToken.accessTokenSecret;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

// Employee controllers
const employee_controller = require('../controllers/employee.controller');

//Get Employee
employeeRoute.get('/get/:username', employee_controller.employee_get);

//Create Employee API
employeeRoute.post('/create', employee_controller.employee_create);

//Get All Employees API
employeeRoute.get('/', employee_controller.employee_details);

//Get Single Employee API
employeeRoute.get('/read/:id', authenticateJWT, employee_controller.employee_detail);

//Update Employee API
employeeRoute.put('/update/:id', authenticateJWT, employee_controller.employee_update);

//Delete Employee API
employeeRoute.delete('/delete/:id', authenticateJWT, employee_controller.employee_delete);

module.exports = employeeRoute;
