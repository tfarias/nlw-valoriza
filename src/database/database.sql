SQLite format 3   @     !   	           	                                                 ! .K�� 	� [	����	�v                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   �	##�OtablecomplimentscomplimentsCREATE TABLE "compliments" ("id" uuid PRIMARY KEY NOT NULL, "user_sender" uuid NOT NULL, "user_receiver" uuid NOT NULL, "tag_id" uuid NOT NULL, "message" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "fk_user_sender_compliments" FOREIGN KEY ("user_sender") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL, CONSTRAINT "fk_user_receiver_compliments" FOREIGN KEY ("user_receiver") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL, CONSTRAINT "fk_tag_compliments" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE SET NULL ON UPDATE SET NULL)5
I# indexsqlite_autoindex_compliments_1compliments)= indexsqlite_autoindex_users_1users	�D�ktabletagstagsCREATE TABLE "tags" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))'; indexsqlite_autoindex_tags_1tags   �ut�3++�ta	     ��tableusersusersCREATE TABLE "users" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "admin" boolean NOT NULL DEFAULT (false), "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "password" varchar)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�"!!�tablemigrationsmigrationsCREATE TABLE "migrations" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "timestamp" bigint NOT NULL, "name" varchar NOT NULL)   b ���b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ( Iz;K.>CreateCompliments1624492420670+ Oz;�AAlterUserAddPassword1624489518657! ;z6)CreateTags1624403945731" =z0�	4CreateUsers1624317626676   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      !migrations   � N��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            �/UUUU3b30fa391-69b8-40ab-b8ec-1b872b68f9461d9ca610-1d8b-4a08-bab8-f87aa65fd50c5d7ec564-9fbb-4885-9022-6ed02ef63b1cc36789a6-440e-41d1-8a3a-30097905bf9aTanks2021-06-24 23:41:59�/UUUU365e9ebdc-eb8a-4af8-ab10-713b12a0cd5b1d9ca610-1d8b-4a08-bab8-f87aa65fd50c5d7ec564-9fbb-4885-9022-6ed02ef63b1cc36789a6-440e-41d1-8a3a-30097905bf9aTanks2021-06-24 23:41:36�/UUUU33acc7519-765e-4c23-b2bd-370fd7d8e94d6a84d61c-6401-4e13-b405-ffb814abbb895d7ec564-9fbb-4885-9022-6ed02ef63b1cc36789a6-440e-41d1-8a3a-30097905bf9aTanks2021-06-24 00:54:21
   � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        (Ub30fa391-69b8-40ab-b8ec-1b872b68f946(U65e9ebdc-eb8a-4af8-ab10-713b12a0cd5b'U	3acc7519-765e-4c23-b2bd-370fd7d8e94d   � �M�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ZU#33937b94ce-dac3-4c0d-a2ca-6041133b7e35Superação2021-06-24 23:37:042021-06-24 23:37:04[U%33c36789a6-440e-41d1-8a3a-30097905bf9aInspiração2021-06-22 23:41:152021-06-22 23:41:15TU339d8dfd96-0b7c-4f06-86c1-b1c0a43f90e6Tag 12021-06-22 23:37:492021-06-22 23:37:49
   � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        (U937b94ce-dac3-4c0d-a2ca-6041133b7e35(Uc36789a6-440e-41d1-8a3a-30097905bf9a'U	9d8dfd96-0b7c-4f06-86c1-b1c0a43f90e6   : O��:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  �U%;	33�c4591e84-fe98-47a6-aa5f-0ccfffd4868bTiago �-	U%133�266205cb-aa02-4cc2-ad2f-4937ad4ac460Tiago Fariastfariasg@gmail.com2021-06-24 00:56:052021-06-24 00:56:05$2a$10$yselFNUkhRCqOptkBgosVOaWVli4K5N5sCGPvHZdXXG5/cUO8WKKq�0	U%7	33�5d7ec564-9fbb-4885-9022-6ed02ef63b1cTiago Fariastfariasg322@gmail.com2021-06-24 00:53:362021-06-24 00:53:36$2a$10$AgYPyx2qM2UaMnW8GOAcR.D7gTcUHlITJYhAYXg75Zyw3ijZ2ADwa�/	U%5	33�6a84d61c-6401-4e13-b405-ffb814abbb89Tiago Fariastfariasg32@gmail.com2021-06-23 23:38:002021-06-23 23:38:00$2a$10$q16XpmMQ3bk3KTI0QX0zvOhcmDWeaqPmqvsMG4J0eejaQ5Te2EGcu�.	U%3	33�1d9ca610-1d8b-4a08-bab8-f87aa65fd50cTiago Fariastfariasg3@gmail.com2021-06-23 23:27:332021-06-23 23:27:33$2a$10$IxwNOUwwht2Sb7.YT7iAk.erMtZurcBCLgjLzFJjIjeVHjG8k75cu
   ] �]��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          �c4591e84-fe98-47a6-aa5f-0ccfffd4868b   �50329c8b-edf1-4bda-9fa3-a31b0a722a9a(U266205cb-aa02-4cc2-ad2f-4937ad4ac460(U5d7ec564-9fbb-4885-9022-6ed02ef63b1c(U6a84d61c-6401-4e13-b405-ffb814abbb89'U	1d9ca610-1d8b-4a08-bab8-f87aa65fd50c