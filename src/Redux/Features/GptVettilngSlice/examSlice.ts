// examSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExamState {
  currentQuestionIndex: number;
  timeLeft: number;
  recording: boolean;
  chunks: Blob[];
  mediaRecorder: MediaRecorder | null;
  skills: { skill: string; expertise: string }[];
}

const initialState: ExamState = {
  currentQuestionIndex: 0,
  timeLeft: 120,
  recording: false,
  chunks: [],
  mediaRecorder: null,
  skills: [], // Initialize with an empty array
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    startRecording: (state, action: PayloadAction<MediaRecorder>) => {
      state.mediaRecorder = action.payload;
      state.recording = true;
      state.mediaRecorder.start();
      state.mediaRecorder.ondataavailable = (e) => {
        state.chunks.push(e.data);
      };
    },
    pauseRecording: (state) => {
      state.mediaRecorder?.pause();
      state.recording = false;
    },
    stopRecording: (state) => {
      state.mediaRecorder?.stop();
      state.recording = false;
    },
    saveRecording: (state) => {
      const blob = new Blob(state.chunks, { type: "video/webm" });
      state.chunks = [];
      // Implement saving the blob to server or local storage
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      state.timeLeft = 120; // Reset timer for the next question
    },
    setTimeLeft: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
    setSkills: (
      state,
      action: PayloadAction<{ skill: string; expertise: string }[]>
    ) => {
      state.skills = action.payload;
    },
  },
});

export const {
  startRecording,
  pauseRecording,
  stopRecording,
  saveRecording,
  nextQuestion,
  setTimeLeft,
  setSkills,
} = examSlice.actions;
export default examSlice.reducer;
