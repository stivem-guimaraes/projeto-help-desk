CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  chat_id VARCHAR(255),
  user VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
