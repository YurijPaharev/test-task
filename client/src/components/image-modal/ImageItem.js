import React, {useState} from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    padding: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxWidth: 320,
  },

});

const ImageModal = (props) => {
  const classes = useStyles();
  const {image, onToggle, onUpdateRate} = props;
  const [rate, setRate] = useState(image.rate);

  const updateRate = (e, rate) => {
    e.preventDefault();
    onUpdateRate(rate, image._id);
    onToggle();
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.close} onClick={onToggle}>X</div>
      <div className={classes.title}>{image.title}</div>
      <img className={classes.image} src={image.url} alt={image.description} />
      <div className={classes.description}>{image.desciption}</div>
      <div className={classes.rate}>{rate}</div>

      <div>An item to set rate</div>

      <label htmlFor="rate">
        Set rate
        <select
          value={rate}
          onChange={e => setRate(e.target.value)}
          onBlur={e => setRate(e.target.value)}
        >
          <option value="1">1</option>
          <option vlaue="2">2</option>
          <option vlaue="3">3</option>
          <option vlaue="4">4</option>
          <option vlaue="5">5</option>
        </select>
      </label>

      <button onClick={(e) => updateRate(e, rate)}>Rate!</button>
    </div>
  );
}

export default ImageModal;
