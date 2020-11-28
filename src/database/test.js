const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");
Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-8.1268417",
    lng: "-34.9307666",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de PE a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social",
    whatsapp: "4456118756",
    images: [
      "https://images.unsplash.com/photo-1597639460500-fa229f5275b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions:
      "Venha se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de Visitas das 18h ate 8h",
    open_on_weekends: "0",
  });

  /*
  //deletar dado da tabela
  console.log(await db.run('DELETE FROM orphanages WHERE id =3'))
*/
  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orphanage pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);
});
