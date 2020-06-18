import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { fetchAllPosts } from "../../store/post/actions";
import { selectPosts } from "../../store/post/selectors";

import Post from "../../Components/Post";

export default function Pick() {
  const allPosts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  if (!allPosts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        {allPosts.map((post) => {
          return (
            <Row key={post.id}>
              <Post {...post} />
            </Row>
          );
        })}
      </Container>
    </>
  );
}
