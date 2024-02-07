// First, we import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then we import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we import our project schema
import project from './project';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then we concatenate our document type to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // schema
    project, 
  ]),
});
