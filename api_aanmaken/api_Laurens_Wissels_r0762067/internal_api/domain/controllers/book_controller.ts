import { BookService } from "../database/BookService";

const bookService = new BookService();

const get = async (req: any, res: any) => {
    const title: string = req.params.title;
    if (!title) return res.json({ error: "No title given" });

    try {
        const result = await bookService.get(title);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const post = async (req: any, res: any) => {
    const book = req.body
    try {
        validate(book)
        await bookService.post(book);
        res.status(200).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const update = async (req: any, res: any) => {
    const book = req.body
    const title: string = book.title;
    if (!title) return res.json({ error: "No title given" });
    try {
        await bookService.update(book);
        res.status(200).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const del = async (req: any, res: any) => {
    const title: string = req.params.title;
    if (!title) return res.json({ error: "No title given" });

    try {
        const result = await bookService.del(title);
        res.status(200).send();
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const validate = (book:any) => {
    if(book.title == undefined) throw Error("No title given") 
    if(book.authors == undefined) throw Error("No authros given") 
    if(book.pagecount == undefined) throw Error("No page count given") 
    if(book.language == undefined) throw Error("No language given") 
    if(book.thumbnail == undefined) throw Error("No thumbnail given") 
}

module.exports = {
    get,post,del,update
};
