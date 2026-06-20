import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.courseId} Course is selected</h1>
    </div>
  );
};

export default CoursesDetail;
