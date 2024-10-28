// 'use client';
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpload, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// export default function ImageUploadCard() {
//   const [file, setFile] = useState(null);
//   const [status, setStatus] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setStatus("Please select a file to upload.");
//       return;
//     }

//     setStatus("Uploading...");
//     const formData = new FormData();
//     formData.append("content", file);

//     try {
//       const response = await fetch("/api/upload", { method: "POST", body: formData });

//       if (!response.ok) {
//         throw new Error("Upload failed.");
//       }

//       const data = await response.json();
//       setStatus("Upload successful!");
//       console.log("File URL:", data.fileUrl);
//       // Redirect or close the page as needed
//     } catch (error) {
//       setStatus("Error uploading file.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
//         <h2 className="text-center text-2xl font-semibold mb-4">Upload Your Image</h2>
//         <div className="flex flex-col items-center space-y-4">
//           <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
//             <input type="file" onChange={handleFileChange} className="hidden" />
//             <FontAwesomeIcon icon={faUpload} size="3x" className="text-gray-400" />
//             <p className="ml-3 text-gray-400">{file ? file.name : "Choose a file"}</p>
//           </label>
//           <button
//             onClick={handleUpload}
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             <FontAwesomeIcon icon={faUpload} className="mr-2" />
//             Upload
//           </button>
//           {status && (
//             <p className={`mt-4 ${status === "Upload successful!" ? "text-green-600" : "text-red-600"} text-center`}>
//               <FontAwesomeIcon icon={status === "Upload successful!" ? faCheckCircle : faTimesCircle} className="mr-2" />
//               {status}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function ImageUploadCard() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus("Please select a file to upload.");
      return;
    }

    setStatus("Uploading...");
    const formData = new FormData();
    formData.append("content", file);

    try {
      const response = await fetch("/api/upload", { method: "POST", body: formData });

      if (!response.ok) {
        throw new Error("Upload failed.");
      }

      const data = await response.json();
      setStatus("Upload successful!");
      console.log("File URL:", data.fileUrl);
      // Redirect or close the page as needed
    } catch {
      setStatus("Error uploading file."); // Removed 'error' variable
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-center text-2xl font-semibold mb-4">Upload Your Image</h2>
        <div className="flex flex-col items-center space-y-4">
          <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
            <input type="file" onChange={handleFileChange} className="hidden" />
            <FontAwesomeIcon icon={faUpload} size="3x" className="text-gray-400" />
            <p className="ml-3 text-gray-400">{file ? file.name : "Choose a file"}</p>
          </label>
          <button
            onClick={handleUpload}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Upload
          </button>
          {status && (
            <p className={`mt-4 ${status === "Upload successful!" ? "text-green-600" : "text-red-600"} text-center`}>
              <FontAwesomeIcon icon={status === "Upload successful!" ? faCheckCircle : faTimesCircle} className="mr-2" />
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
