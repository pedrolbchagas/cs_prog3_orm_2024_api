import {createConnection} from 'typeorm';
createConnection().then(() => console.log('Connectou no Banco dedados!!'));