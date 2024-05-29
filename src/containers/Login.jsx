import React, {useEffect} from "react";
import {createUseStyles} from "react-jss";
import logo from "./../assest/img/logo.png"
import {useUPostMMutation} from "../rtk/universalApi";
import {Button, Form, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";
import {failureNotify, successNotify} from "../notifications";

var md5 = require('md5');


const useStyles = createUseStyles({
  wrapper: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#15283F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    width: '532px',
    padding: '1rem',
  },
  logo: {
    objectFit: 'contain',
    width: '262px',
    height: '277px'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  link: {
    marginBottom: '1rem',
  },
  "@media (max-width: 599px)": {
    main: {
      width: '399px',
      padding: '1rem',
    },
    logo: {
      objectFit: 'contain',
      width: '196px',
      height: '208px'
    },
  },
});


export const Login = () => {
  const classes = useStyles();
  const [loginUser, {isLoading, isSuccess, data: responseData}] = useUPostMMutation()
  const history = useHistory();

  useEffect(() => {
    if (isSuccess) {
      if (responseData?.success) {
        successNotify(responseData?.message)
        history.push("/dashboard");
      } else {
        failureNotify(responseData?.message)
      }
    }
  }, [isSuccess, responseData]);

  const onFinish = (values) => {
    loginUser(({
      url: 'logintest',
      data: {
        login: values.login,
        passHash: md5(values.passHash)
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }))
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo"/>
        </div>
        <Form
          name="normal_login"
          onFinish={onFinish}
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите ваш email или номер телефона',
              }
            ]}
          >
            <Input prefix={<UserOutlined/>} placeholder="Email или номер телефона"/>
          </Form.Item>
          <Form.Item
            name="passHash"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите ваш пароль',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined/>}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              type="password"
              placeholder="Введите пароль"
            />
          </Form.Item>
          <div className={classes.link}>
            <a href="#">Забыли пароль?</a>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}