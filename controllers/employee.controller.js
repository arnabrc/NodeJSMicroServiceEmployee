// Employee Model
const Employee = require('../models/Employee');

// Get employee
exports.employee_get = function (req, res, next) {
    console.log('req.params: ', req.params);
    Employee.findOne(req.params, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log('data: ', data);
            res.json(data);
        }
    });
};

// Create Controller
exports.employee_create = function (req, res, next) {
    /* let employee = new Employee(
        {
            name: req.body.name,
            email: req.body.email,
            designation: req.body.designation,
            phoneNumber: req.body.phoneNumber
        }
    );

    employee.save(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    }); */

    Employee.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
};

// Get All Employees
exports.employee_details = function (req, res, next) {
    Employee.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            /* let detail = [];
            data.forEach(d => {
                detail.push(d.email, d.username);
            });
            res.json(detail); */
            res.json(data);
        }
    });
};

// Get single employee
exports.employee_detail = function (req, res, next) {
    Employee.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
};

// Update employee
exports.employee_update = function (req, res, next) {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
};

// Delete employee
exports.employee_delete = function (req, res, next) {
    Employee.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
        }
    });
};