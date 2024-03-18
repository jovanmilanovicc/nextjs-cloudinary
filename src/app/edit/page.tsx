"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>

          <Button onClick={() => setTransformation("generative-fill")}>
            Apply Generative Fill
          </Button>

          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert to Gray
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>

          <Button onClick={() => setTransformation("bg-remove")}>
            Remove Background
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <CldImage src={publicId} width="400" height="300" alt="some image" />

          <CldImage
            src={publicId}
            width="1200"
            height="1400"
            transformations={
              transformation === "grayscale"
                ? ["grayscale"]
                : transformation === "pixelate"
                ? ["pixelate"]
                : transformation === "bg-remove"
                ? ["removebg"]
                : transformation === "blur"
                ? ["blur"]
                : transformation === "generative-fill"
                ? ["e_generative:fill"]
                : undefined
            }
            alt="some image"
          />
        </div>
      </div>
    </section>
  );
}
