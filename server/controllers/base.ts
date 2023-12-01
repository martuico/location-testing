type Options = {
  [key: string]: any
}


class Base {
  db: any

  constructor(db: any) {
    this.db = db
  }

  get(options: Options) {
    return this.db.findOne(options).catch((e: any) => {
      console.log("error", e)
    })
  }
  
  create(item: any) {
    return this.db.create(item).catch((e: any) => {
      console.log("error", e)     
    }) 
  }
}
export default Base
