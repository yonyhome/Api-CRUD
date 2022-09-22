import { connection } from "./database"
const app = require('./app')

async function main(){
    await connection.initialize()
    console.log("Database connected")
    app.listen(app.get('port'))
    console.log('Server on port ', app.get('port'))
}

main()