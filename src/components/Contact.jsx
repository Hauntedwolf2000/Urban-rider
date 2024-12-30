import React, { useState } from "react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import Footer from "./Footer";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    const nameRegex = /^[a-zA-Z ]{6,}$/; // Only letters and spaces, minimum 6 characters
    if (!userData.Name || !nameRegex.test(userData.Name)) {
      errors.Name =
        "Name must be at least 6 characters long and contain only letters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.Email || !emailRegex.test(userData.Email)) {
      errors.Email = "Invalid email format.";
    }

    // Message validation
    if (!userData.Message) {
      errors.Message = "Message cannot be empty.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send form data
      console.log("Form submitted:", userData);
      // Clear form fields
      setUserData({
        Name: "",
        Email: "",
        Message: "",
      });
    }
  };

  return (
    <><div className="w-full h-auto my-14 flex items-center justify-center">
      <Card
        color="transparent"
        shadow={false}
        className="w-fit bg-white p-4 flex md:flex-row flex-col"
      >
        <div className="md:w-1/2 flex-grow-0">
          <iframe
            className="w-full h-auto md:h-full  rounded-l-md"
            width="100%"
            height="510"
            title="Google Maps"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4080270984837!2d78.44580867593397!3d17.4880252998966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9126426b868f%3A0xf015786599426b71!2sUrbanRider%20-%20Built%20for%20Riders!5e0!3m2!1sen!2sin!4v1712325333988!5m2!1sen!2sin"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
        <div className="md:w-1/2 p-4">
          <Typography variant="h4" color="blue-gray" className="text-center">
            Contact <span className="text-red-600">Us</span>
          </Typography>
          <Typography className="font-normal text-sm text-center mb-4">
            Connect with us today! We're here to listen and assist you.
          </Typography>
          <form
            className="w-full max-w-screen-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Your Name
              </Typography>
              <Input
                size="lg"
                type="text"
                placeholder="Enter your name.."
                name="Name"
                value={userData.Name}
                onChange={handleChange}
                className="border-t-blue-gray-200 focus:border-t-gray-900" />
              {errors.Name && (
                <Typography className="text-red-500 mt-1">
                  {errors.Name}
                </Typography>
              )}
            </div>

            <div className="mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Your Email
              </Typography>
              <Input
                size="lg"
                type="email"
                placeholder="abc@gmail.com"
                name="Email"
                value={userData.Email}
                onChange={handleChange}
                className="border-t-blue-gray-200 focus:border-t-gray-900" />
              {errors.Email && (
                <Typography className="text-red-500 mt-1">
                  {errors.Email}
                </Typography>
              )}
            </div>

            <div className="mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Message
              </Typography>
              <Textarea
                size="lg"
                type="text"
                placeholder="Enter your message.."
                name="Message"
                value={userData.Message}
                onChange={handleChange}
                className="border-t-blue-gray-200 focus:border-t-gray-900" />
              {errors.Message && (
                <Typography className="text-red-500 mt-1">
                  {errors.Message}
                </Typography>
              )}
            </div>

            <Button
              className="mt-4 bg-red-600 border-none"
              fullWidth
              type="submit"
            >
              Send
            </Button>
          </form>
        </div>
      </Card>
    </div><div><Footer /></div></>
  );
};

export default ContactUs;
