import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (

    // <img width="42" height="42" viewBox="0 0 42 42"src="https://upload.wikimedia.org/wikipedia/en/e/ec/Soccer_ball.svg" alt="Logo" />

    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SportsSoccerIcon style={{ fontSize: 40 }}/>
          </Avatar> 
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
