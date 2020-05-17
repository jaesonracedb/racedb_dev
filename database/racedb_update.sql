ALTER TABLE user_account add rToken varchar(250);
ALTER TABLE likes add rating int(1);
ALTER TABLE likes ADD UNIQUE `unique_index`(`event_id`, `username`);