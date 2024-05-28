import React from "react";
import {Route} from "react-router-dom";

export const RouteWrapper = ({
                               Component,
                               isPublic,
                               annotation,
                               ...rest
                             }) => {
  // const currentUser = useSelector((state) => state.currentUser.data.user);
  // const userPermissions = useSelector((state) => state.permissionsByUser.data.permissionsByUser);

  // if (!isPublic&&!Cookies.get("token")) return <Redirect push to="/login"/>;

  // if (currentUser?.isSuperAdmin || !annotation || userPermissions?.[annotation])
    return <Route {...rest} render={() => <Component/>}/>;
};
