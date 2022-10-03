import React, { useEffect, useRef } from "react";
import ImgLogo from "../../../assets/img/icon/img-logo.png";

const ImageUploadInput = ({label}) => {
  let formDiv = useRef();
  // const [droppedFiles, setdroppedFiles] = useState(false);
  useEffect(() => {
    let isAdvancedUpload = (function () {
      var div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    })();
    if (isAdvancedUpload) {
      formDiv.current.classList.add("has-advanced-upload");
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop",
      ].forEach((event) =>
        formDiv.current.addEventListener(event, function (e) {
          e.preventDefault();
          e.stopPropagation();
        })
      );
      ["dragover", "dragenter"].forEach((event) =>
        formDiv.current.addEventListener(event, function () {
          formDiv.current.addClass("is-dragover");
        })
      );

      ["dragleave", "dragend", "drop"].forEach((event) =>
        formDiv.current.addEventListener(event, function () {
          formDiv.removeClass("is-dragover");
        })
      );

      formDiv.current.addEventListener("drop", function (e) {
        // setdroppedFiles(e.originalEvent.dataTransfer.files);
      });
    }
  }, []);
  return (
    <div>
      <form
        className="box"
        ref={formDiv}
        method="post"
        action=""
        encType="multipart/form-data"
      >
        <div className={"box__input p-32 flex-row-center imageInput-div"}>
          <input
            className="box__file hidden"
            type="file"
            name="files[]"
            id="file"
            data-multiple-caption="{count} files selected"
            multiple
          />

          <button className="box__button" type="submit"></button>
          <label htmlFor="file" className="cursor-pointer flex-coloum-center">
            <img src={ImgLogo} alt="img-logo" className="my-5" />
            <strong className=" text-primary-white-200 text-center">{label}</strong>
          </label>
        </div>
        <div className="box__uploading hidden">Uploading…</div>
        <div className="box__success hidden">Done!</div>
        <div className="box__error hidden">
          Error! <span></span>.
        </div>
      </form>
    </div>
  );
};

export default ImageUploadInput;
