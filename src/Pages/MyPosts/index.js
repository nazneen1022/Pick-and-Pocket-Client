import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import { fetchMyPosts } from "../../store/myPosts/actions";
import Payment from "../../Components/Payment";

import "./MyPosts.css";

const selectUserPosts = (state) => state.myPosts;

export default function MyPosts() {
  const myPosts = useSelector(selectUserPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyPosts());
  }, [dispatch]);

  if (!myPosts) {
    return <div>Loading...</div>;
  }

  const sortedMyPosts = [...myPosts].sort(function (a, b) {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    return 0;
  });

  return (
    <div className="post">
      <Container>
        <br />
        <h3>MY POSTS</h3>
        {sortedMyPosts &&
          sortedMyPosts.map((post) => {
            return (
              <div key={post.id}>
                <br />
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>{post.title}</h4>
                    <br />
                    {post.description}
                    <br />
                    <br />
                    <Payment {...post} />
                  </ListGroup.Item>
                </ListGroup>
                <br />
              </div>
            );
          })}
      </Container>
      <br />
    </div>
  );
}
