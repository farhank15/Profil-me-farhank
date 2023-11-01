import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const GenerateComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    if (!username) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username harus diisi!",
      });
    } else {
      const randomString = generateRandomString();
      const generatedPassword = `${username}_${randomString}`;
      setPassword(generatedPassword);
    }
  };

  const generateRandomString = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!$";
    const length = 10;

    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    return randomString;
  };

  const copyToClipboard = () => {
    // menyalin password ke clipboard
    const passwordElement = document.getElementById("password");
    const passwordText = passwordElement.innerText;

    const textarea = document.createElement("textarea");
    textarea.value = passwordText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    Swal.fire({
      icon: "success",
      title: "Berhasil disalin",
      text: "Password telah disalin ke clipboard!",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen font-Agbalumo">
      <div className="p-6 border rounded-lg shadow-lg bg-white w-96 border-slate-700">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Generate Password
        </h1>
        <fieldset className="mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full rounded-md border focus:ring focus:ring-indigo-300 border-slate-300"
          />
        </fieldset>
        <div className="text-center">
          <button
            onClick={generatePassword}
            className="bg-blue-500 text-white  tracking-wider py-2 px-4 rounded-md transition ease-in delay-120 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            Generate Password
          </button>
        </div>
        <div className="mt-3 p-2 border w-full h-12 rounded-xl shadow-lg bg-white">
          {password && (
            <div className="flex justify-center items-center">
              <strong className="text-center" id="password">
                {password}
              </strong>
              <button
                onClick={copyToClipboard}
                className="ml-2 text-blue-500 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateComp;
