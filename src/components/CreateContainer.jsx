import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdCloudUpload, MdDelete, MdOutlineSubtitles } from "react-icons/md";
import { FaRupeeSign, FaProductHunt } from "react-icons/fa";
import { catagories } from "../utils/data";
import Loader from "./Loader";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { saveItem } from "../utils/firbaseFunctions";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { getAllPRODUCTS } from "../utils/firbaseFunctions";




const CreateContainer = () => {
  const [tittle, setTittle] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ products }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(uploadProgress)
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error While uploading : try again 😊");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!tittle || !discription || !imageAsset || !price || !catagory) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: tittle,
          imageURL: imageAsset,
          catagory: catagory,
          description: discription, // Corrected typo here
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.error("Error saving details: ", error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData()
  };

  const clearData = () => {
    setTittle("");
    setImageAsset(null);
    setDiscription("");
    setPrice("");
    setCatagory("Select Category");
  };

  const fetchData = async () => {
    await getAllPRODUCTS().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCTS,
        products: data,
      });
    });
  };


  return (
    <div className="w-full min-h-screen  flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-gray-300 flex items-center gap-2 ">
          <FaProductHunt className="text-xl text-gray-700 " />
          <input
            type="text"
            required
            value={tittle}
            placeholder="Give me a Tittle..."
            onChange={(e) => setTittle(e.target.value)}
            className="w-full h-full texxt-lg bg-transparent font-semibold
            outline-none border-none placeholder:text-gray-500 text-textColor"
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCatagory(e.target.value)}
            className="outline-none w-full text-base border-b-2 broder-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {catagories &&
              catagories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-headingcolor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border -2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className=" w-full h-full flex flex-col items-center justify-center cursor-pointer ">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-800" />
                      <p className="text-gray-500  hover:text-gray-800">
                        Click here to Upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      className="w-full h-full object-cover"
                      alt="uploadedimage"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 cursor-pointer text-xl outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>

                    <MdDelete className="text-white" />
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full p-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineSubtitles className="text-gray-700 text-2xl" />
            <input
              type="text "
              required
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              placeholder="Description"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className=" w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full p-2 border-b border-gray-300 flex items-center gap-2">
            <FaRupeeSign className="text-gray-700 text-2xl" />
            <input
              type="text "
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
