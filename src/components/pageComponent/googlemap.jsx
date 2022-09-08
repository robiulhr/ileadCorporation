import React from "react";

const Googlemap = () => {
  return (
    <div className="w-10/12 rounded-3xl mx-auto my-20">
      <iframe
        title="Google map"
        width="100%"
        className="rounded-[100px]"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=bhairab,dhaka&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Googlemap;
