import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toogleIsFetching,
  unfollow,
  toogleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);

    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(data.items)
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}

      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             toogleFollowingProgress={this.props.toogleFollowingProgress}
             followingInProgress={this.props.followingInProgress}

      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default connect(mapStateToProps, {
  follow, unfollow, toogleFollowingProgress, setUsers, setCurrentPage, setUsersTotalCount, toogleIsFetching
})(UsersContainer);