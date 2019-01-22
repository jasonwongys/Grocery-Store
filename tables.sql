CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name TEXT,
    price NUMERIC,
    photo TEXT
);

CREATE TABLE IF NOT EXISTS cart (
	id SERIAL PRIMARY KEY,
	items_id INTEGER,
	name TEXT,
	price NUMERIC,
	quantity NUMERIC
);


CREATE TABLE IF NOT EXISTS usersInfo (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	address TEXT
);