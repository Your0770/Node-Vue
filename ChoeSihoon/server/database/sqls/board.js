const boardList = 
`select no,
       title,
       writer,
       content,
       created_date,
       updated_date
from t_board_board
order by no
`;

const boardInfo = 
`select no,
       title,
       writer,
       content,
       created_date,
       updated_date
from t_board_board
where no = ?
`;

const boardInsert = 
`insert into t_board_board
set ?
`;

const boardUpdate =
`update t_board_board
set ?
where no = ?
`;

const boardDelete = 
`delete from t_board_board
where no =?
`;

module.exports = {
  boardList,
  boardInfo,
  boardInsert,
  boardUpdate,
  boardDelete
}