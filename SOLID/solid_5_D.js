// Dependency inversion principle

class Fetch {
    request(url) {
        //return fetch(url).then(onfulfilled: r => r.json())
        return Promise.resolve( value: 'data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()

        clientGet() {
            return this.fetch.request( url: 'vk.com')
        }
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
}

clientGet() {
    return this.localStorage.get()
}

class Database {
    constructor(client) {
        this.client = client
        //this.fetch = new Fetch()
        //this.localStorage = new LocalStorage()
    }

    getData() {
        return this.client.clientGet(key)
        //return this.fetch.request( url: 'vk.com')
        //return this.localStorage.get('ls key')
    }
}

const db = new Database(new FetchClient())  // можно прописать (new LocalStorageClient()) просто передавая другой класс в конструктор.

console.log(db.getData(key: 'rend'))