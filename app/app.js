import express from 'express';
import { routes } from './scanner/routes.js'

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public', {
    extensions: ['html', 'css', 'js'],
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.type('application/javascript');
        }
    }
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routes);

export function start() {
    app.listen(80, () => {
        console.log('hi!')
    })
}