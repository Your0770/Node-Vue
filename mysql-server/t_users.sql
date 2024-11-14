CREATE TABLE `t_users`(
	`user_no` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` VARCHAR(100) NOT NULL,
    `user_pwd` VARCHAR(100) NOT NULL,
    `user_name` VARCHAR(100) NOT NULL,
    `user_gender` CHAR(1) CHECK( user_gender IN ( 'M', 'F')),
    `user_age` INT,
    
    `join_date` DATE
);

-- 프로젝트 생성부터 db접근 후 조회 및 등록 수정 삭제 페이지 구성
-- 