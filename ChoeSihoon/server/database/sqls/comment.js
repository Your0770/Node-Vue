const commentList = 
`select no,
        writer,
        content,
        created_date,
        updated_date,
        bno
from t_comment_board
where bno = ? 
order by no`;

module.exports = {
  commentList
}