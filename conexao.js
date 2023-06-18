const con = () => {
  if (global.con && global.con.state !== "disconnected") return global.con;

  try {
    const mysql = require("mysql2/promise");
    const con = mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      waitForConnections: true,
      connectionLimit: 30,
      queueLimit: 0,
    });
    global.con = con;
    return con;
  } catch (error) {
    console.log("algo deu erro na conexão com banco de dados:", error);
  }
};
module.exports = { con };
