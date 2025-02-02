import express from 'express';
import { home, scanner } from './scanner/view.js'

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
app.get('/', home);
app.use('/', scanner);

export function start() {
    app.listen(80, () => {
        console.log('hi!')
    })
}