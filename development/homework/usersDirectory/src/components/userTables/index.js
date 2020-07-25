import React, { useContext } from "react";
import UserBody from "../UserBody";
import "./UserTable.css";
import UserContainerContext from "../../utils/UserContainerContext"

const UserTable = () => {
    const context = useContext(UserContainerContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <UserBody />
            </table>
        </div>
    );
}

export default UserTable;