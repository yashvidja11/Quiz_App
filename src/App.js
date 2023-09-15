import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import QuizPage from './components/QuizPage';
import Form from './components/form';
import Language from './components/langues';
import Result from './components/result';
// import QuizPage from './components/jsx/QuizPage'
// import Form from './components/jsx/form';
// import Result from './components/jsx/result';
// import Language from './components/jsx/langues'
// import HindiQuizPage from './components/HindiQuiz';

function App() {
  const router = createBrowserRouter([{
path : '/' , element : <Form/>
  },
  {
    path: 'language', element:<Language/>
  },
    {
    path:'quiz/:quizID', element: <QuizPage/>
  },
  {
    path:'result' , element : <Result/>
  }
//  {
//    path:'hindiquiz/:hindiquizId' , element : <HindiQuizPage/>
//  }
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
