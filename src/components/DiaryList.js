import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <FilterMenu value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </FilterMenu>
  );
};

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallback = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filterdList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));

    const sortedList = filterdList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <MenuWrapper>
        <div>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <RightBox>
          <Button
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => {
              navigate("/new");
            }}
          />
        </RightBox>
      </MenuWrapper>
      {getProcessedDiaryList().map((it) => {
        return <DiaryItem key={it.id} {...it} />;
      })}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px 0;
`;

export const RightBox = styled.div`
  flex-grow: 1;

  button {
    width: 100%;
  }
`;

export const FilterMenu = styled.select`
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  font-family: "Dosis", sans-serif;
  font-size: 18px;
  cursor: pointer;
`;
