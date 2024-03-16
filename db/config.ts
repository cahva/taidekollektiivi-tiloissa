import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const Image = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    filename: column.text(),
    userId: column.number({ references: () => User.columns.id }),
    categoryId: column.number({ references: () => Category.columns.id, optional: true }),
    createdAt: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { User, Image, Category }
});
