'use strict';

const connection = require('./connection');
const queryString = require('querystring');


module.exports.findAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = 'SELECT * FROM desarrolladores';
  connection.query(sql, (error, rows) => {
    if (error) {
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          desarrolladores: rows
        })
      })
    }
  })
};

module.exports.findOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = 'SELECT * FROM desarrolladores WHERE id = ?';
  connection.query(sql, [event.pathParameters.desarrollador], (error, row) => {
    if (error) {
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          desarrollador: row
        })
      })
    }
  })
};

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  const body = queryString.parse(event['body']);
  const data = {
    dni: body.dni,
    nombres: body.nombres,
    apellidos: body.apellidos
  };

  const sql = 'INSERT INTO desarrolladores SET ?';
  connection.query(sql, [data], (error, result) => {
    if (error) {
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          res: `desarrollador insertado correctamente con id ${result.insertId}`
        })
      })
    }
  })
};


module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const {dni, nombres, apellidos } = JSON.parse(event['body']);
  
  const sql = 'UPDATE desarrolladores SET dni = ?, nombres = ?, apellidos = ? WHERE id = ?';
  connection.query(sql, [dni, nombres, apellidos, event.pathParameters.desarrollador], (error, result) => {
    if (error) {
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          res: `desarrollador actualizado correctamente`
        })
      })
    }
  })
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = 'DELETE from desarrolladores WHERE id = ?';
  connection.query(sql, [event.pathParameters.desarrollador], (error, result) => {
    if (error) {
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          res: `desarrollador eliminado correctamente`
        })
      })
    }
  })
};