import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ButtonLike';

const Home = () => (
  <div className="my-16 text-center">
    <p>
      Just to say I know react router, now.
    </p>

    <p className="mt-4 text-2xl">
      &#128526;
    </p>

    <Link to="/search" className="mt-8 block">
      <Button className="bg-white">
        Search
      </Button>
    </Link>
  </div>
);

export default Home;
