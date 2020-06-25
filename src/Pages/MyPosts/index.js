import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchMyPosts } from "../../store/myPosts/actions";
import Payment from "../../Components/Payment";

import dummyImage from "../../Images/dummyImage.png";
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
    <Container>
      {sortedMyPosts &&
        sortedMyPosts.map((post) => {
          return (
            <Row className="mypost" key={post.id}>
              <Col>
                <h3>
                  <strong>{post.title}</strong>
                </h3>
                <div>
                  <img
                    className="myImage"
                    src={post.imageUrl ? post.imageUrl : dummyImage}
                    alt=""
                    height="400px"
                  />
                </div>
                <br />
                <div>
                  <p style={{ textAlign: "left" }}>{post.description}</p>
                </div>
                <div>
                  <Payment {...post} />
                </div>
              </Col>
            </Row>
          );
        })}
    </Container>
  );
}
