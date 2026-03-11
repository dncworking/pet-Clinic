CREATE TABLE IF NOT EXISTS petsAppointment (
    id SERIAL PRIMARY KEY,
    pet_name VARCHAR(100) NOT NULL,    
    owner_name VARCHAR(100) NOT NULL, 
    description TEXT,                  
    appointment_date DATE NOT NULL,   
    appointment_time TIME NOT NULL,    
    created_at TIMESTAMP DEFAULT NOW() 
);