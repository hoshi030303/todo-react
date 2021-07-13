import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickCompleteTodo, onClickDeleteTodo } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleteTodo(index)}>完了</button>
              <button onClick={() => onClickDeleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
