import { useDispatch, useSelector } from "react-redux";
// import { thunkDispatch } from "./store";

const useAppDispatch = () => useDispatch();
const useAppSelector = () => useSelector;

export { useAppDispatch, useAppSelector };
