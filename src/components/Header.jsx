import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: 'white',
    textDecoration: 'none',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between">
          <Link className={classes.link} to="/">Список сотрудников</Link>
          <Link className={classes.link} to="/add">Добавить запись</Link>
          <Link className={classes.link} to="/settings">Настройки</Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
