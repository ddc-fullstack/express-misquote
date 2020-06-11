import express, { Application} from 'express'
import morgan from 'morgan'
import csrf from "csurf"
const cookieParser = require('cookie-parser')

// Routes
import { indexRoutes } from './routes/index.route'
import { MisquoteRoute } from './routes/misquote.route'

// The following class creates the app and instantiates the server
export class App {
    app: Application;
    
    constructor (
        private port?: number | string
    ) {
      this.app = express();
      this.settings();
      this.middlewares();
      this.routes();
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () {
      this.app.set('port', this.port || process.env.PORT || 3000)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () {
      
      this.app.use(morgan('dev'))
      this.app.use(express.json())
     // this.app.use(cookieParser())
      //this.app.use(csrf({cookie: {key:"XSRF-TOKEN", maxAge:3600}}))
      // this.app.use(function (err : any, req: any, res: any, next: any) {
      //
      //   if (err.code !== 'EBADCSRFTOKEN') return next(err)
      //
      //   // handle CSRF token errors here
      //   res.status(403)
      //   res.send('you done fucked up aaaron')
      // })
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
      //TODO add "/apis"
      this.app.use(indexRoutes)
      this.app.use('/apis/misquote', MisquoteRoute)
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
      await this.app.listen(this.app.get('port'))
      console.log('Express application built successfully')
    }
}
