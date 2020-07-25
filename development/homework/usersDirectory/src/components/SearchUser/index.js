import React, { useContext } from "react";
import UserContainerContext from "../../utils/UserContainerContext";

const SearchUser = () => {
    const context = useContext(UserContainerContext);

    return (
        <div className="grid-container">
            <form className="form-center">
                <input
                    className="input-group"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="button alert" type="search">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default SearchUser;