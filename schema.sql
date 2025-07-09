-- FoodieHub Schema created by Wajiha Niazi

-- Restaurant table
CREATE TABLE restaurant (
    restaurant_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address TEXT,
    phone VARCHAR(20)
);

-- Customer table
CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20)
);

-- MenuItem table
CREATE TABLE menu_item (
    menu_item_id SERIAL PRIMARY KEY,
    restaurant_id INTEGER REFERENCES restaurant(restaurant_id),
    name VARCHAR(100),
    price NUMERIC(10, 2),
    is_available BOOLEAN DEFAULT true

);

-- Food Order table
CREATE TABLE food_order (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customer(customer_id),
    restaurant_id INTEGER REFERENCES restaurant(restaurant_id),
    status VARCHAR(50) DEFAULT 'pending',
    order_date DATE DEFAULT CURRENT_DATE

);

-- Order Item table
CREATE TABLE order_item (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES food_order(order_id),
    menu_item_id INTEGER REFERENCES menu_item(menu_item_id),
    quantity INTEGER
);
