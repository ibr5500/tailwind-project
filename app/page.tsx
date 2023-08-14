import React from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="flex space-x-4 justify-center my-9">
      <h1 className="border w-48 text-center text-green-500">
        Hello world!!
      </h1>
      <h2 className="border w-48 m-auto text-center text-blue-600">
        Hello world!!
      </h2>
    </div>
  );
};

export default Home;
