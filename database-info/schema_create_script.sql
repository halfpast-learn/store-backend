-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE public.item_item_id_seq;

CREATE SEQUENCE public.item_item_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.order_item_id_seq;

CREATE SEQUENCE public.order_item_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.order_item_item_item_id_seq;

CREATE SEQUENCE public.order_item_item_item_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.order_item_order_order_id_seq;

CREATE SEQUENCE public.order_item_order_order_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.order_order_id_seq;

CREATE SEQUENCE public.order_order_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.role_role_id_seq;

CREATE SEQUENCE public.role_role_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.role_tag_id_seq;

CREATE SEQUENCE public.role_tag_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.role_tag_role_role_id_seq;

CREATE SEQUENCE public.role_tag_role_role_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.role_tag_tag_tag_id_seq;

CREATE SEQUENCE public.role_tag_tag_tag_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tag_item_id_seq;

CREATE SEQUENCE public.tag_item_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tag_item_item_item_id_seq;

CREATE SEQUENCE public.tag_item_item_item_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tag_item_tag_tag_id_seq;

CREATE SEQUENCE public.tag_item_tag_tag_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tag_tag_id_seq;

CREATE SEQUENCE public.tag_tag_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.user_tag_tag_tag_id_seq;

CREATE SEQUENCE public.user_tag_tag_tag_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.user_tag_user_user_id_seq;

CREATE SEQUENCE public.user_tag_user_user_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.user_user_id_seq;

CREATE SEQUENCE public.user_user_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- public.item definition

-- Drop table

-- DROP TABLE public.item;

CREATE TABLE public.item (
	item_id serial4 NOT NULL,
	description text NULL,
	price numeric NULL,
	CONSTRAINT item_pkey PRIMARY KEY (item_id)
);


-- public."role" definition

-- Drop table

-- DROP TABLE public."role";

CREATE TABLE public."role" (
	role_id serial4 NOT NULL,
	"name" text NULL,
	CONSTRAINT role_pkey PRIMARY KEY (role_id)
);


-- public.tag definition

-- Drop table

-- DROP TABLE public.tag;

CREATE TABLE public.tag (
	tag_id serial4 NOT NULL,
	"name" text NULL,
	CONSTRAINT tag_pkey PRIMARY KEY (tag_id)
);


-- public.role_tag definition

-- Drop table

-- DROP TABLE public.role_tag;

CREATE TABLE public.role_tag (
	role_role_id serial4 NOT NULL,
	tag_tag_id serial4 NOT NULL,
	id serial4 NOT NULL,
	CONSTRAINT role_tag_pkey PRIMARY KEY (id),
	CONSTRAINT role_tag_role_role_id_fkey FOREIGN KEY (role_role_id) REFERENCES public."role"(role_id),
	CONSTRAINT role_tag_tag_tag_id_fkey FOREIGN KEY (tag_tag_id) REFERENCES public.tag(tag_id)
);


-- public.tag_item definition

-- Drop table

-- DROP TABLE public.tag_item;

CREATE TABLE public.tag_item (
	tag_tag_id serial4 NOT NULL,
	item_item_id serial4 NOT NULL,
	id serial4 NOT NULL,
	CONSTRAINT tag_item_pkey PRIMARY KEY (id),
	CONSTRAINT tag_item_item_item_id_fkey FOREIGN KEY (item_item_id) REFERENCES public.item(item_id),
	CONSTRAINT tag_item_tag_tag_id_fkey FOREIGN KEY (tag_tag_id) REFERENCES public.tag(tag_id)
);


-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	user_id serial4 NOT NULL,
	username varchar(30) NULL,
	"password" varchar NULL,
	"role" int4 NULL,
	CONSTRAINT user_pkey PRIMARY KEY (user_id),
	CONSTRAINT user_fk FOREIGN KEY ("role") REFERENCES public."role"(role_id)
);


-- public.user_tag definition

-- Drop table

-- DROP TABLE public.user_tag;

CREATE TABLE public.user_tag (
	user_user_id serial4 NOT NULL,
	tag_tag_id serial4 NOT NULL,
	CONSTRAINT user_tag_tag_tag_id_fkey FOREIGN KEY (tag_tag_id) REFERENCES public.tag(tag_id),
	CONSTRAINT user_tag_user_user_id_fkey FOREIGN KEY (user_user_id) REFERENCES public."user"(user_id)
);


-- public."order" definition

-- Drop table

-- DROP TABLE public."order";

CREATE TABLE public."order" (
	order_id serial4 NOT NULL,
	status text NULL,
	user_owner int4 NULL,
	address text NULL,
	contact_information text NULL,
	CONSTRAINT order_pkey PRIMARY KEY (order_id),
	CONSTRAINT order_fk FOREIGN KEY (user_owner) REFERENCES public."user"(user_id)
);


-- public.order_item definition

-- Drop table

-- DROP TABLE public.order_item;

CREATE TABLE public.order_item (
	order_order_id serial4 NOT NULL,
	item_item_id serial4 NOT NULL,
	id serial4 NOT NULL,
	CONSTRAINT order_item_pkey PRIMARY KEY (id),
	CONSTRAINT order_item_item_item_id_fkey FOREIGN KEY (item_item_id) REFERENCES public.item(item_id),
	CONSTRAINT order_item_order_order_id_fkey FOREIGN KEY (order_order_id) REFERENCES public."order"(order_id)
);
