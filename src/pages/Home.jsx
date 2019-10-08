import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ButtonLike';

const Home = () => (
  <div>
    <Link to="/search">
      <Button>
        Search
      </Button>
    </Link>
  </div>
);

export default Home;
