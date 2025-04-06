import app from './app';
import configurations from '../configurations';
import { APPLICATION_PORT, APPLICATION_HOST } from './constants';

(
    async function main (){
        app.listen( APPLICATION_PORT, APPLICATION_HOST, () => {
            console.table( configurations )
        });
    }
)()