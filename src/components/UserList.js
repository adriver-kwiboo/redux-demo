import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";

function UserList({ users, getUsers }) {
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users, getUsers]);

  return users ? (
    <table>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.name}>
              <td>{user.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <span>Loading...</span>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
  };
}
const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
