import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { fetchAllPosts } from "../../store/post/actions";
import { selectUser } from "../../store/user/selectors";
import { selectPosts } from "../../store/post/selectors";

import Post from "../Post";

export default function Pick() {
  const allPosts = useSelector(selectPosts);
  const loginUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  if (!allPosts) {
    return <div>Loading...</div>;
  }

  const otherPosts = [...allPosts].filter(
    (post) => post.userId !== loginUser.id
  );

  console.log("filtered Posts :", otherPosts);

  const sortedPosts = [...otherPosts].sort(function (a, b) {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    return 0;
  });
  console.log("sorted Posts:", sortedPosts);

  return (
    <>
      <div>
        <Container>
          {otherPosts &&
            otherPosts.map((post) => {
              return (
                <Row style={{ backgroundColor: "orange" }} key={post.id}>
                  <Post
                    {...post}
                    button1Text={" View Location "}
                    button2Text={" Reach Me "}
                  />
                </Row>
              );
            })}
        </Container>
      </div>
    </>
  );
}
