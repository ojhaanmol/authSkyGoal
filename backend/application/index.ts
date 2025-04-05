import app from './app';
import { APPLICATION_PORT, APPLICATION_HOST } from './constants';

(
    async function main (){
        app.listen( APPLICATION_PORT, APPLICATION_HOST, () => {
            console.log(`Server is running on http://${APPLICATION_HOST}:${APPLICATION_PORT}`);
        });
    }
)()