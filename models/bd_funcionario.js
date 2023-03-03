const bd = require("../conexao");

/*inclusão do funcionario*/
const insert_funcionario = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql =
      "INSERT INTO funcionario(matricula,usuario,telefone_celular,telefone_residencial,senha) VALUES (?,?,?,?,?)";
    const values = [
      funcionario.matricula,
      funcionario.usuario,
      funcionario.celular,
      funcionario.residencial,
      funcionario.senha,
    ];
    await conn.execute(sql, values);
    console.log("cadastramento do funcionario realizado com sucesso");
  } catch (error) {
    console.log("deu erro, por alguma causa", error);
    return "Error no sistema tente novamente mais tarde";
  }
};

/*seleção de todos os funcionarios*/
const select_funcionarioAll = async () => {
  try {
    const conn = await bd.con();
    const sql = "SELECT * FROM funcionario;";
    const [funcionario] = await conn.execute(sql);
    if (funcionario == "") {
      return "vazio";
    } else {
      console.log("selcionamento do funcionario realizado com sucesso");
      return funcionario;
    }
  } catch (error) {
    console.log("deu error, por alguma causa", error);
    return "Error";
  }
};

/*seleção da matricula do funcionario*/
const select_funcionario = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql = "SELECT matricula FROM funcionario WHERE matricula = ?;";
    const value = [funcionario];
    const [matricula] = await conn.execute(sql, value);
    if (matricula == "") {
      return false;
    } else {
      console.log(
        "selecionamento da matricula do funcionario realizado com sucesso"
      );
      return "Matrícula do funcionário já cadastrada no sistema";
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "Error no sistema tente novamente mais tarde";
  }
};

/*seleção da senha do funcionario*/
const select_senha = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql = "SELECT senha FROM funcionario WHERE senha = ?;";
    const value = [funcionario];
    const [senha] = await conn.execute(sql, value);
    if (senha == "") {
      return false;
    } else {
      console.log(
        "selecionamento da senha do funcionario realizado com sucesso"
      );
      return "Senha do funcionário já cadastrada no sistema";
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "Error no sistema tente novamente mais tarde";
  }
};

/*seleção do telefone celular*/
const select_celular = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql =
      "SELECT telefone_celular FROM funcionario WHERE telefone_celular = ?;";
    const value = [funcionario];
    const [celular] = await conn.execute(sql, value);
    if (celular == "") {
      return false;
    } else {
      console.log(
        "selecionamento do telefone celular do funcionario realizado com sucesso"
      );
      return "Telefone celular do funcionário já cadastrado no sistema";
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "Error no sistema tente novamente mais tarde";
  }
};

/*seleção do telefone residencial*/
const select_residencial = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql =
      "SELECT telefone_residencial FROM funcionario WHERE telefone_residencial = ?;";
    const value = [funcionario];
    const [residencial] = await conn.execute(sql, value);
    if (residencial == "" || residencial[0].telefone_residencial == "") {
      return false;
    } else {
      console.log(
        "selecionamento do telefone residencial do funcionario realizado com sucesso"
      );
      return "Telefone residencial do funcionário já cadastrado no sistema";
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "Error no sistema tente novamente mais tarde";
  }
};

/*seleção de um funcionario*/
const select_funcionario1 = async (matricula) => {
  try {
    const conn = await bd.con();
    const sql = "SELECT * FROM funcionario WHERE matricula = ?;";
    const value = [matricula];
    const [funcionario] = await conn.execute(sql, value);
    if (funcionario == "") {
      return "vazio";
    } else {
      console.log("selecionamento do funcionario realizado com sucesso");
      return funcionario;
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "error";
  }
};

const select_admin = async (matricula) => {
  try {
    const conn = await bd.con();
    const sql =
      "SELECT usuario FROM funcionario WHERE matricula = ? AND eAdmin = 1;";
    const value = [matricula];
    const [admin] = await conn.execute(sql, value);
    if (admin == "") {
      return "vazio";
    } else {
      console.log("selecionamento do admin realizado com sucesso");
      return admin;
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "error";
  }
};

/*alteração do funcionario*/
const update_funcionario = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql =
      "UPDATE funcionario SET matricula = ?, usuario = ?, telefone_celular = ?, telefone_residencial = ?, senha = ? WHERE matricula = ?;";
    const values = [
      funcionario.matricula,
      funcionario.usuario,
      funcionario.celular,
      funcionario.residencial,
      funcionario.senha,
      funcionario.matricula1,
    ];
    await conn.execute(sql, values);
    console.log("alteração do funcionario feita com sucesso");
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "error";
  }
};

/*alteração de senha do funcionario*/
const update_funcionario_senha = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql = "UPDATE funcionario SET senha = ? WHERE matricula = ?;";
    const values = [funcionario.senha, funcionario.matricula];
    update = await conn.execute(sql, values);
    if (update[0].changedRows == 0) {
      return "falha";
    } else {
      console.log("alteração do funcionario feita com sucesso");
      return "sucesso";
    }
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "error";
  }
};

/*alteração de senha do funcionario*/
const update_relatorio = async (funcionario) => {
  try {
    const conn = await bd.con();
    const sql = "UPDATE funcionario SET relatorio = ? WHERE matricula = ?;";
    const values = [funcionario.relatorio, funcionario.matricula];
    await conn.execute(sql, values);
    console.log("alteração do relatorio do funcionario feita com sucesso");
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "error";
  }
};

/*exclusão do funcionario*/
const delete_funcionario = async (matricula) => {
  try {
    const conn = await bd.con();
    const sql = "DELETE FROM funcionario WHERE matricula = ?;";
    await conn.execute(sql, [matricula]);
    console.log("exclução do funcionario feita com sucesso");
  } catch (error) {
    console.log("deu error por alguma causa", error);
    return "error";
  }
};

module.exports = {
  insert_funcionario,
  select_funcionarioAll,
  select_funcionario,
  select_senha,
  select_celular,
  select_residencial,
  select_funcionario1,
  select_admin,
  update_funcionario,
  update_funcionario_senha,
  update_relatorio,
  delete_funcionario,
};
