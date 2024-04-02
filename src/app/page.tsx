"use client";

import { FC } from "react";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";

const Home: FC = () => {
	return (
		<main>
			<UploadButton
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					// Do something with the response
					console.log("Files: ", res);
					alert("Upload Completed");
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
			<UploadDropzone
				endpoint="imageUploader"
				onClientUploadComplete={(res) => {
					// Do something with the response
					console.log("Files: ", res);
					alert("Upload Completed");
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</main>
	);
};

export default Home;
