const axios = require("axios");

export class BookService {
    get(title: string): Promise<{}> {
        const response = axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`)
            .then((response:any) => {
                return response.data
            })
            .catch((error:any) => {
                console.log(error);
                throw new Error("Google book api error")
            });
        return response  
    }

    list(){
        const titles: string[] = [
            "Atomic Habits",
            "How can you trade lik a pro",
            "Harry Potter and the Order of the Phoenix"
        ]
        return Promise.all(titles.map(async title => await this.get(title)))
    }

}

