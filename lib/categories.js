import fs from 'fs';
import path from 'path';

const categoriesDirectory = path.join(process.cwd(), 'categories');

export function getSortedCategories() {
  const filenames = fs.readdirSync(categoriesDirectory);
  return filenames.map(filename => {
    const file = fs.readFileSync(
      path.join(process.cwd(), 'categories', filename),
      'utf8',
    );

    const data = JSON.parse(file);
    const slug = filename.replace(/\.json/, '');

    return {
      ...data,
      slug,
      permalink: `/categories/${slug}`,
    };
  });
}

export function getCategoryBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), 'categories', `${slug}.json`),
    'utf8',
  );

  const data = JSON.parse(file);

  return {
    ...data,
    permalink: `/categories/${slug}`,
    slug,
  };
}
