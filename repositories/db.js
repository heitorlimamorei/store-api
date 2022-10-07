//import pg from "pg";
import Sequelize from 'sequelize'
export async function connect() {
  if (global.connection) { // valida para ver se já existe uma conexão estabelecida
    return global.connection.connect(); // retorna essa conexão
  } // se não tiver uma nova será criada a baixo
  const pool = new pg.Pool({ 
    // Poll é um metodo responsavel pela administração das  conexões com o db
    connectionString:
      "postgres://ijxpahbr:LiCJ8DKlEFZRVf3ODN45RwKFvmruLGKI@kesavan.db.elephantsql.com/ijxpahbr",
  });
  global.connection = pool;
  return pool.connect();
}

const sequelize = new Sequelize(
  "postgres://ijxpahbr:LiCJ8DKlEFZRVf3ODN45RwKFvmruLGKI@kesavan.db.elephantsql.com/ijxpahbr",
  {
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }


)
export default  sequelize
