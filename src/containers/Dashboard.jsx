import React from 'react';
import {Button, Empty} from "antd";
import {createUseStyles} from "react-jss";
import {useHistory} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '800px'
  },
  back:{
    width: '200px',
  }
});

const Dashboard = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <Empty imageStyle={{
        width: '200px',
        height: '200px'
      }} />
      <Button
        className={classes.back}
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={()=>history.push("/login")}
      >
        Назад
      </Button>
    </div>
  );
};

export default Dashboard;