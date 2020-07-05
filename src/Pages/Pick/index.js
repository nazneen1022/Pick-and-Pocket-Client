import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { fetchAllPosts } from "../../store/post/actions";
import { selectUser } from "../../store/user/selectors";
import { selectPosts } from "../../store/post/selectors";

import Post from "../Post";
import "./Pick.css";

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

  // console.log("filtered Posts :", otherPosts);

  const sortedPosts = [...otherPosts].sort(function (a, b) {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    return 0;
  });
  // console.log("sorted Posts:", sortedPosts);

  return (
    <>
      <div className="myPost">
        <br />
        <Container>
          <h3>Short-time Work Posts Requests</h3>
          <div style={{ textAlign: "right" }}>
            <Link to="/PostWork">{`Create New Post`}</Link>
          </div>
          {sortedPosts &&
            sortedPosts.map((post) => {
              return (
                <>
                  <br />

                  <Card key={post.id}>
                    <Post
                      {...post}
                      button1Text={" Location "}
                      button2Text={" Email "}
                      user={loginUser}
                    />
                  </Card>
                </>
              );
            })}
          <br />

          <Link to="/">{`<< Back to Home`}</Link>

          <br />
        </Container>
      </div>
    </>
  );
}
