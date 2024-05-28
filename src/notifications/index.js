import {notification} from "antd";

export const successNotify = (text = "OK") => notification.success({message: text,});
export const failureNotify = (text = "Error") => notification.error({message: text});
export const errorNotification = (error) => notification.error({message: error?.data?.detail});
