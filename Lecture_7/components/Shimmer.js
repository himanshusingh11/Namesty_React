import React from 'react';
import  {ShimmerPostList }  from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={5} gap={20} />
   
    </div>
  )
}

export default Shimmer;