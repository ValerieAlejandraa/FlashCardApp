import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ linkName="", link="", pageName="Page Name"}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item text-secondary">
            <Link to="/">Home</Link>
            </li>
            {link !== "" 
                ? 
                    <li className="breadcrumb-item text-secondary">
                        <Link to={link}>{linkName}</Link>
                    </li>
                : "" }

            <li className="breadcrumb-item active" page-current="page">
                {pageName}
            </li>
          </ol>
        </nav>

    )
}

export default BreadCrumb;