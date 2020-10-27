
CREATE table if not exists SIGNUP_USER_DETAILS
(
 			USR_ID 				BIGSERIAL  PRIMARY key NOT NULL--INT GENERATED ALWAYS AS IDENTITY
			,USR_NAME 			VARCHAR (100) NOT NULL
			,USR_EMAIL_ID 		VARCHAR(100) NOT NULL
			,USR_MOBILE 		varchar(15) NOT NULL
			,USR_ENCR_PWD 		VARCHAR(500) NOT null
			,unique (USR_EMAIL_ID)
			,unique (USR_MOBILE)
);

alter table SIGNUP_USER_DETAILS alter column USR_MOBILE set data type varchar(15);


CREATE TABLE if not exists member
(
			MEMBER_ID 			BIGINT ,
			F_NAME 				Varchar(50),
			L_NAME 				Varchar(50),
			DOB 				DATE,
			GENDER_ID 			INT,
			MOBILE 				int not null,
			EMAILID 			varchar(50) not null,
			ADD_1 				varchar(50),
			ADD_2 				Varchar(50),
			CITY 				Varchar(10),
			STATE 				Varchar (20),
			ZIP 				varchar(6),
			MEM_TYPE_ID 		int NOT NULL
);

ALTER TABLE "UI"."member" ADD CONSTRAINT fk_mem_id FOREIGN KEY (Member_Id) REFERENCES "UI".SIGNUP_USER_DETAILS(USR_ID);
ALTER TABLE "UI"."member" ADD CONSTRAINT fk_mem_type_id FOREIGN KEY (MEM_TYPE_ID) REFERENCES "REF".REF_MEM_TYPE(TYPE_ID);
ALTER TABLE "UI"."member" ADD CONSTRAINT fk_mem_Gender FOREIGN KEY (gender_id) REFERENCES "REF".ref_gender(gender_id);

alter table member alter column MOBILE set data type varchar(15);


DROP TABLE IF EXISTS MEMBER_KYC;
CREATE table if not exists MEMBER_KYC
(
			MEMBER_ID 			BIGint NOT NULL,
			PANCARD 			VARCHAR(10) NOT NULL,
			ADHARCARD 			VARCHAR(16) NOT NULL,
			PASSPORT 			VARCHAR(20),
			DL_NUM 				VARCHAR(20),
			KYC_STATUS_ID 		INT NOT NULL DEFAULT 0
);

ALTER TABLE "UI"."member_kyc" ADD CONSTRAINT fk_mem_id FOREIGN KEY (Member_Id) REFERENCES "UI".SIGNUP_USER_DETAILS(USR_ID);
ALTER TABLE "UI".member_kyc ADD CONSTRAINT member_kyc_fk FOREIGN KEY (kyc_status_id) REFERENCES "REF".ref_kyc_status(kyc_status_id);


DROP TABLE IF EXISTS MEMBER_ACCOUNTS;
CREATE TABLE MEMBER_ACCOUNTS
(
			MEMBER_ID 			BIGINT NOT NULL,
			BANK_NAME 			VARCHAR(100) NOT NULL,
			ACCOUNT_NUM 		VARCHAR(20) NOT NULL,
			IFSC_CODE 			VARCHAR(50) NOT NULL,
			ACCOUNT_DMAT 		VARCHAR(20)
) ;

ALTER TABLE "UI".member_accounts ADD CONSTRAINT member_accounts_fk FOREIGN KEY (member_id) REFERENCES "UI".signup_user_details(usr_id);


create table if not exists "UI".Web_Contact_us_details
(
			ID SERIAL 			not null,
			FULL_NAME 			varchar(50) not null,
			Mobile_Number 		varchar(15) not null,
			Email_Id 			varchar(50) not null,
			Cust_Type	 		varchar(15) not null,
			Cust_Req			varchar(10) not null,
			Cust_Message 		Varchar(8000)
)



create table if not exists "UI".Web_Partner_details
(
			ID 					SERIAL not null,
			FULL_NAME 			varchar(50) not null,
			Mobile_Number 		varchar(15) not null,
			Email_Id 			varchar(50) not null,
			ADD1				varchar(50) not null,
			Add2                varchar(50) not null,
			DOB					DATE,
			PART_REQ			VARCHAR(500),
			PROM_SOURCE			int
)


ALTER TABLE "UI".web_partner_details ADD CONSTRAINT fk_PROM_SOURCE FOREIGN KEY (PROM_SOURCE) REFERENCES "REF"."REF_PROM_SOURCE"(PROM_ID);


