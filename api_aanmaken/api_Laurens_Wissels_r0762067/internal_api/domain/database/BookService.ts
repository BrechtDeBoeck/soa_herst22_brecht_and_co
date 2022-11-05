import { Pool } from "./Pool";

export class BookService {
    async get(title: string): Promise<{}> {
        const SQL = `
        SELECT *
        FROM book
        WHERE title = '${title}'
        `;
        var result: any = await Pool.getInstance().query(SQL);
        return result;
    }

    post(book: any) {
        const SQL = `INSERT INTO book(title,language,pagecount,thumbnail, authors) 
    values('${book.title}', '${book.language}', ${book.pagecount}, '${book.thumbnail}', '{${book.authors}}')`;
        Pool.getInstance().query(SQL);
    }

    del(title: string) {
        const SQL = `DELETE FROM book WHERE title = '${title}'`;
        Pool.getInstance().query(SQL);
    }

    update(book: any) {
        const SQL = `
        update book
        set language = COALESCE(${book.language ? "'"+book.language+"'" : null}, language),
        pagecount = COALESCE(${book.pagecount ? book.pagecount : null}, pagecount),
        thumbnail = COALESCE(${book.thumbnail ? "'"+book.thumbnail+"'" : null},thumbnail),
        authors = COALESCE(${book.authors ? "'{"+book.authors+"}'" : null}, authors)
        WHERE title = '${book.title}';
    `;
        Pool.getInstance().query(SQL);
    }



}
