/* SOLID 
S - single  responsibility principle 
O - open close principle 
L - liskov substitution principle
I - interface segregation principle 
D - dependency inversion principle
*/

// single responsibility principle
class News {
    constructor (title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

// не надо так делать 
//    toHTML() {
//        return `
//      <div class = "news" > 
//        <h1>${this.title}</h1>
//        <p>${this.text}</p>
//        </div>
//        `
//    }

 //   toJSON()  {
//        return JSON.stringify( {
//            title: this.title,
//            text: this.text,
//            modified: this.modified
//        }, null, 2)
//    }
}
class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>        
        `
    }

    json () {
        return JSON.stringify( value: {
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        },   replacer: null, space: 2)
    }

    xml() {
        return `
        <news>
            <title>${this.news.title}</title>
            <text>${this.news.text}</text>
        </news>
        `
    }
}

const printer = new NewsPrinterP(
    new News ( title: 'Antonia', text: 'Diana')
)

console.log(printer.html()) 
console.log(printer.xml())
console.log(printer.json())
// const news = new News ( title: "Antonia" , text: "Diana")

// console.log(news.toHTML())
// console.log(news.toJSON())

