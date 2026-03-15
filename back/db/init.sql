CREATE TABLE IF NOT EXISTS pets_appointments (
    id SERIAL PRIMARY KEY,
    pet_name VARCHAR(100) NOT NULL,    
    owner_name VARCHAR(100) NOT NULL, 
    description TEXT,                  
    appointment_date DATE NOT NULL,   
    appointment_time TIME NOT NULL,    
    created_at TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    password TEXT NOT NULL,          
    role VARCHAR(20) DEFAULT 'patient',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)