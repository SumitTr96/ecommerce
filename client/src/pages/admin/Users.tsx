import {
  useEffect,
  useState,
} from "react";

import {
  getAllUsers,
  deleteUser,
} from "../../api/adminApi";

import type {
  User,
} from "../../types/user";

function AdminUsers() {

  const [
    users,
    setUsers,
  ] = useState<User[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    const loadUsers =
      async () => {

        try {

          const data =
            await getAllUsers();

          setUsers(data);

        } catch (
          error
        ) {

          console.error(
            error
          );

        } finally {

          setLoading(
            false
          );

        }

      };

    loadUsers();

  }, []);

  const handleDelete =
    async (
      id: string
    ) => {

      const confirmDelete =
        window.confirm(
          "Delete user?"
        );

      if (
        !confirmDelete
      ) {
        return;
      }

      try {

        await deleteUser(
          id
        );

        setUsers(
          users.filter(
            (user) =>
              user._id !==
              id
          )
        );

      } catch (
        error
      ) {

        console.error(
          error
        );

      }

    };

  if (loading) {

    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        "
      >
        Loading users...
      </div>
    );

  }

  return (
    <div className="p-6">

      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Users
      </h1>

      {
        users.length ===
        0 ? (
          <div
            className="
            bg-white
            p-10
            rounded-xl
            shadow
            text-center
            "
          >
            No users found.
          </div>
        ) : (
          <div className="space-y-4">

            {users.map(
              (
                user
              ) => (

                <div
                  key={
                    user._id
                  }
                  className="
                  bg-white
                  p-6
                  rounded-xl
                  shadow
                  flex
                  justify-between
                  items-center
                  "
                >

                  <div>

                    <h2
                      className="
                      font-bold
                      text-lg
                      "
                    >
                      {
                        user.name
                      }
                    </h2>

                    <p>
                      {
                        user.email
                      }
                    </p>

                    <p>
                      Role:
                      {" "}
                      {
                        user.role
                      }
                    </p>

                    <p>
                      Verified:
                      {" "}
                      {
                        user.isVerified
                          ? "Yes"
                          : "No"
                      }
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(
                        user._id
                      )
                    }
                    className="
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded
                    cursor-pointer
                    hover:bg-red-600
                    transition
                    "
                  >
                    Delete
                  </button>

                </div>

              )
            )}

          </div>
        )
      }

    </div>
  );
}

export default AdminUsers;