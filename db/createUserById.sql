INSERT INTO users (id, display_name) VALUES ($1, $2) RETURNING *;