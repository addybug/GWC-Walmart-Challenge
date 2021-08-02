import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./apps/api/src/**/*.graphql'],
  path: join(process.cwd(), './apps/api/src/app/graphql.ts'),
  emitTypenameField: true,
  customScalarTypeMapping: {
    TimeTZ: 'string',
    Cursor: 'string'
  },
  defaultScalarType: 'string'
}).then(() => console.log("done!"));
