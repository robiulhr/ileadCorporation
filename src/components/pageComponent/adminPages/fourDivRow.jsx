import React from 'react';

const FourDivRow = ({children}) => {
    return (
        <>
        <div className="flex-row-center">
            <div className="w-1/2">
              <div className="flex-row-center">
                <div className="w-1/2 mx-2 my-10">
                  {children[0]}
                </div>
                <div className="w-1/2 mx-2 my-10">
                  {children[1]}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex-row-center">
                <div className="w-1/2 mx-2 my-10">
                 {children[2]}
                </div>
                <div className="w-1/2 mx-2 my-10 mt-10">
                  {children[3]}
                </div>
              </div>
            </div>
          </div>   
        </>
    );
}

export default FourDivRow;
