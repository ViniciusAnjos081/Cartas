import { createClient } from '@libsql/client';

    const db = createClient({
      url: 'file:./cards.db',
    });

    export default db;
