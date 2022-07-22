import { db } from './db'
import app from './app'

const port = 8000



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
    //console.log(db.data)
})