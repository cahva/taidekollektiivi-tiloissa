import { db, User, Category, Image } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{ id: 1, name: 'Anne' },
		{ id: 2, name: 'Markku' }
	]);

	await db.insert(Category).values([
		{ id: 1, name: 'Katupappila' },
		{ id: 2, name: 'Keravan katse' },
		{ id: 3, name: 'Närhi' },
		{ id: 4, name: 'Kellosoikkeli' },
		{ id: 5, name: 'Tyykipuoti' },
		{ id: 6, name: 'Sunhius' },
		{ id: 7, name: 'Kulmis' },
		{ id: 8, name: 'Helleborgin kukka' },
		{ id: 9, name: 'Funkylady' },
		{ id: 10, name: 'Ohjaamo' },
	]);

	await db.insert(Image).values([
		{ id: 'bba691ad-a668-423f-da83-f641ab197900', filename: 'pandox_arsstamma_2022_resize-1920.jpg', userId: 2, categoryId: 1, createdAt: new Date('2024-03-16T08:30:00Z') },
	]);

	// TODO
}
