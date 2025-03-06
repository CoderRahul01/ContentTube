"use server";
import { redirect } from 'next/navigation';

export async function analyseYoutubeVideo(formData: FormData) {
    // Get URL from form data
    const url = formData.get("url")?.toString();
    if (!url) {
        return;
    }

    // Extract video ID from URL
    const videoId = "abc" //url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    if (!videoId) {
        return;
    }

    // Redirect to analysis page
    redirect(`/video/${videoId}/analysis`);
}