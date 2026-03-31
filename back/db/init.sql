
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    password TEXT NOT NULL,          
    role VARCHAR(20) DEFAULT 'patient',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS pets_appointments (
    id SERIAL PRIMARY KEY,
    pet_name VARCHAR(255) NOT NULL,
    pet_owner VARCHAR(255) NOT NULL,
    apt_date DATE NOT NULL,
    apt_time TIME NOT NULL,
    apt_notes TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)