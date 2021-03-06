import React, { useRef, useState, useEffect } from "react";
import styles from "./UsersManager.module.css";
import { Link } from "react-router-dom";
import LeftControl from "../AdminLeftControl";
import ShowBox from "../ShowBox";
import TableUsers from "../TableUsers";
import { Avatar, LoadingUserManage } from "../../../assets/ExportImages";
import { deleteUser, searchUsers, viewUserList } from "../../../apis";
import Loading from "../../Helper/Loading";
import Modal from "./../../Helper/Modal/index";
import { toast } from "react-toastify";
import Frame from "../Frame";
const UsersManagerAdmin = () => {
  const querySearchRef = useRef();
  const [users, setUsers] = useState();
  const [OpenModal, setOpenModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState();

  const loadUsersManage = async () => {
    await viewUserList().then((data) => {
      setUsers(data.result);
    });
  };

  useEffect(() => {
    loadUsersManage();
  }, []);

  const handleDeleteUser = (userIdToDelete) => {
    deleteUser({ userId: userIdToDelete }).then((result) => {
      toast.success("DELETE USER SUCCESS");
      loadUsersManage();
    });
  };

  const loadUsersSearched = async () => {
    const data = await searchUsers({
      pageSize: 3,
      pageIndex: 1,
      query: querySearchRef.current.value,
    });
    console.log("data searched", data.usersList);
    setUsers(data.usersList);
  };

  const submitSearch = async (event) => {
    event.preventDefault();
    await loadUsersSearched();
  };

  const searchBar = () => {
    return (<form onSubmit={(e) => submitSearch(e)}>
      <div className={styles.box}>
        <i
          className="fa fa-search"
          aria-hidden="true"
          onClick={submitSearch}
        ></i>
        <input
          type="text"
          name=""
          ref={querySearchRef}
          className={styles.searchInput}
          placeholder="Search..."
        />
      </div>
    </form>)
  }

  return (
    <div>
      {OpenModal && userIdToDelete && (
        <Modal
          setOpenModal={setOpenModal}
          title="Delete user "
          body="Are you sure you want to delete this user?"
          action={handleDeleteUser}
          userDeleteId={userIdToDelete}
        />
      )}
      <Frame searchBar={searchBar} titleToggle="users"  >
        <Link to="/admin/users-manager/create-user">
          {" "}
          <button
            type="button"
            className={`btn btn-warning mt-4 ${styles.createAccountUser}`}
          >
            Create Account for user
          </button>
        </Link>

        {users ? (
          <TableUsers
            users={users}
            OpenModal={OpenModal}
            setOpenModal={setOpenModal}
            setUserIdToDelete={setUserIdToDelete}
          />
        ) : (
          <Loading srcIcon={LoadingUserManage} />
        )}
      </Frame>
    </div>
  );
};
export default UsersManagerAdmin;
