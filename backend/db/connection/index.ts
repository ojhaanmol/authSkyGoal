import { Db, MongoClient } from 'mongodb';
import { CloseConnection } from './connection';
import { MONGO_CONNECTION_STRING, MONGO_DATABASE } from './constants';
import { options } from './options';

export default class Connection{
    private constructor(){}
    private static instance: Connection;
    private client?: MongoClient;
    private db?: Db;
    public closeConnection?: CloseConnection;
    static async getDatabase(){
        if( !this.instance )
            Connection.instance = new Connection();
        Connection.instance.client = await new MongoClient(MONGO_CONNECTION_STRING, options ).connect();
        Connection.instance.db = Connection.instance.client.db( MONGO_DATABASE )
        Connection.instance.closeConnection =  Connection.instance.client.close;
        return Connection.instance.db;
    }
}
