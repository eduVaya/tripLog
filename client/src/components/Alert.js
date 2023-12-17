import React from "react";
import { useSelector } from "react-redux";

export default () => {
    const alerts = useSelector((state) => state.alert);
    if (alerts !== null && alerts.length > 0) {
        return alerts.map(alert => (
            <div className={`alert alert-${alert.type}`} key={alert.id}>
                {alert.msg}
            </div>
        ))
    }
}

