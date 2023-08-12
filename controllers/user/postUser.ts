import { Request, Response } from "express";
const pool = require("../../mysql/database");

export const postUser = async (req: Request, res: Response) => {
  try {
    const { name, username, password } = req.body;
    const query = await pool.query(
      `INSERT INTO users (name,username,password) 
       VALUES (
        '${name}',
        '${username}',
        '${password}'
      );
      `
    );
    if (query.serverStatus === 2) {
      res.status(200).json({
        msg: "Usuario creado correctamente",
      });
    } else {
      res.status(500).json({
        msg: "Error al crear un user, comuníquese con soporte.",
      });
    }
  } catch (error) {

    res.status(500).json({
      msg: error,
    });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const {username, password } = req.body;
    const query = await pool.query(
      `SELECT id FROM users WHERE username = '${username}' AND password = '${password}';`
    );
    if (query.length >0) {
      res.status(200).json({
        msg: "Usuario existe",
      });
    } else {
      res.status(400).json({
        msg: "Usuario no existe",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
