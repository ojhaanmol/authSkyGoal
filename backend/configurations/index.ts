import "dotenv/config";
import configurationSchema from "./schema";

const configurations =  configurationSchema.parse( process.env );

export default configurations;