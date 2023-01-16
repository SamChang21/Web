class book{
    constructor(title, author, date, summary){
        this.title = title
        this.author = author
        this.date = date
        this.summary = summary
    }
}

class FictionBook extends book {
    constructor (title, author, date, summary, theme ){
    super (title, author, date, summary)
    this. theme= theme
    }
}
class TextBook extends book  {
    constructor (title, author, date, summary, topic ){
    super (title, author, date, summary)
    this. topic= topic
    }
}
class ComicBook  extends book {
    constructor (title, author, date, summary, hero ){
    super (title, author, date, summary)
    this. hero= hero
    }
}
class PictureBook  extends book {
    constructor (title, author, date, summary, picture ){
    super (title, author, date, summary)
    this. picture= picture
    }
}
const book1 = new book("Speak", "Halse", 1999, "it is a story about sexual harassment")
const book2 = new book("Ghosted", "Rosie", 2019, "it is a romantic mystery novel")
const book3 = new book("You", "Caroline", 2014, "it is about joe who do everything for the woman he love")
const book4 = new FictionBook("To kill a marking bird", "Harper Lee", 1960,"it is about the childhood of a little girl", "racism" )
const book5 = new TextBook("The American Yawp", "Ben Wright, Ray Garton", 2019, "it is about American history", "history")
const book6 = new ComicBook("marvel comics", "Martin Goodman", 1939, "it is the comic about hero", "Iron man")
const book7 = new PictureBook("The Very Hungry Caterpillar", "Eric Carle", 1969, "it is a book about a Caterpillar", "picture of Caterpillar")

const booklist=[book1, book2, book3, book4, book5, book6, book7]
booklist.forEach(book => {

    let bookDetails = `<div><h1>${book.title}</h1><h2>${book.author}</h2><h3>${book.date}</h3><p>${book.summary}</p>`

    if (book.theme) {
        bookDetails += `<p>${book.theme}</p></div>`
    } else if (book.topic) {
        bookDetails +=`<p>${book.topic}</p></div>`
    } else if (book.hero) {
        bookDetails +=`<p>${book.hero}</p></div>`
    } else if(book.picture) {
        bookDetails +=`<p>${book.picture}</p></div>`
    } else {
        bookDetails += `</div>`
    }

    document.querySelector('#books').innerHTML += bookDetails
}   
);
