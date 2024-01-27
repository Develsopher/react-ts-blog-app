import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Lorem Ipsum dolor sit amet</div>
          <div className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__author-name">Develsopher</div>
            <div className="post__date">2023.07.08 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quod, ullam tenetur necessitatibus architecto, nulla sequi debitis
            consequatur alias eveniet impedit totam consequuntur illo laborum!
            Esse expedita placeat natus laboriosam!
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
