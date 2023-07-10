import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SERVER_API = "http://localhost:5174/api/v1";

const GET_USER_NAME = "GET_USER_NAME";
const SET_USER_NAME = "SET_USER_NAME";
const SET_IS_ROOM_HOST = "SET_IS_ROOM_HOST";
const SET_AUDIO_ONLY = "SET_AUDIO_ONLY";
const GET_ROOM_EXISTS = "GET_ROOM_EXISTS";
const SET_ROOM_ID = "SET_ROOM_ID";
const GET_PARTICIPANTS = "GET_PARTICIPANTS";

const INITIAL_STATE = {
  roomID: "",
  userName: "",
  isRoomHost: false,
  audioOnly: false,
  participants: ["James", "Jesse", "Jerome", "Janelle"],
};

export const configurationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_NAME:
      return {
        ...state,
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: payload.userName,
      };
    case SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: payload.isRoomHost,
      };
    case SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: payload.audioOnly,
      };
    case SET_ROOM_ID:
      return {
        ...state,
        roomID: payload.roomID,
      };
    default:
      return state;
  }
};

export const setIdentity = (userName) => {
  return {
    type: SET_USER_NAME,
    payload: userName,
  };
};

export const setIsRoomHost = (isRoomHost) => {
  return {
    type: SET_IS_ROOM_HOST,
    payload: { isRoomHost },
  };
};

export const setAudioOnly = (audioOnly) => {
  return {
    type: SET_AUDIO_ONLY,
    payload: { audioOnly },
  };
};

export const getRoomExists = createAsyncThunk(
  GET_ROOM_EXISTS,
  async (roomID, thunkAPI) => {
    const res = await axios.get(`${SERVER_API}/rooms/${roomID}/exists`);
    return res.data;
  }
);

export const setRoomID = (roomID) => {
  return {
    type: SET_ROOM_ID,
    payload: roomID,
  };
};

export const getParticipants = createAsyncThunk(
  GET_PARTICIPANTS,
  async (roomID, thunkAPI) => {
    const res = await axios.get(`${SERVER_API}/rooms/${roomID}/participants`);
    return res.data;
  }
);
