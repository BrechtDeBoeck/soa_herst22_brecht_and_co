class Book{
    title:string
    authors: string[]
    language:string
    pageCount: number
    thumbnail: string

    constructor(title:string, authors:string[],language:string,pageCount:number, thumbnail:string){
        this.title = title
        this.authors = authors
        this.pageCount = pageCount
        this.thumbnail = thumbnail
    }
}