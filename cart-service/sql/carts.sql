CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE carts (
    id UUID NOT null default uuid_generate_v4() primary KEY,
    user_id UUID NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    status VARCHAR(20) CHECK (status IN ('OPEN', 'ORDERED'))
);

-- Create cart_items table
CREATE TABLE cart_items (
    cart_id UUID REFERENCES carts(id),
    product_id UUID,
    count INTEGER,
    PRIMARY KEY (cart_id, product_id)
);

-- Insert test data into carts
INSERT INTO cart (id, user_id, created_at, updated_at, status)
VALUES
  (uuid_generate_v4(), uuid_generate_v4(), '2024-01-31', '2024-01-31', 'OPEN'),
  (uuid_generate_v4(), uuid_generate_v4(), '2024-01-30', '2024-01-30', 'ORDERED');

-- Insert test data into cart_items
INSERT INTO cart_items (cart_id, product_id, count)
VALUES ('fdab1676-fd39-4114-aa81-348fec7e0f33', uuid_generate_v4(), 2);

INSERT INTO cart_items (cart_id, product_id, count)
VALUES ('fdab1676-fd39-4114-aa81-348fec7e0f34', uuid_generate_v4(), 1);
