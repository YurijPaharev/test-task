import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    maxWidth: 140,
    textAlign: 'center',
    padding: 5,
    border: '1px solid black',
    borderRadius: 8,
    '&:hover': {
      boxShadow: [0, 5, 3, 0, '#aaa'],
      cursor: 'pointer'
    }
  },
  title: {
    margin: [0, 'auto'],
    padding: [5, 0],
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 80
  },
  rate: {

  }
});

const Image = (props) => {
  const {image} = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{image.title}</div>
      <img className={classes.image} src={image.url} alt={image.description} />
      <div className={classes.rate}>Rate: {image.rate}</div>
    </div>
  );
}

export default Image;
