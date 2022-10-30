import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id: ", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);

  return (
    <div>
      <p>edit page</p>
      <button
        onClick={() => {
          setSearchParams({ who: "woo" });
        }}
      >
        qs 바꾸기
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 가기
      </button>
    </div>
  );
};

export default Edit;
