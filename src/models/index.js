// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bubble } = initSchema(schema);

export {
  Bubble
};