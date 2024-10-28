// pages/api/upload.js

import { NextResponse } from 'next/server';

export const fetchCache = 'force-no-store';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get('content');

    if (!image) {
      return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
    }

    const replicateFormData = new FormData();
    replicateFormData.append('content', image, {
      type: 'application/octet-stream',
      title: image.name,
    });

    const uploadResponse = await fetch("https://api.replicate.com/v1/files", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: replicateFormData,
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      throw new Error(`Replicate upload failed: ${errorText}`);
    }

    const uploadResult = await uploadResponse.json();
    const fileUrl = uploadResult.urls.get;

    return NextResponse.json({ fileUrl }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
