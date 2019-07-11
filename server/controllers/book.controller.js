const Book = require('../models/book');

const bookCtrl = {};
//Methods
bookCtrl.getBooks = async (req, res) => {
     const books = await Book.find();
     res.json(books);
};

bookCtrl.createBook = async (req, res) => {
    const book = new Book({
        name: req.body.name,
        autor: req.body.autor,
        editorial: req.body.editorial,
        date: req.body.date
    });
    await book.save();
    res.json({
        'status': 'Libro guardado'
    });
};

bookCtrl.getBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
};

bookCtrl.editBook = async (req, res) => {
    const { id } = req.params;
    const book = {
        name: req.body.name,
        autor: req.body.autor,
        editorial: req.body.editorial,
        date: req.body.date
    };
    await Book.findByIdAndUpdate(id, {$set: book}, {new: true});
    res.json({status: 'Libro actualizado'});
}

bookCtrl.deleteBook = async (req, res) => {
    await Book.findByIdAndRemove(req.params.id);
    res.json({status: 'Libro eliminado'});
}

module.exports = bookCtrl; 