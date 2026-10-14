import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

import { Users } from './src/collections/Users';
import { Organizations } from './src/collections/Organizations';
import { Clients } from './src/collections/Clients';
import { TimeEntries } from './src/collections/TimeEntries';
import { Invoices } from './src/collections/Invoices';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Organizations, Clients, TimeEntries, Invoices],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'PAGINA_INVOICING_SUPER_SECRET_KEY_1234567890',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@127.0.0.1:5432/pagina_invoicing',
    },
  }),
  cookiePrefix: 'pagina-invoicing',
});
