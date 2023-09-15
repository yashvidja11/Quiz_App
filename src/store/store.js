import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../components/slice/QuizdataSlice'
import {AnswerSlice} from '../components/slice/AnswerSlice'
import {NameSlice} from '../components/slice/NameSlice'
import {YourAnswerSlice} from '../components/slice/YourAnswerSlice'
import {ScoreSlice} from '../components/slice/scoreSlice'

export const Store = configureStore({
  reducer: {
    Data : counterSlice.reducer,
    Answer : AnswerSlice.reducer,
    Name : NameSlice.reducer,
    YourAnswer: YourAnswerSlice.reducer,
    Score : ScoreSlice.reducer
  },
})