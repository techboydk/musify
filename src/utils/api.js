import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyAyHNdBstW3ADNjUHDYZfxoRUOW-0odQH4",
});

export default youtube;
