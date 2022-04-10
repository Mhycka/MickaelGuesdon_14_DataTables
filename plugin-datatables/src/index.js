import React from "react";
import ReactDOM from "react-dom";

import DataTables from './lib/App'
import profil from './Example'
import users from './UsersMocked'

ReactDOM.render(
    <DataTables  label={profil} data={users}/>, 
document.getElementById("root"));