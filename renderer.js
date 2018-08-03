// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const sqlite3 = require('sqlite3');

async function createTable() {
  const sql = `
  CREATE TABLE "article" (id INTEGER NOT NULL, name VARCHAR, content TEXT, checked boolean, PRIMARY KEY (id))
  `;
  const db = await new sqlite3.Database("articles.db", function(err) {
    if (err) throw err;
  });
  await db.exec(sql);
  await db.close();
  console.log("Table created.");
}

async function updateData(id, checked) {
  const sql = `
  UPDATE article SET checked = ${checked === true ? 1 : 0}
  WHERE id = ${id}
  `;
  const db = await new sqlite3.Database("articles.db", function(err) {
    if (err) throw err;
  });
  await db.exec(sql, function(err) {
    if (err) throw err;
  });
  await db.close();
}

function getData(query) {
  return new Promise((resolve, reject) => {
      const db = new sqlite3.Database("articles.db");
      db.all(query, (err, row) => {
          if (err) {
            reject(err); 
          } else {
            resolve(row);
          }
        });
  });
}

module.exports = {
    createTable: createTable,
    updateData: updateData,
    getData: getData,
  };
  

