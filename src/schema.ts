import { nexusPrismaPlugin } from 'nexus-prisma';
import { idArg, makeSchema, objectType, stringArg } from 'nexus';

const User = objectType({
  name: 'User',
});
