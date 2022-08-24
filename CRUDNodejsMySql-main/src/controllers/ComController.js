function index(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM comportamiento', (err, comportamiento) => {
        if(err) {
          res.json(err);
        }
        res.render('comportamiento/index', { comportamiento });
      });
    });
  }
  
  function create(req, res) {
  
    res.render('comportamiento/create');
  }
  
  function store(req, res) {
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('INSERT INTO comportamiento SET ?', [data], (err, rows) => {
        res.redirect('/comportamiento');
      });
    });
  }
  
  function destroy(req, res) {
    const id = req.body.id;
  
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM comportamiento WHERE id = ?', [id], (err, rows) => {
        res.redirect('/comportamiento');
      });
    })
  }
  
  function edit(req, res) {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM comportamiento WHERE id = ?', [id], (err, comportamiento) => {
        if(err) {
          res.json(err);
        }
        res.render('comportamiento/edit', { comportamiento });
      });
    });
  }
  
  function update(req, res) {
    const id = req.params.id;
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('UPDATE comportamiento SET ? WHERE id = ?', [data, id], (err, rows) => {
        res.redirect('/comportamiento');
      });
    });
  }
  
  
  module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
  }