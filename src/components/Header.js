import React from "react";

function Header({ money, total }) {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div> Harcayacak {money -total} $ paranız kaldı !</div>
        )}
        {total === 0 && (
          <div>Harcamak için $ {money} paranız var !</div>
        )}
        {money - total === 0 && (
          <div>Paran bitti</div>
        )}


      </div>
    </>
  );
}

export default Header;
