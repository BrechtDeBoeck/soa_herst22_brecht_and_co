import { BookService } from "../database/BookService";

const bookService = new BookService();
const SIMPLIFY: boolean = true;

const get = async (req: any, res: any) => {
    const title: string = req.params.title;
    if (!title) return res.json({ error: "No title given" });

    try {
        const result = await bookService.get(title);
        res.status(200).json(SIMPLIFY ? simplify(result) : result);
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const list = async (req: any, res: any) => {
    try {
        let result = await bookService.list();
        if(SIMPLIFY) result = result.map(book => simplify(book))
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
}

const simplify = (resp: any) => {
    // simplifies resp by extracting desired key,values
    let book: any = {};
    if (resp.items.length > 0) {
        book = resp.items[0];
        book = {
            title: book.volumeInfo?.title,
            authors: book.volumeInfo?.authors,
            pageCount: book.volumeInfo?.pageCount,
            language: book.volumeInfo?.language,
            thumbnail: book.volumeInfo?.imageLinks?.thumbnail,
        };
    }
    return book;
};

module.exports = {
    get, list
};
