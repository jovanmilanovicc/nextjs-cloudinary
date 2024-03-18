"use client";
import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dfygvgacp",
  api_key: "277926471253861",
  api_secret: "2FFalV1ag1GKnDKmXVf3Jtqcgkg",
});

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("v4dfrszmrm25nymdx1iz");
  return (
    <main className="flex min-h-screen flex-col items-center   p-24">
      <CldUploadButton
        onUpload={(result: any) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="bshdrlta"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
